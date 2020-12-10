const execute = require('../generator');

const yzConfig = [
    {
        type: 0,
        path: 'industry',
        menuName: '行业基础信息管理',
        icon: 'jichuxinxi',
        children: [
            {
                type: 1,
                path: 'declare',
                menuName: '许可申报管理',
                icon: 'xiangmushenbao',
                children: [
                    {
                        type: 2,
                        path: 'rent/car',
                        menuName: '巡游车辆申报',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'rent/car/insert',
                        menuName: '巡游车辆申报新增',
                    },
                    {
                        type: 2,
                        path: 'rent/car/find',
                        menuName: '巡游车辆申报查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/car/update',
                        menuName: '巡游车辆申报修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/driver',
                        menuName: '巡游驾驶员申报',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'rent/driver/insert',
                        menuName: '巡游驾驶员申报新增',
                    },
                    {
                        type: 2,
                        path: 'rent/driver/find',
                        menuName: '巡游驾驶员申报查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/driver/update',
                        menuName: '巡游驾驶员申报修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/car',
                        menuName: '网约车辆申报',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'ucar/car/insert',
                        menuName: '网约车辆申报新增',
                    },
                    {
                        type: 2,
                        path: 'ucar/car/find',
                        menuName: '网约车辆申报查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/car/update',
                        menuName: '网约车辆申报修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/driver',
                        menuName: '网约驾驶员申报',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'ucar/driver/insert',
                        menuName: '网约驾驶员申报新增',
                    },
                    {
                        type: 2,
                        path: 'ucar/driver/find',
                        menuName: '网约驾驶员申报查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/driver/update',
                        menuName: '网约驾驶员申报修改',
                        ph: '/:id'
                    },
                ]
            },
            {
                type: 1,
                path: 'basic',
                menuName: '基础数据管理',
                icon: 'jichushujuguanli',
                children: [
                    {
                        type: 2,
                        path: 'rent/company',
                        menuName: '巡游企业管理',
                        icon: 'qiyeguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'rent/company/insert',
                        menuName: '巡游企业管理新增',
                    },
                    {
                        type: 2,
                        path: 'rent/company/find',
                        menuName: '巡游企业管理查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/company/update',
                        menuName: '巡游企业管理修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/car',
                        menuName: '巡游车辆管理',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'rent/car/insert',
                        menuName: '巡游车辆管理新增',
                    },
                    {
                        type: 2,
                        path: 'rent/car/find',
                        menuName: '巡游车辆管理查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/car/update',
                        menuName: '巡游车辆管理修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/driver',
                        menuName: '巡游驾驶员管理',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'rent/driver/insert',
                        menuName: '巡游驾驶员管理新增',
                    },
                    {
                        type: 2,
                        path: 'rent/driver/find',
                        menuName: '巡游驾驶员管理查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'rent/driver/update',
                        menuName: '巡游驾驶员管理修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/company',
                        menuName: '网约平台管理',
                        icon: 'qiyeguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'ucar/company/insert',
                        menuName: '网约平台管理新增',
                    },
                    {
                        type: 2,
                        path: 'ucar/company/find',
                        menuName: '网约平台管理查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/company/update',
                        menuName: '网约平台管理修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/car',
                        menuName: '网约车辆管理',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'ucar/car/insert',
                        menuName: '网约车辆管理新增',
                    },
                    {
                        type: 2,
                        path: 'ucar/car/find',
                        menuName: '网约车辆管理查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/car/update',
                        menuName: '网约车辆管理修改',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/driver',
                        menuName: '网约驾驶员管理',
                        icon: 'cheliangguanli',
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
                            {
                                type: 3,
                                menuName: '确认',
                                path: 'affirm'
                            },
                            {
                                type: 3,
                                menuName: '驳回',
                                path: 'reject'
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'ucar/driver/insert',
                        menuName: '网约驾驶员管理新增',
                    },
                    {
                        type: 2,
                        path: 'ucar/driver/find',
                        menuName: '网约驾驶员管理查看',
                        ph: '/:id'
                    },
                    {
                        type: 2,
                        path: 'ucar/driver/update',
                        menuName: '网约驾驶员管理修改',
                        ph: '/:id'
                    },
                ]
            },

        ]
    },
]

execute(yzConfig);