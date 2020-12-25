const execute = require('../generator');

const cssExchange = [
    {
        type: 2,
        path: 'exchange/manage/index',
        menuName: '首页',
        icon: 'jichuxinxi',
        main: true,
    },
    {
        type: 0,
        path: 'exchange/manage/source',
        menuName: '数据资源管理',
        icon: 'wulumuqishigongandashujuguanlipingtai-ico-',
        children: [
            {
                type: 2,
                path: 'list',
                menuName: '数据目录管理',
                icon: 'shujumulu',
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
                        menuName: '导入',
                        path: 'import'
                    },
                ]
            },
            {
                type: 2,
                path: 'list/insert',
                menuName: '数据目录新增',
            },
            {
                type: 2,
                path: 'list/find',
                menuName: '数据目录查看',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'list/update',
                menuName: '数据目录修改',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'service',
                menuName: '数据服务管理',
                icon: 'shujufuwu',
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
                        menuName: '导入',
                        path: 'import'
                    },
                ]
            },
            {
                type: 2,
                path: 'service/insert',
                menuName: '数据服务新增',
            },
            {
                type: 2,
                path: 'service/find',
                menuName: '数据服务查看',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'service/update',
                menuName: '数据服务修改',
                ph: '/:id'
            },
        ],
    },
    {
        type: 0,
        path: 'exchange/manage/audit',
        menuName: '数据申请管理',
        icon: 'shenqing1',
        children: [
            {
                type: 2,
                path: 'apply',
                menuName: '数据资源申请',
                icon: 'shenqing1',
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
                    {
                        type: 3,
                        menuName: '通过',
                        path: 'affirm',
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
                path: 'apply/find',
                menuName: '数据资源申请查看',
                ph: '/:id'
            },
        ],
    },
    {
        type: 0,
        path: 'exchange/manage/monitor',
        menuName: '数据监测管理',
        icon: 'jiance',
        children: [
            {
                type: 2,
                path: 'receive',
                menuName: '接收数据监测',
                icon: 'baojiajieshou',
                main: true,
                unify: true,
            },
            {
                type: 2,
                path: 'share',
                menuName: '共享数据监测',
                icon: 'wj-gxwj',
                main: true,
                unify: true,
            },
            {
                type: 2,
                path: 'warn',
                menuName: '短信预警管理',
                icon: 'yujing',
                main: true,
                unify: true,
            },
        ],
    },
    {
        type: 0,
        path: 'exchange/manage/stat',
        menuName: '数据统计管理',
        icon: 'shujutongji',
        children: [
            {
                type: 2,
                path: 'list',
                menuName: '数据目录统计',
                icon: 'shujumulu',
                main: true,
                unify: true,
            },
            {
                type: 2,
                path: 'service',
                menuName: '数据服务统计',
                icon: 'dashujufuwupingtai',
                main: true,
                unify: true,
            },
            {
                type: 2,
                path: 'apply',
                menuName: '数据申请统计',
                icon: 'shenqing2',
                main: true,
                unify: true,
            },
            {
                type: 2,
                path: 'receive',
                menuName: '数据接收统计',
                icon: 'jieshouguanli-xiugai',
                main: true,
                unify: true,
            },
            {
                type: 2,
                path: 'share',
                menuName: '数据共享统计',
                icon: 'tubiaozhizuomoban',
                main: true,
                unify: true,
            },
            {
                type: 2,
                path: 'warn',
                menuName: '数据短信预警',
                icon: 'houtaiguanli-shujuyujing',
                main: true,
                unify: true,
            },
        ],
    },
    {
        type: 2,
        path: 'exchange/client/index',
        menuName: '首页',
        icon: 'jichuxinxi',
        main: true,
    },
    {
        type: 0,
        path: 'exchange/client/source',
        menuName: '数据管理',
        icon: 'shujuguanli',
        children: [
            {
                type: 2,
                path: 'apply',
                menuName: 'API申请',
                icon: 'GX-apishenqing',
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
                        path: 'insert',
                        menuName: '发起申请',
                    },
                    {
                        type: 3,
                        path: 'find',
                        menuName: '查看',
                    },
                    {
                        type: 3,
                        path: 'update',
                        menuName: '再次申请',
                    },
                ]
            },
            {
                type: 2,
                path: 'apply/insert',
                menuName: '发起申请',
            },
            {
                type: 2,
                path: 'apply/find',
                menuName: '查看申请',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'apply/update',
                menuName: '再次申请',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'api',
                menuName: '我的API',
                icon: 'wodeAPI',
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
                path: 'api/find',
                menuName: '查看api',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'key',
                menuName: '我的KEY',
                icon: 'key',
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
                ]
            },
            {
                type: 2,
                path: 'key/insert',
                menuName: '新增key',
            },
            {
                type: 2,
                path: 'key/update',
                menuName: '修改key',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'key/find',
                menuName: '查看配额',
                ph: '/:id'
            },
        ],
    },


]

execute(cssExchange);