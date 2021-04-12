const execute = require("../generator");

const cssBicycle = [
  {
    type: 0,
    path: "bicycle",
    menuName: "共享单车模块",
    icon: "wangyueche",
    children: [
      {
        type: 1,
        path: "basic",
        menuName: "基础数据",
        icon: "pingtaiguanlixukezhengguanli",
        children: [
          {
            type: 2,
            path: "company",
            menuName: "企业信息",
            icon: "qiye",
            main: true,
            unify: true,
            children: [
              {
                type: 3,
                menuName: "搜索",
                path: "search",
              }
            ],
          },
          {
            type: 2,
            path: "car",
            menuName: "车辆信息（电单车）",
            icon: "diandancheguanli",
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
            path: "user",
            menuName: "用户信息",
            icon: "yonghu",
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
            path: "area",
            menuName: "停车区域信息",
            icon: "tingchequyu",
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
            path: "operate",
            menuName: "运营人员信息",
            icon: "yunyingrenyuan",
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
            path: "manage",
            menuName: "管理人员信息",
            icon: "guanlirenyuan",
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
            path: "price",
            menuName: "运价表信息",
            icon: "yunjiaguanli",
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
            path: "breakdown",
            menuName: "车辆故障信息",
            icon: "cheliangguzhang",
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
            path: "order",
            menuName: "订单信息",
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
            path: "order/find",
            menuName: "订单信息查看",
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

execute(cssBicycle);
