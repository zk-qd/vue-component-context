
const fs = require('fs'),
    chalk = require('chalk'),
    path = require('path'),
    http = require('http'),
    url = require('url'),
    {
        wrap,
        auto,
    } = require('zk-generator-automatic');
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
    token: '',
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
    let href = baseInfo.origin + baseInfo.apiPrefix + config.menuPagePath;
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
    let href = baseInfo.origin + baseInfo.apiPrefix + config.menuDelPath + id;
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
async function recursionDel(menus) {
    menus.forEach(async item => {
        // 存在则继续递归
        if (item.children) await recursionDel(item.children);
        // 删除当前菜单
        await delMenu(item.menuId);
    })
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


async function execute(pid) {
    // 设置基本信息
    await new Promise((resolve, reject) => {
        auto(getBaseInfo, resolve);
    });
    // 获取所有菜单
    let menus = await getMenu();
    // 筛选出菜单
    let menu = menus.find(item => item.id == pid);
    // 转成树状结构
    menu = handleTree([menu], 'menuId');
    // 递归删除
    recursionDel(menu);
}



module.exports = execute;