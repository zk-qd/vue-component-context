const execute = require("../generator");

const cssUcar = [
  {
    type: 0,
    path: "ucar",
    menuName: "网约车模块",
    icon: "wangyueche",
    children: [
      {
        type: 1,
        path: "license",
        menuName: "许可数据",
        icon: "pingtaiguanlixukezhengguanli",
        children: [
          {
            type: 2,
            path: "company",
            menuName: "平台许可信息",
            icon: "qiye",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },
              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "company/find",
            menuName: "平台许可信息查看",
            ph: "/:id",
          },
          {
            type: 2,
            path: "car",
            menuName: "车辆许可信息",
            icon: "cheliangxinxi",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },

          {
            type: 2,
            path: "car/find",
            menuName: "车辆许可信息查看",
            ph: "/:id",
          },

          {
            type: 2,
            path: "driver",
            menuName: "驾驶员许可信息",
            icon: "jiashiyuandanganguanli",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "driver/find",
            menuName: "驾驶员许可信息查看",
            ph: "/:id",
          },
        ],
      },
      {
        type: 1,
        path: "basic",
        menuName: "基础数据",
        icon: "jichushuju",
        children: [
          {
            type: 2,
            path: "company",
            menuName: "平台信息",
            icon: "qiye",
            main: true,
            unify: true, //生成unify文件
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },

          {
            type: 2,
            path: "company/find",
            menuName: "平台信息查看",
            ph: "/:id",
          },

          {
            type: 2,
            path: "car",
            menuName: "车辆信息",
            icon: "cheliangxinxi",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },

          {
            type: 2,
            path: "car/find",
            menuName: "车辆信息查看",
            ph: "/:id",
          },

          {
            type: 2,
            path: "driver",
            menuName: "驾驶员信息",
            icon: "jiashiyuandanganguanli",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },

          {
            type: 2,
            path: "driver/find",
            menuName: "驾驶员信息查看",
            ph: "/:id",
          },
        ],
      },
      {
        type: 1,
        path: "order",
        menuName: "订单数据",
        icon: "dingdanshuju",
        children: [
          {
            type: 2,
            path: "initiate",
            menuName: "订单发起信息",
            icon: "ziyuan117",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "initiate/find",
            menuName: "订单发起信息查看",
            ph: "/:id",
          },
          {
            type: 2,
            path: "success",
            menuName: "订单成功信息",
            icon: "order-success2",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "success/find",
            menuName: "订单成功信息查看",
            ph: "/:id",
          },
          {
            type: 2,
            path: "cancel",
            menuName: "订单撤销信息",
            icon: "order2-cut",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "cancel/find",
            menuName: "订单撤销信息查看",
            ph: "/:id",
          },
        ],
      },
      {
        type: 1,
        path: "manage",
        menuName: "经营数据",
        icon: "RectangleCopy",
        children: [
          {
            type: 2,
            path: "online",
            menuName: "车辆上线信息",
            icon: "zaixiancheliang",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },
            ],
          },
          {
            type: 2,
            path: "offline",
            menuName: "订单下线信息",
            icon: "cheliangzhuanru",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

             
            ],
          },
          
          {
            type: 2,
            path: "start",
            menuName: "经营出发信息",
            icon: "chufatangciicon1024px",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "start/find",
            menuName: "经营出发信息查看",
            ph: "/:id",
          },
          {
            type: 2,
            path: "arrive",
            menuName: "经营到达信息",
            icon: "daoda-",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "arrive/find",
            menuName: "经营出发信息查看",
            ph: "/:id",
          },
          {
            type: 2,
            path: "pay",
            menuName: "经营支付信息",
            icon: "zhifu",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              },

              {
                type: 3,
                menuName: "查看",
                path: "find",
              },
            ],
          },
          {
            type: 2,
            path: "pay/find",
            menuName: "经营支付信息查看",
            ph: "/:id",
          },
        ],
      },
      {
        type: 1,
        path: "position",
        menuName: "定位信息",
        icon: "dingwei",
        children: [
            {
                type: 2,
                path: "mass",
                menuName: "定位信息",
                icon: "dingwei",
                main: true,
                unify: true,
                children: [
                  {
                    type: 3,
                    menuName: "搜索",
                    path: "search",
                  },
                ],
              },] 
      }
    ],
  },
];

execute(cssUcar);
