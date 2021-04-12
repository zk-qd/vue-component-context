const execute = require('../generator');

const service = [
    {
        type: 2,
        path: 'service/index',
        menuName: '首页',
        icon: 'shouye',
        main: true,
    },
    {
        type: 0,
        path: 'service/basic',
        menuName: '基础信息管理',
        icon: 'jichuxinxi',
        children: [
            {
                type: 2,
                path: 'company',
                menuName: '运营公司管理',
                icon: 'gongsi',
                main: true,
                children: [
                    {
                        type: 3,
                        menuName: '查询',
                        path: 'search',
                    },

                    {
                        type: 3,
                        menuName: '查看',
                        path: 'find',
                    },
                ]
            },
            {
                type: 2,
                path: 'company/find',
                menuName: '运营公司管理查看',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'area',
                menuName: '服务区信息',
                icon: 'fuwuqu',
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
                path: 'area/insert',
                menuName: '服务区信息新增',
            },
            {
                type: 2,
                path: 'area/find',
                menuName: '服务区信息查看',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'area/update',
                menuName: '服务区信息修改',
                ph: '/:id'
            },
        ]
    },
    {
        type: 0,
        path: 'service/report',
        menuName: '监管信息报送',
        icon: 'zaixianjianguan1',
        children: [
            {
                type: 2,
                path: 'dynamic',
                menuName: '动态信息报送',
                icon: 'dongtaixinxizhuaqu',
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
                        menuName: '查看',
                        path: 'find',
                    },
                ]
            },
            {
                type: 2,
                path: 'dynamic/find',
                menuName: '数据监测详情',
                ph: '/:id',
            }
        ]
    },
    {
        type: 0,
        path: 'service/video',
        menuName: '重点视频监控',
        icon: 'shipinjiankongxitong',
        children: [
            {
                type: 2,
                path: 'realtime',
                menuName: '实时视频',
                icon: 'shipin',
                main: true,
            },
            {
                type: 2,
                path: 'playback',
                menuName: '录像视频',
                icon: 'shipin',
                main: true,
            }
        ]
    },
    {
        type: 0,
        path: 'service/passenger',
        menuName: '实时客流监测',
        icon: 'qunfengjindiankeliuleixingfenxi',
        children: [
            {
                type: 2,
                path: 'video',
                menuName: '实时客流监测',
                icon: 'qunfengjindiankeliuleixingfenxi',
                main: true,
            },
            {
                type: 2,
                path: 'manage',
                menuName: '客流监测管理',
                icon: 'kltj',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        path: 'search',
                        menuName: '查询',
                    },
                    {
                        type: 3,
                        path: 'find',
                        menuName: '查看',
                    },
                ]
            },
            {
                type: 2,
                path: 'manage/find',
                menuName: '客流监测管理详情',
                ph: '/:id',
            }
        ]

    },
    {
        type: 0,
        path: 'service/traffic',
        menuName: '动态车流监测',
        icon: 'cheliuliang',
        children: [
            {
                type: 2,
                path: 'enter',
                menuName: '车辆入口管理',
                icon: 'rukou',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        path: 'search',
                        menuName: '查询',
                    },
                    {
                        type: 3,
                        path: 'find',
                        menuName: '查看',
                    },
                ]
            },
            {
                type: 2,
                path: 'enter/find',
                menuName: '车辆入口管理详情',
                ph: '/:id',
            },
            {
                type: 2,
                path: 'exit',
                menuName: '车辆出口管理',
                icon: 'chukou',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        path: 'search',
                        menuName: '查询',
                    },
                    {
                        type: 3,
                        path: 'find',
                        menuName: '查看',
                    },
                ]
            },
            {
                type: 2,
                path: 'exit/find',
                menuName: '车辆出口管理详情',
                ph: '/:id',
            },
            {
                type: 2,
                path: 'record',
                menuName: '车辆记录管理',
                icon: 'jilu',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        path: 'search',
                        menuName: '查询',
                    },
                    {
                        type: 3,
                        path: 'find',
                        menuName: '查看',
                    },
                ]
            },
            {
                type: 2,
                path: 'record/find',
                menuName: '车辆记录管理详情',
                ph: '/:id',
            },
        ]
    },
    {
        type: 0,
        path: 'service/stall',
        menuName: '车位状态监测',
        icon: 'chewei',
        children: [
            {
                type: 2,
                path: 'manage',
                menuName: '车位监测管理',
                icon: 'chewei',
                main: true,
            }
        ]
    },
    {
        type: 0,
        path: 'service/restroom',
        menuName: '智慧厕所服务',
        icon: 'cesuo1',
        children: [
            {
                type: 2,
                path: 'plate',
                menuName: '厕所数据看板',
                icon: 'lvhangcesuotongji',
                main: true,
            },
            {
                type: 2,
                path: 'visitor',
                menuName: '人流数据监测',
                icon: 'cesuo',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        path: 'search',
                        menuName: '查询',
                    },
                    {
                        type: 3,
                        path: 'find',
                        menuName: '查看',
                    },
                ]
            },
            {
                type: 2,
                path: 'visitor/find',
                menuName: '人流数据监测查看',
                ph: '/:id',
            },
            {
                type: 2,
                path: 'pit',
                menuName: '坑位数据分析',
                icon: 'cesuo',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        path: 'search',
                        menuName: '查询',
                    },
                    {
                        type: 3,
                        path: 'find',
                        menuName: '查看',
                    },
                ]
            },
            {
                type: 2,
                path: 'pit/find',
                menuName: '坑位数据分析详情',
                ph: '/:id',
            },
        ]
    },
    {
        type: 0,
        path: 'service/energy',
        menuName: '能源服务管理',
        icon: 'nengyuanfuwu',
        children: [
            {
                type: 1,
                path: 'charge',
                menuName: '充电服务管理',
                icon: 'chongdianfuwu',
                children: [
                    {
                        type: 2,
                        path: 'monitor',
                        menuName: '充电桩实时监测',
                        icon: 'chongdianzhuang',
                        main: true,
                    },
                    {
                        type: 2,
                        path: 'record',
                        menuName: '充电记录管理',
                        icon: 'chongdianjilu',
                        main: true,
                        unify: true,
                        children: [
                            {
                                type: 3,
                                path: 'search',
                                menuName: '查询',
                            },
                            {
                                type: 3,
                                path: 'find',
                                menuName: '查看',
                            },
                        ]
                    },
                    {
                        type: 2,
                        path: 'record/find',
                        menuName: '充电记录管理详情',
                        ph: '/:id',
                    },
                ]
            },
        ]
    },
    {
        type: 0,
        path: 'service/wifi',
        menuName: '无线网络应用',
        icon: 'wuxianwangluo',
        children: [
            {
                type: 2,
                path: 'config',
                menuName: '网络配置管理',
                icon: 'wangluopeizhi',
                main: true
            },
            {
                type: 2,
                path: 'record',
                menuName: '连接记录监测',
                icon: 'jilu',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        path: 'search',
                        menuName: '查询',
                    },
                ]
            }
        ]

    },
    {
        type: 0,
        path: 'service/induce',
        menuName: '诱导信息发布',
        icon: 'youdaoping',
        children: [
            {
                type: 2,
                path: 'screen',
                menuName: '信息同屏管理',
                icon: '',
                main: true,
            }
        ]
    },
    {
        type: 0,
        path: 'service/theme',
        menuName: '主题统计分析',
        icon: 'zhutitongji',
        children: [
            {
                type: 2,
                path: 'passenger',
                menuName: '客流统计分析',
                icon: 'kltj',
                main: true,
            },
            {
                type: 2,
                path: 'traffic',
                menuName: '车流统计分析',
                icon: 'cheliutongji',
                main: true,
            },
            {
                type: 2,
                path: 'stall',
                menuName: '车位统计分析',
                icon: 'chewei',
                main: true,
            },
            {
                type: 2,
                path: 'pit',
                menuName: '厕所统计分析',
                icon: 'lvhangcesuotongji',
                main: true,
            },
            {
                type: 2,
                path: 'wireless',
                menuName: '无线统计分析',
                icon: 'wuxianwangluo',
                main: true,
            },
            {
                type: 2,
                path: 'energy',
                menuName: '能源统计分析',
                icon: 'nengyuanfuwu',
                main: true,
            },
        ]
    },
    {
        type: 0,
        path: 'service/business',
        menuName: '业务数据报表',
        icon: 'yewubaobiao',
        children: [
            {
                type: 2,
                path: 'passenger',
                menuName: '客流统计分析',
                icon: 'kltj',
                main: true,
            },
            {
                type: 2,
                path: 'traffic',
                menuName: '车流统计分析',
                icon: 'cheliutongji',
                main: true,
            },
            {
                type: 2,
                path: 'stall',
                menuName: '车位统计分析',
                icon: 'chewei',
                main: true,
            },
            {
                type: 2,
                path: 'pit',
                menuName: '厕所统计分析',
                icon: 'lvhangcesuotongji',
                main: true,
            },
            {
                type: 2,
                path: 'wireless',
                menuName: '无线统计分析',
                icon: 'wuxianwangluo',
                main: true,
            },
            {
                type: 2,
                path: 'energy',
                menuName: '能源统计分析',
                icon: 'nengyuanfuwu',
                main: true,
            },
        ]
    },
]

execute(service);