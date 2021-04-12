
// 先把图片菜单加上

export default [
    {
        // 不变
        crumb: "noClick", // 面包屑
        icon: "chongdianzhuang", // 图标
        isFrame: "1", // 是否外链 1否
        status: "0", // 菜单状态 0正常 1停用

        // 不一定变
        alwaysShow: false, //是否隐藏目录
        visible: "0", // 显示状态 0显示 1隐藏
        parentId: 0, //父id
        menuType: "M", // 菜单类型  M目录 C菜单 F按钮

        // 一定变
        component: "Layout",
        name: "Layout",// 菜单name
        menuName: "充电桩补贴管理", // 菜单名称
        orderNum: 27, //排序
        path: "charge",// 路由地址
        children: [
            // 充电信息管理
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "jichuxinxi", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "M", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                component: "Blank",
                name: "Blank",// 菜单name
                menuName: "充电信息管理", // 菜单名称
                orderNum: 1, //排序
                path: "basic",// 路由地址
                children: [
                    // 充电运营商管理
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "yunyingshang", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "carrier",// 路由地址
                        component: "charge/basic/carrier",
                        name: "charge_basic_carrier",// 菜单name
                        perms: "charge:basic:carrier:page", // 权限标识
                        menuName: "充电运营商管理", // 菜单名称
                        orderNum: 1, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:basic:carrier:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '新增',
                                orderNum: '2',
                                perms: 'charge:basic:carrier:insert',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '3',
                                perms: 'charge:basic:carrier:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '修改',
                                orderNum: '4',
                                perms: 'charge:basic:carrier:update',
                            },
                            {
                                menuType: 'F',
                                menuName: '删除',
                                orderNum: '5',
                                perms: 'charge:basic:carrier:delete',
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
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "carrier/insert",// 路由地址
                        component: "charge/basic/carrier/insert",
                        name: "charge_basic_carrier_insert",// 菜单name
                        perms: "charge:basic:carrier:insert:page", // 权限标识
                        menuName: "充电运营商新增", // 菜单名称
                        orderNum: 1, //排序
                    },
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "cascader", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "carrier/update/:id",// 路由地址
                        component: "charge/basic/carrier/update",
                        name: "charge_basic_carrier_update",// 菜单name
                        perms: "charge:basic:carrier:update:page", // 权限标识
                        menuName: "充电运营商修改", // 菜单名称
                        orderNum: 1, //排序
                    },
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "cascader", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "carrier/find/:id",// 路由地址
                        component: "charge/basic/carrier/find",
                        name: "charge_basic_carrier_find",// 菜单name
                        perms: "charge:basic:carrier:find:page", // 权限标识
                        menuName: "充电运营商详情", // 菜单名称
                        orderNum: 1, //排序
                    },
                    // 充电站场管理
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "chongdianzhuang", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "station",// 路由地址
                        component: "charge/basic/station",
                        name: "charge_basic_station",// 菜单name
                        perms: "charge:basic:station:page", // 权限标识
                        menuName: "充电站场管理", // 菜单名称
                        orderNum: 2, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:basic:station:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '新增',
                                orderNum: '2',
                                perms: 'charge:basic:station:insert',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '3',
                                perms: 'charge:basic:station:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '修改',
                                orderNum: '4',
                                perms: 'charge:basic:station:update',
                            },
                            {
                                menuType: 'F',
                                menuName: '删除',
                                orderNum: '5',
                                perms: 'charge:basic:station:delete',
                            },
                            {
                                menuType: 'F',
                                menuName: '站场地图',
                                orderNum: '6',
                                perms: 'charge:basic:station:map',
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
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "station/insert",// 路由地址
                        component: "charge/basic/station/insert",
                        name: "charge_basic_station_insert",// 菜单name
                        perms: "charge:basic:station:insert:page", // 权限标识
                        menuName: "充电站场新增", // 菜单名称
                        orderNum: 2, //排序
                    },
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "cascader", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "station/update/:id",// 路由地址
                        component: "charge/basic/station/update",
                        name: "charge_basic_station_update",// 菜单name
                        perms: "charge:basic:station:update:page", // 权限标识
                        menuName: "充电站场修改", // 菜单名称
                        orderNum: 2, //排序
                    },
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "cascader", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "station/map",// 路由地址
                        component: "charge/basic/station/map",
                        name: "charge_basic_station_map",// 菜单name
                        perms: "charge:basic:station:map:page", // 权限标识
                        menuName: "充电站场地图", // 菜单名称
                        orderNum: 2, //排序
                    },
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "cascader", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "station/find/:id",// 路由地址
                        component: "charge/basic/station/find",
                        name: "charge_basic_station_find",// 菜单name
                        perms: "charge:basic:station:find:page", // 权限标识
                        menuName: "充电站场详情", // 菜单名称
                        orderNum: 2, //排序
                    },
                    // 充电服务商管理
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "fuwushang", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "provider",// 路由地址
                        component: "charge/basic/provider",
                        name: "charge_basic_provider",// 菜单name
                        perms: "charge:basic:provider:page", // 权限标识
                        menuName: "充电服务商管理", // 菜单名称
                        orderNum: 3, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:basic:provider:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '新增',
                                orderNum: '2',
                                perms: 'charge:basic:provider:insert',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '3',
                                perms: 'charge:basic:provider:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '修改',
                                orderNum: '4',
                                perms: 'charge:basic:provider:update',
                            },
                            {
                                menuType: 'F',
                                menuName: '删除',
                                orderNum: '5',
                                perms: 'charge:basic:provider:delete',
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
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "provider/insert",// 路由地址
                        component: "charge/basic/provider/insert",
                        name: "charge_basic_provider_insert",// 菜单name
                        perms: "charge:basic:provider:insert:page", // 权限标识
                        menuName: "充电服务商新增", // 菜单名称
                        orderNum: 3, //排序
                    },
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "cascader", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "provider/update/:id",// 路由地址
                        component: "charge/basic/provider/update",
                        name: "charge_basic_provider_update",// 菜单name
                        perms: "charge:basic:provider:update:page", // 权限标识
                        menuName: "充电服务商修改", // 菜单名称
                        orderNum: 3, //排序
                    },
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "cascader", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "provider/find/:id",// 路由地址
                        component: "charge/basic/provider/find",
                        name: "charge_basic_provider_find",// 菜单name
                        perms: "charge:basic:provider:find:page", // 权限标识
                        menuName: "充电服务商详情", // 菜单名称
                        orderNum: 3, //排序
                    },
                    // 充电终端管理
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "zhongduan", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "terminal",// 路由地址
                        component: "charge/basic/terminal",
                        name: "charge_basic_terminal",// 菜单name
                        perms: "charge:basic:terminal:page", // 权限标识
                        menuName: "充电终端管理", // 菜单名称
                        orderNum: 4, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:basic:terminal:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '2',
                                perms: 'charge:basic:terminal:find',
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
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "terminal/find/:id",// 路由地址
                        component: "charge/basic/terminal/find",
                        name: "charge_basic_terminal_find",// 菜单name
                        perms: "charge:basic:terminal:find:page", // 权限标识
                        menuName: "充电终端详情", // 菜单名称
                        orderNum: 4, //排序
                    },

                ]
            },
            // 充电记录管理
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "lianluojilu", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "M", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                component: "Blank",
                name: "Blank",// 菜单name
                menuName: "充电记录管理", // 菜单名称
                orderNum: 2, //排序
                path: "record",// 路由地址
                children: [
                    // 充电记录明细
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "mingxi", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "detail",// 路由地址
                        component: "charge/record/detail",
                        name: "charge_record_detail",// 菜单name
                        perms: "charge:record:detail:page", // 权限标识
                        menuName: "充电记录明细", // 菜单名称
                        orderNum: 1, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:record:detail:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '2',
                                perms: 'charge:record:detail:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '导出',
                                orderNum: '3',
                                perms: 'charge:record:detail:export',
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
                        visible: "1", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "detail/find/:id",// 路由地址
                        component: "charge/record/detail/find",
                        name: "charge_record_detail_find",// 菜单name
                        perms: "charge:record:detail:find:page", // 权限标识
                        menuName: "充电记录详情", // 菜单名称
                        orderNum: 1, //排序
                    },
                    // 月度记录核对
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "hedui", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "total",// 路由地址
                        component: "charge/record/total",
                        name: "charge_record_total",// 菜单name
                        perms: "charge:record:total:page", // 权限标识
                        menuName: "月度记录核对", // 菜单名称
                        orderNum: 2, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:record:total:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '2',
                                perms: 'charge:record:total:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '导出',
                                orderNum: '3',
                                perms: 'charge:record:total:export',
                            },
                            {
                                menuType: 'F',
                                menuName: '确认',
                                orderNum: '4',
                                perms: 'charge:record:total:affirm',
                            },

                        ]
                    },
                ],
            },
            // 充电报表管理
            {
                // 不变
                crumb: "noClick", // 面包屑
                icon: "baobiao", // 图标
                isFrame: "1", // 是否外链 1否
                status: "0", // 菜单状态 0正常 1停用

                // 不一定变
                alwaysShow: false, //是否隐藏目录
                visible: "0", // 显示状态 0显示 1隐藏
                menuType: "M", // 菜单类型  M目录 C菜单 F按钮

                // 一定变
                component: "Blank",
                name: "Blank",// 菜单name
                menuName: "充电报表管理", // 菜单名称
                orderNum: 3, //排序
                path: "report",// 路由地址
                children: [
                    // 月度充电数据汇总表
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "yuedukaohe", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "month",// 路由地址
                        component: "charge/report/month",
                        name: "charge_report_month",// 菜单name
                        perms: "charge:report:month:page", // 权限标识
                        menuName: "月度充电数据汇总表", // 菜单名称
                        orderNum: 1, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:report:month:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '2',
                                perms: 'charge:report:month:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '导出',
                                orderNum: '3',
                                perms: 'charge:report:month:export',
                            },
                        ]
                    },
                    // 季度充电数据汇总表
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "jidu", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "quarter",// 路由地址
                        component: "charge/report/quarter",
                        name: "charge_report_quarter",// 菜单name
                        perms: "charge:report:quarter:page", // 权限标识
                        menuName: "季度充电数据汇总表", // 菜单名称
                        orderNum: 2, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:report:quarter:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '2',
                                perms: 'charge:report:quarter:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '导出',
                                orderNum: '3',
                                perms: 'charge:report:quarter:export',
                            },
                        ]
                    },
                    // 半年度服务器审核报表
                    {
                        // 不变
                        crumb: "noClick", // 面包屑
                        icon: "bannianpao", // 图标
                        isFrame: "1", // 是否外链 1否
                        status: "0", // 菜单状态 0正常 1停用

                        // 不一定变
                        alwaysShow: false, //是否隐藏目录
                        visible: "0", // 显示状态 0显示 1隐藏
                        menuType: "C", // 菜单类型  M目录 C菜单 F按钮

                        // 一定变
                        path: "semiannual",// 路由地址
                        component: "charge/report/semiannual",
                        name: "charge_report_semiannual",// 菜单name
                        perms: "charge:report:semiannual:page", // 权限标识
                        menuName: "半年度服务器审核报表", // 菜单名称
                        orderNum: 3, //排序
                        children: [
                            {
                                menuType: 'F',
                                menuName: '查询',
                                orderNum: '1',
                                perms: 'charge:report:semiannual:search',
                            },
                            {
                                menuType: 'F',
                                menuName: '查看',
                                orderNum: '2',
                                perms: 'charge:report:semiannual:find',
                            },
                            {
                                menuType: 'F',
                                menuName: '导出',
                                orderNum: '3',
                                perms: 'charge:report:semiannual:export',
                            },
                        ]
                    },
                ],
            },

        ],
    },
]