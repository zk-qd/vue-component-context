const execute = require('./generator');

const testConfig = [
    {
        type: 0,
        path: 'industry',
        menuName: '行业基础信息管理',
        icon: 'yunyingshang',
        children: [
            {
                type: 1,
                path: 'basic',
                menuName: '基础数据管理',
                icon: 'yunyingshang',
                children: [
                    {
                        type: 2,
                        path: 'rent/company',
                        menuName: '巡游出租企业管理',
                        icon: 'yunyingshang',
                        main: true,
                        unify: true,
                    },
                    {
                        type: 2,
                        path: 'rent/car',
                        menuName: '巡游出租车辆管理',
                        icon: 'yunyingshang',
                        main: true,
                        unify: true,
                    },
                    {
                        type: 2,
                        path: 'rent/driver',
                        menuName: '巡游出租驾驶员管理',
                        icon: 'yunyingshang',
                        main: true,
                        unify: true,
                    },
                    {
                        type: 2,
                        path: 'ucar/driver',
                        menuName: '巡游出租驾驶员管理',
                        icon: 'yunyingshang',
                        main: true,
                        unify: true,
                    },
                ]
            }
        ]
    },
]


execute(testConfig);