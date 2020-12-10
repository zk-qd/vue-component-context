
const fs = require('fs'),
    chalk = require('chalk'),
    path = require('path'),
    http = require('http'),
    {
        handleTree
    } = require('../../../../utils/ruoyi'),
    {
        wrap,
        auto,
    } = require('zk-generator-automatic');

const config = {
    envPlace: path.join(__dirname, '../../../../../.env.developmenet'), // 环境文件位置
    hostPattern: /VUE_APP_OUTER_ORIGIN\s*=\s*(.*)/, // 主机匹配
    apiPrefixPattern: /VUE_APP_BASE_API\s*=\s*(.*)/, // api前缀匹配
    pathPrefix: '',// 路径前缀
    token: '',
    menuPagePath: '/menu/list',
    menuPageMethod: 'get',
    menuDelPath: '/menu/remove/',
    menuDelMethod: 'delete',
},
    baseInfo = {
        host: '',
        apiPrefix: '',
    };

// 获取基本信息
function* getBaseInfo() {
    let content = yield wrap(fs.readFile)(config.envPlace, 'utf-8');
    baseInfo.host = content.match(config.hostPattern)[1];
    baseInfo.apiPrefix = content.match(config.apiPrefixPattern)[1];
}

// 获取菜单
function getMenu() {
    return new Promise((resolve, reject) => {
        const req = http.request({
            url: config.menuPagePath,
            method: config.menuPageMethod,
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
    return new Promise((resolve, reject) => {
        const req = http.request({
            url: config.menuDelPath + id,
            method: config.menuDelMethod,
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
    menus.forEach(item => {
        // 存在则继续递归
        if (item.children) await recursionDel(item.children);
        // 删除当前菜单
        await delMenu(item.menuId);
    })
}


async function execute(pid) {
    // 设置基本信息
    await auto(getBaseInfo);
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