
'use strict'

const {
    generatorFile,
    writeMenuData,
} = require('./writeFile')

// 混入属性
const mixins = {
    // 不变
    crumb: "noClick", // 面包屑
    isFrame: "1", // 是否外链 1否
    status: "0", // 菜单状态 0正常 1停用
    alwaysShow: false, //是否隐藏目录
}

/**
 * @property type 0 一级目录  1 二级目录  2 菜单  3 按钮
 * @property menuName 菜单名称
 * @porperty path 路径
 * ! 上面是目录菜单按钮必填的
 * @property icon 图标  按钮和隐藏的菜单不要
 * @property ph 占位符 如： /:id 没有占位符的不写
 * @property children 子项 没有可以不息
 * 
 * 生成规则
 * @property visible 0 显示 1 隐藏 有icon的为0没有为1不需要配置
 * @property main true 主文件 false 非主文件  主文件必须放在第一个
 * @property untify true 生成unify false 不生成
 *  */
const testConfig = [
    {
        type: 0,
        path: 'charge',
        menuName: '充电桩补贴管理',
        icon: 'yunyingshang',
        children: [
            {
                type: 1,
                path: 'basic',
                menuName: '充电信息管理',
                icon: 'yunyingshang',
                children: [
                    {
                        type: 2,
                        path: 'carrier',
                        menuName: '充电运营商管理',
                        icon: 'yunyingshang',
                        main: true,
                        unify: true,
                        children: [
                            {
                                type: 3,
                                menuName: '查询',
                                path: 'search',
                            },
                            {
                                type: 3,
                                menuName: '新增',
                                path: 'insert',
                            },
                            {
                                type: 3,
                                menuName: '查看',
                                path: 'find',
                            },
                            {
                                type: 3,
                                menuName: '修改',
                                path: 'update',
                            },
                            {
                                type: 3,
                                menuName: '删除',
                                path: 'delete',
                            },
                        ],
                    },
                    {
                        type: 2,
                        path: 'carrier/insert',
                        menuName: '充电运营商新增',
                    },
                    {
                        type: 2,
                        path: 'carrier/find',
                        menuName: '充电运营商查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'carrier/update',
                        menuName: '充电运营商修改',
                        ph: '/:id'
                    },
                ]
            }
        ]
    },
]
/** 
    生成菜单数据,以及生成文件
*/
function generator(menuConfig, { paths = [] } = {}) {
    return menuConfig.map((item, index) => {
        switch (Number(item.type)) {
            case 0:
                return type0(item, index, paths);
            case 1:
                return type1(item, index, paths);
            case 2:
                return type2(item, index, paths);
            case 3:
                return type3(item, index, paths);
        }
    })
}


module.exports = function execute(menuConfig) {
    let content = generator(menuConfig);
    writeMenuData(content);
}




// 通过type获取菜单类型
function getMenuType(type) {
    let types = ['M', 'M', 'C', 'F'];
    return types[type];
}
// 一级目录
function type0(item, index, paths) {
    paths = [...paths, item.path];
    generatorFile(paths, item)
    return {
        // 不一定变
        icon: item.icon, // 图标
        visible: item.icon ? '0' : '1', // 显示状态 0显示 1隐藏
        menuType: getMenuType(item.type), // 菜单类型  M目录 C菜单 F按钮
        menuName: item.menuName, // 菜单名称
        path: item.path,// 路由地址
        orderNum: index, //排序

        component: "Layout",
        name: "Layout",// 菜单name

        parentId: 0, //父id

        children: item.children && generator(item.children, { paths }),
        ...mixins,
    }
}
// 二级目录
function type1(item, index, paths) {
    paths = [...paths, item.path];
    generatorFile(paths, item)
    return {
        // 不一定变
        icon: item.icon, // 图标
        visible: item.icon ? '0' : '1', // 显示状态 0显示 1隐藏
        menuType: getMenuType(item.type), // 菜单类型  M目录 C菜单 F按钮
        menuName: item.menuName, // 菜单名称
        path: item.path,// 路由地址
        orderNum: index, //排序

        component: "Blank",
        name: "Blank",// 菜单name

        children: item.children && generator(item.children, { paths }),
        ...mixins,
    }
}
// 菜单
function type2(item, index, paths) {
    // 按钮都是放在主页面下面,如果放在其他页面下面如insert 就会出现按钮权限 insert:insert 有两个insert
    paths = [...paths, ...item.path.split('/')];
    generatorFile(paths, item)
    return {
        // 不一定变
        icon: item.icon, // 图标
        visible: item.icon ? '0' : '1', // 显示状态 0显示 1隐藏
        menuType: getMenuType(item.type), // 菜单类型  M目录 C菜单 F按钮
        menuName: item.menuName, // 菜单名称
        path: item.ph ? item.path + item.ph : item.path,// 路由地址
        orderNum: index, //排序
        perms: paths.join(':') + ':page', // 权限标识
        component: paths.join('/'),
        name: paths.join('_'),// 菜单name
        children: item.children && generator(item.children, { paths }),
        ...mixins,
    }
}
// 按钮
function type3(item, index, paths) {
    paths = [...paths, item.path];
    generatorFile(paths, item)
    return {
        // 不一定变
        menuType: getMenuType(item.type), // 菜单类型  M目录 C菜单 F按钮
        menuName: item.menuName, // 菜单名称
        orderNum: index, //排序
        perms: paths.join(':'), // 权限标识
    }
}


