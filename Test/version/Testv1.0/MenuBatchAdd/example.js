
// 第一层需要写parentId其他的不用
export default [
    {
        // 不变
        crumb: "noClick", // 面包屑
        icon: "cascader", // 图标
        isFrame: "1", // 是否外链 1否
        status: "0", // 菜单状态 0正常 1停用

        // 不一定变
        alwaysShow: false, //是否隐藏目录
        visible: "0", // 显示状态 0显示 1隐藏
        parentId: 1194, //父id
        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

        // 一定变
        path: "cityCounty",// 路由地址
        component: "Blank",
        name: "Blank",// 菜单name
        perms: "subsidy:delayLine:total:config:insert:page", // 权限标识
        menuName: "城乡公交补贴", // 菜单名称
        orderNum: 7, //排序
    }
]

// 目录对比菜单 少了perms字段  按钮只有parentId(代码自动添加) menuType menuName orderNum perms

/* alwaysShow: false
children: []
component: "subsidy/delayLine/total/config/insert"
createBy: "dev"
createDate: null
crumb: "noClick"
icon: "cascader"
isFrame: "1"
menuId: 1465
menuName: "新增延线配置"
menuType: "C"
name: "subsidy_delayLine_total_config_insert"
orderNum: "1"
parentId: 1199
parentName: null
path: "total/config/insert"
perms: "subsidy:delayLine:total:config:insert:page"
redirect: null
remark: null
status: "0"
updateBy: null
updateDate: null
visible: "0" */
