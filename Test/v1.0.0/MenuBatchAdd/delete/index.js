
const fs = require('fs'),
    chalk = require('chalk'),
    path = require('path'),
    http = require('http'),
    url = require('url'),
    {
        wrap,
        auto,
    } = require('@zk-npm/gen-automation');
const { resolve } = require('path');
const config = {
    envPlace: path.join(__dirname, '../../../../../.env.development'), // 环境文件位置
    hostPattern: /VUE_APP_OUTER_ORIGIN\s*=\s*["'](.*)["']/, // 主机匹配
    apiPrefixPattern: /VUE_APP_BASE_API\s*=\s*["'](.*)["']/, // api前缀匹配
    pathPrefix: '',// 路径前缀
    token: '',
    menuPagePath: '/menu/list',
    menuPageMethod: 'get',
    menuDelPath: '/menu/remove/',
    menuDelMethod: 'delete',
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6WyIqIl0sInRpY2siOjE2MDg2MDYzOTI4MDAsInVzZXJuYW1lIjoiYWRtaW4ifQ.0HiedB0Z7b3lf1_VwBD0WFRFNQOIzI0st2GNG7SqBVU',
},
    baseInfo = {
        origin: '',
        apiPrefix: '',
    };

// 获取基本信息
function* getBaseInfo() {
    let content = yield wrap(fs.readFile)(config.envPlace, 'utf-8');
    baseInfo.origin = content.match(config.hostPattern)[1];
    baseInfo.apiPrefix = content.match(config.apiPrefixPattern)[1];
}

// 获取菜单W
function getMenu() {
    let href = baseInfo.origin /* + baseInfo.apiPrefix */ + config.menuPagePath;
    return new Promise((resolve, reject) => {
        const req = http.request({
            ...url.parse(href),
            method: config.menuPageMethod,
            headers: {
                token: config.token,
            }
        }, res => {
            let t = [];
            res.on('data', chunk => t.push(chunk.toString('utf-8')));
            res.on('end', () => resolve(t.join('')))
        }).on('err', e => reject(e));
        req.end();
    });
}

// 删除菜单
function delMenu(id) {
    let href = baseInfo.origin /* + baseInfo.apiPrefix */ + config.menuDelPath + id;
    return new Promise((resolve, reject) => {
        const req = http.request({
            ...url.parse(href),
            method: config.menuDelMethod,
            headers: {
                token: config.token,
            }
        }, res => {
            let t = [];
            res.on('data', chunk => t.push(chunk.toString('utf-8')));
            res.on('end', () => resolve(t.join('')))
        }).on('err', reject);
        req.end()
    });
}


// 递归删除
/* 
    删除还有些问题：由于循环 不同函数无法等待，
    需要多调用几次


    已优化
*/
async function recursionDel(menus) {
    let i = 0; len = menus.length;
    for (; i < len; i++) {
        let item = menus[i];
        await runDel(item);
    }
}
async function runDel(item) {
    // 存在则继续递归
    if (item.children) await recursionDel(item.children);
    // 删除当前菜单
    let result = JSON.parse(await delMenu(item.menuId));
    console.log(chalk.blue(result.msg, '成功删除', item.menuId))
}

function handleTree(data, id, parentId, children, rootId) {
    id = id || 'id'
    parentId = parentId || 'parentId'
    children = children || 'children'
    rootId = rootId || 0
    //对源数据深度克隆
    const cloneData = JSON.parse(JSON.stringify(data))
    //循环所有项
    const treeData = cloneData.filter(father => {
        let branchArr = cloneData.filter(child => {
            //返回每一项的子级数组
            return father[id] === child[parentId]
        });
        branchArr.length > 0 ? father.children = branchArr : '';
        //返回第一层
        return father[parentId] === rootId;
    });
    return treeData != '' ? treeData : data;
}


/**
 * @param {Array or Number} menuIds 要删除的菜单id
 * todo： 既可以传入数组也可以传入数字
 * * 传入数组删除多个一级目录菜单
 * !目前只能传入一级目录删除及以下，传入二级或者三级等是不能删除的
 *  */
async function execute(menuIds) {
    // 安全策略
    if (!(menuIds instanceof Array)) menuIds = [menuIds];
    // 设置基本信息
    await new Promise((resolve, reject) => {
        auto(getBaseInfo, resolve);
    });
    // 获取所有菜单
    let menus = JSON.parse(await getMenu()).data;
    // 转成树状结构
    menus = handleTree(menus, 'menuId')
    // 筛选出需要的目录
    menus = menuIds.map(menuId => {
        let menu = menus.find(menu => menu.menuId == menuId);
        if (menu) {
            return menu;
        } else {
            console.log(menuId, '菜单已经被删除，或者本就不存在')
            return null;
        }
    });
    // 去除为null的目录
    menus = menus.filter(menu => menu);

    // 递归删除
    recursionDel(menus);
}



module.exports = execute;