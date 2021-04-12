const path = require('path');
const fs = require('fs')
const writedir = path.resolve(__dirname, 'data');
// 适配菜单
let level = 0;

// 需要调整的
const ucar = require("../menu/service.json");

entry(ucar, 'service.json');



function adapterNav(menus) {
    level++;
    return menus.map(item => {
        return {
            // 菜單需要的屬性
            "hidden": !!(item.visible - 0),
            "alwaysShow": !!item.alwaysShow,
            "path": level == 1 ? '/' + item.path : item.path,
            "component": item.component,
            "name": item.name,
            "meta": {
                "title": item.menuName,
                "icon": item.icon,
                "crumb": item.crumb,
            },
            "children": filterChildren(item)
        }
    })
}

// 筛选合适的children
function filterChildren(item) {
    if (item.children && item.children.length && item.children[0].menuType !== 'F') {
        return adapterNav(item.children)
    } else return undefined;
}

// 写入数据
function writeNav(navs, writefile) {
    fs.writeFile(path.resolve(writedir, writefile), JSON.stringify(navs), 'utf-8', (err, data) => {
        if (err) console.log('写入失败');
        else console.log('写入成功');
    })
}
// 调用入口 menus: 菜单数据，writefile: 写入的文件名称
function entry(menus, writefile) {
    const navs = adapterNav(menus);
    writeNav(navs, writefile);
}


/**
 * 目的：
 * 如果后台没有搭建系统管理，那么前端可以通过这个方式将导航数据获取，从而放入本地先开发前端页面
 *  */
