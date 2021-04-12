// 按钮

// 车辆燃油
/* export default [
    {
        parentId: 1444,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:fuel:total:search',
    },
    {
        parentId: 1444,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:fuel:total:find',
    },
    {
        parentId: 1444,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:fuel:total:export',
    },
    {
        parentId: 1446,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:fuel:month:search',
    },
    {
        parentId: 1446,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:fuel:month:find',
    },
    {
        parentId: 1446,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:fuel:month:export',
    },
    {
        parentId: 1447,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:fuel:day:search',
    },
    {
        parentId: 1447,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:fuel:day:find',
    },
    {
        parentId: 1447,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:fuel:day:export',
    },

    // 新能源
     {
        parentId: 1448,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:energy:total:search',
    },
    {
        parentId: 1448,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:energy:total:find',
    },
    {
        parentId: 1448,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:energy:total:export',
    },
    {
        parentId: 1449,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:energy:month:search',
    },
    {
        parentId: 1449,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:energy:month:find',
    },
    {
        parentId: 1449,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:energy:month:export',
    },
    {
        parentId: 1450,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:energy:day:search',
    },
    {
        parentId: 1450,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:energy:day:find',
    },
    {
        parentId: 1450,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:energy:day:export',
    },

    // 购置
     {
        parentId: 1451,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:purchase:detail:search',
    },
    {
        parentId: 1451,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:purchase:detail:find',
    },
    {
        parentId: 1451,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:purchase:detail:export',
    },
     // 刷卡补贴
    {
        parentId: 1452,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:card:total:search',
    },
    {
        parentId: 1452,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:card:total:find',
    },
    {
        parentId: 1452,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:card:total:export',
    },
    {
        parentId: 1453,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:card:month:search',
    },
    {
        parentId: 1453,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:card:month:export',
    },
      // 延时补贴
    {
        parentId: 1454,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayTime:total:search',
    },
    {
        parentId: 1454,
        menuType: 'F',
        menuName: '新增',
        orderNum: '2',
        perms: 'subsidy:delayTime:total:insert',
    },
    {
        parentId: 1454,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:delayTime:total:find',
    },
    {
        parentId: 1454,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:delayTime:total:export',
    },
    {
        parentId: 1455,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayTime:month:search',
    },
    {
        parentId: 1455,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:delayTime:month:find',
    },
    {
        parentId: 1455,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:delayTime:month:export',
    },
    {
        parentId: 1456,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayTime:day:search',
    },
    {
        parentId: 1456,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:delayTime:day:find',
    },
    {
        parentId: 1456,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:delayTime:day:export',
    },
    // 延时补贴配置
    {
        parentId: 1457,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayTime:total:config:search',
    },
    {
        parentId: 1457,
        menuType: 'F',
        menuName: '新增',
        orderNum: '2',
        perms: 'subsidy:delayTime:total:config:insert',
    },
    {
        parentId: 1457,
        menuType: 'F',
        menuName: '修改',
        orderNum: '3',
        perms: 'subsidy:delayTime:total:config:update',
    },
    {
        parentId: 1457,
        menuType: 'F',
        menuName: '查看',
        orderNum: '4',
        perms: 'subsidy:delayTime:total:config:find',
    },
    {
        parentId: 1457,
        menuType: 'F',
        menuName: '删除',
        orderNum: '5',
        perms: 'subsidy:delayTime:total:config:delete',
    },
    {
        parentId: 1457,
        menuType: 'F',
        menuName: '导出',
        orderNum: '6',
        perms: 'subsidy:delayTime:total:config:export',
    },
    // 延线补贴
    {
        parentId: 1461,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayLine:total:search',
    },
    {
        parentId: 1461,
        menuType: 'F',
        menuName: '新增',
        orderNum: '2',
        perms: 'subsidy:delayLine:total:insert',
    },
    {
        parentId: 1461,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:delayLine:total:find',
    },
    {
        parentId: 1461,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:delayLine:total:export',
    },
    {
        parentId: 1462,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayLine:month:search',
    },
    {
        parentId: 1462,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:delayLine:month:find',
    },
    {
        parentId: 1462,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:delayLine:month:export',
    },
    {
        parentId: 1463,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayLine:day:search',
    },
    {
        parentId: 1463,
        menuType: 'F',
        menuName: '查看',
        orderNum: '2',
        perms: 'subsidy:delayLine:day:find',
    },
    {
        parentId: 1463,
        menuType: 'F',
        menuName: '导出',
        orderNum: '3',
        perms: 'subsidy:delayLine:day:export',
    },
    // 延线补贴配置
    {
        parentId: 1464,
        menuType: 'F',
        menuName: '查询',
        orderNum: '1',
        perms: 'subsidy:delayLine:total:config:search',
    },
    {
        parentId: 1464,
        menuType: 'F',
        menuName: '新增',
        orderNum: '2',
        perms: 'subsidy:delayLine:total:config:insert',
    },
    {
        parentId: 1464,
        menuType: 'F',
        menuName: '修改',
        orderNum: '3',
        perms: 'subsidy:delayLine:total:config:update',
    },
    {
        parentId: 1464,
        menuType: 'F',
        menuName: '查看',
        orderNum: '4',
        perms: 'subsidy:delayLine:total:config:find',
    },
    {
        parentId: 1464,
        menuType: 'F',
        menuName: '删除',
        orderNum: '5',
        perms: 'subsidy:delayLine:total:config:delete',
    },
    {
        parentId: 1464,
        menuType: 'F',
        menuName: '导出',
        orderNum: '6',
        perms: 'subsidy:delayLine:total:config:export',
    },
    // 城乡公交补贴
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
        menuType: "M", // 菜单类型  M目录 C菜单 F按钮

        // 一定变
        component: "Blank",
        name: "Blank",// 菜单name
        menuName: "城乡公交补贴", // 菜单名称
        orderNum: 7, //排序
        path: "cityCounty",// 路由地址
        children: [
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "cascader", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                path: "total",// 路由地址
                component: "subsidy/cityCounty/total",
                name: "subsidy_cityCounty_total",// 菜单name
                perms: "subsidy:cityCounty:total:page", // 权限标识

                menuName: "城乡补贴总报表", // 菜单名称
                orderNum: 1, //排序
                children: [
                    {
                        menuType: 'F',
                        menuName: '查询',
                        orderNum: '1',
                        perms: 'subsidy:cityCounty:total:search',
                    },
                    {
                        menuType: 'F',
                        menuName: '新增',
                        orderNum: '2',
                        perms: 'subsidy:cityCounty:total:insert',
                    },
                    {
                        menuType: 'F',
                        menuName: '查看',
                        orderNum: '3',
                        perms: 'subsidy:cityCounty:total:find',
                    },
                    {
                        menuType: 'F',
                        menuName: '导出',
                        orderNum: '4',
                        perms: 'subsidy:cityCounty:total:export',
                    },
                ]
            },
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "cascader", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                path: "month",// 路由地址
                component: "subsidy/cityCounty/month",
                name: "subsidy_cityCounty_month",// 菜单name
                perms: "subsidy:cityCounty:month:page", // 权限标识
                menuName: "城乡补贴月统计", // 菜单名称
                orderNum: 2, //排序
                children: [
                    {
                        menuType: 'F',
                        menuName: '查询',
                        orderNum: '1',
                        perms: 'subsidy:cityCounty:month:search',
                    },
                    {
                        menuType: 'F',
                        menuName: '查看',
                        orderNum: '2',
                        perms: 'subsidy:cityCounty:month:find',
                    },
                    {
                        menuType: 'F',
                        menuName: '导出',
                        orderNum: '3',
                        perms: 'subsidy:cityCounty:month:export',
                    },
                ]
            },
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "cascader", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                path: "day",// 路由地址
                component: "subsidy/cityCounty/day",
                name: "subsidy_cityCounty_day",// 菜单name
                perms: "subsidy:cityCounty:day:page", // 权限标识
                menuName: "城乡补贴日统计", // 菜单名称
                orderNum: 3, //排序
                children: [
                    {
                        menuType: 'F',
                        menuName: '查询',
                        orderNum: '1',
                        perms: 'subsidy:cityCounty:day:search',
                    },
                    {
                        menuType: 'F',
                        menuName: '查看',
                        orderNum: '2',
                        perms: 'subsidy:cityCounty:day:find',
                    },
                    {
                        menuType: 'F',
                        menuName: '导出',
                        orderNum: '3',
                        perms: 'subsidy:cityCounty:day:export',
                    },
                ]
            },
        ]
    },
    // 视频
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
        path: "video",// 路由地址
        name: "subsidy_video",// 菜单name
        component: "subsidy/video",
        perms: 'subsidy:video:page',
        menuName: "补贴视频管理", // 菜单名称
        orderNum: 8, //排序
        children: [
            {
                menuType: 'F',
                menuName: '查询',
                orderNum: '1',
                perms: 'subsidy:video:search',
            },
            {
                menuType: 'F',
                menuName: '导入',
                orderNum: '2',
                perms: 'subsidy:video:import',
            },
            {
                menuType: 'F',
                menuName: '导出',
                orderNum: '3',
                perms: 'subsidy:video:export',
            },
            {
                menuType: 'F',
                menuName: '确认',
                orderNum: '4',
                perms: 'subsidy:video:affirm',
            },
            {
                menuType: 'F',
                menuName: '驳回',
                orderNum: '5',
                perms: 'subsidy:video:reject',
            },
            {
                menuType: 'F',
                menuName: '查看',
                orderNum: '6',
                perms: 'subsidy:video:find',
            },
        ]
    }

] */

export default [
    // 城乡公交补贴
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
        menuType: "M", // 菜单类型  M目录 C菜单 F按钮

        // 一定变
        component: "Blank",
        name: "Blank",// 菜单name
        menuName: "城乡公交补贴", // 菜单名称
        orderNum: 7, //排序
        path: "cityCounty",// 路由地址
        children: [
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "cascader", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                path: "total",// 路由地址
                component: "subsidy/cityCounty/total",
                name: "subsidy_cityCounty_total",// 菜单name
                perms: "subsidy:cityCounty:total:page", // 权限标识

                menuName: "城乡补贴总报表", // 菜单名称
                orderNum: 1, //排序
                children: [
                    {
                        menuType: 'F',
                        menuName: '查询',
                        orderNum: '1',
                        perms: 'subsidy:cityCounty:total:search',
                    },
                    {
                        menuType: 'F',
                        menuName: '新增',
                        orderNum: '2',
                        perms: 'subsidy:cityCounty:total:insert',
                    },
                    {
                        menuType: 'F',
                        menuName: '查看',
                        orderNum: '3',
                        perms: 'subsidy:cityCounty:total:find',
                    },
                    {
                        menuType: 'F',
                        menuName: '导出',
                        orderNum: '4',
                        perms: 'subsidy:cityCounty:total:export',
                    },
                ]
            },
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "cascader", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                path: "month",// 路由地址
                component: "subsidy/cityCounty/month",
                name: "subsidy_cityCounty_month",// 菜单name
                perms: "subsidy:cityCounty:month:page", // 权限标识
                menuName: "城乡补贴月统计", // 菜单名称
                orderNum: 2, //排序
                children: [
                    {
                        menuType: 'F',
                        menuName: '查询',
                        orderNum: '1',
                        perms: 'subsidy:cityCounty:month:search',
                    },
                    {
                        menuType: 'F',
                        menuName: '查看',
                        orderNum: '2',
                        perms: 'subsidy:cityCounty:month:find',
                    },
                    {
                        menuType: 'F',
                        menuName: '导出',
                        orderNum: '3',
                        perms: 'subsidy:cityCounty:month:export',
                    },
                ]
            },
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "cascader", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                path: "day",// 路由地址
                component: "subsidy/cityCounty/day",
                name: "subsidy_cityCounty_day",// 菜单name
                perms: "subsidy:cityCounty:day:page", // 权限标识
                menuName: "城乡补贴日统计", // 菜单名称
                orderNum: 3, //排序
                children: [
                    {
                        menuType: 'F',
                        menuName: '查询',
                        orderNum: '1',
                        perms: 'subsidy:cityCounty:day:search',
                    },
                    {
                        menuType: 'F',
                        menuName: '查看',
                        orderNum: '2',
                        perms: 'subsidy:cityCounty:day:find',
                    },
                    {
                        menuType: 'F',
                        menuName: '导出',
                        orderNum: '3',
                        perms: 'subsidy:cityCounty:day:export',
                    },
                ]
            },
        ]
    },
]