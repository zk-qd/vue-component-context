const execute = require('../generator');

const cssOptimize = [
    {
        type: 0,
        path: 'optimize/basic',
        menuName: '行业基础信息',
        icon: 'wulumuqishigongandashujuguanlipingtai-ico-',
        children: [
            {
                type: 2,
                path: 'company',
                menuName: '企业信息查询',
                icon: 'shujumulu',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        menuName: '搜索',
                        path: 'search',
                    },
                ]
            },
            {
                type: 2,
                path: 'company/find',
                menuName: '公交企业详情',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'line',
                menuName: '公交线路查询',
                icon: 'shujufuwu',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        menuName: '搜索',
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
                path: 'line/find',
                menuName: '公交线路详情',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'station',
                menuName: '公交站点查询',
                icon: 'shujufuwu',
                main: true,
                unify: true,
                children: [
                    {
                        type: 3,
                        menuName: '搜索',
                        path: 'search',
                    },
                    {
                        type: 3,
                        menuName: '查看',
                        path: 'find',
                    },
                    {
                        type: 3,
                        menuName: '站点地图',
                        path: 'map',
                    },
                ]
            },
            {
                type: 2,
                path: 'line/find',
                menuName: '公交线路详情',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'line/map',
                menuName: '站点地图',
            },
            
        ],
    },
    {
        type: 0,
        path: 'optimize/process',
        menuName: '线网优化审核',
        icon: 'shenqing1',
        children: [
            {
                type: 2,
                path: 'compare',
                menuName: '线路优化比对',
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
                        menuName: '新增线路比对',
                        path: 'insert',
                    },
                    {
                        type: 3,
                        menuName: '归档',
                        path: 'interfile'
                    },
                    {
                        type: 3,
                        menuName: '编辑',
                        path: 'update'
                    },
                    {
                        type: 3,
                        menuName: '删除',
                        path: 'delete'
                    },
                ]
            },
            {
                type: 2,
                path: 'compare/find',
                menuName: '查看',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'compare/insert',
                menuName: '新增',
            },
            {
                type: 2,
                path: 'compare/update',
                menuName: '修改',
            },
            {
                type: 2,
                path: 'check',
                menuName: '线路优化审核',
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
                path: 'compare/find',
                menuName: '查看',
                ph: '/:id'
            },
            {
                type: 2,
                path: 'compare/insert',
                menuName: '新增',
            },
            {
                type: 2,
                path: 'compare/update',
                menuName: '修改',
            },
            {
                type: 2,
                path: 'confirm',
                menuName: '审核确认信息',
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
                ]
            },
            {
                type: 2,
                path: 'confirm/find',
                menuName: '查看',
                ph: '/:id'
            },
        ],
    },


]

execute(cssOptimize);