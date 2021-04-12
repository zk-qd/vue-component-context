<template>
  <el-row :class="{ [$style.border]: border, [$style.wrapper]: true }">
    <template v-for="(item, index) in list">
      <el-col
        :span="item.span || span"
        :xs="24"
        :sm="24"
        :md="item.span || span"
        :lg="item.span || span"
        :lx="item.span || span"
        :key="index"
      >
        <span
          :class="{ [$style.header]: true, [$style.background]: background }"
          >{{ item.label }}:</span
        ><span :class="$style.content">
          <template v-if="item.ownclick">
            <em
              :style="{ color: item.color ? item.color : 'inherit' }"
              :title="item.value"
              v-hasPermi="item.hasPermi"
            >
              <router-link
                v-for="(valueItem, index) in item.value"
                :key="index"
                :to="item.route[index].to"
                :class="[$style.link]"
                >{{ index == 0 ? valueItem : "," + valueItem }}</router-link
              >
            </em>
          </template>
          <template v-else>
            <em
              :style="{ color: item.color ? item.color : 'inherit' }"
              :title="item.value"
            >
              <template v-if="item.slot">
                <slot :name="item.slot" v-bind="item"></slot>
              </template>
              <template v-else>
                {{ item.value }}
              </template>
              <!-- <template v-else-if="item.contentType == 'file'">
                <file-overview v-if="item.value" :value="item.value" />
              </template> -->
            </em>
            <router-link
              v-if="item.route"
              :to="item.route.to"
              v-hasPermi="item.hasPermi"
              :class="[$style.link]"
              style="float: right;"
              >{{ item.route.name }}</router-link
            >
          </template>
        </span>
      </el-col>
    </template>
  </el-row>
</template>
<script>
/*
bug: 如果字典后加载出来那么数据转换失败

注意事项：
1. 对于该组件而言大部分情况下都是放在box-content中，因此我将format中的this固定位this.$parent.$parent，
而level默认为2，如果有放入其他层级下，可修改level
*/
export default {
  /*
    详情列表

    - props
    1. 是否显示border
    2. 是否显示表头背景


    - 数据项
    3. 内容颜色
    4. 可跳转
    5. 内容格式化


    - 扩展
    1. 详情项如何展示控件，想了两种方式，
    a.新加contenType属性判断内容类型，如果是file类型，那么就是用file控件，插件还需要引入file插件使用，优点：使用起来方便，缺点：耦合高扩展差
    b.使用slot属性来决定使用何种插槽， 优点: 扩展良好，缺点: 插件引入交给了使用方，


     */
  name: "InfoList",
  data() {
    return {
      list: [],
      contentTypes: ["default", "file"],
    };
  },
  props: {
    background: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    match: {
      type: Array,
      require: true,
    },
    level: {
      type: Number,
      default: 2,
    },
    /* span: {
      type: Number,
      default: 3,
      validator(val) {
        // 也就是说  布局必须是  24 12 8 6
        // 分成1等分 2等分等等
        return [1, 2, 3, 4].includes(val);
      }
    }, */
    span: {
      type: Number,
      default: 8,
      validator(val) {
        // 占位
        return [1, 2, 3, 4, 6, 8, 12, 24].includes(val);
      },
    },
    vue: {
      type: Object,
    },
  },
  /*

  match:[
    {
          prop: "a",//字段
          label: "运营企业",//标签
          route: { name: "详情",identifier: 'companyId', to: { path: "" } },//路由
          format(value) {
            return value || "暂无";
          },//格式化
          color: "green",//内容颜色
          span: 1,//单独项占据的等分 （因为头部和内容的宽度取的是百分比，如果总宽度和其他不一致，那么头部部分宽度也会对不齐,已解决： 通过max和min width）
          ownclick: false, // 点击详情跳转 还是 点击自身跳转  如果该属性为true 那么value和identifier对应的字段在接口处必须转成数组
          hasPermi: '', 权限值
          slot: '',// 默认为空 常用值 file,
        },
        
        ]

   */
  watch: {
    item: {
      deep: true,
      // 表示第一次的值也会侦听到
      immediate: true,
      handler(newItem) {
        // 安全处理
        if (!Object.keys(newItem).length) return;
        let data = [],
          thisArg = this,
          level = this.level;
        while (level > 0) {
          level--;
          thisArg = thisArg.$parent;
        }
        this.match &&
          this.match.forEach((mItem, mIndex) => {
            
            data.push({
              // 项字段
              prop: mItem.prop,
              // 项标题
              label: mItem.label,
              // 值
              value: mItem.format
                ? mItem.format.call(
                    this.vue || thisArg,
                    newItem[mItem.prop], // 值
                    mIndex, // match 排序
                    mItem, // match 项
                    newItem // 总数据
                  )
                : newItem[mItem.prop],
              // 跳转
              route: adapterRoute(mItem, newItem),
              color: mItem.color,
              ownclick: mItem.ownclick === true ? true : false, // 点击详情跳转 还是 点击自身跳转
              hasPermi: mItem.hasPermi || ["*:*:*"],
              span: mItem.span,
              slot: mItem.slot,
              /* contentType:
                this.contentType.find(item === mItem.contentType) === -1
                  ? this.contentTypes[0]
                  : mItem.contentType, */
            });
          });
        this.list = data;

        function adapterRoute(mItem, newItem) {
          let to = mItem.route && mItem.route.to;
          if (!to) return; // 安全处理不存在路由
          let identifier = mItem.route.identifier,
            route = {
              to: {
                ...to,
                path: to.path + (identifier ? "/" + newItem[identifier] : ""),
              },
              name: mItem.route.name || "",
            };
          if (mItem.ownclick && newItem[mItem.prop]) {
            let rs = newItem[mItem.prop].map((item, index) => {
              let r = JSON.parse(JSON.stringify(route));
              r.to.path =
                to.path + (identifier ? "/" + newItem[identifier][index] : "");
              return r;
            });
            route = rs;
          }
          return route;
        }
      },
    },
  },
};
</script>
<style module lang="less">
.wrapper {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: wrap row;
}
.link {
  font-size: 13px;
  color: @linkColor;
}
.text {
  padding: 10px 0;
  line-height: 19px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}

.header {
  .text;
  text-align: right;
  color: @headerColor;
  // width: 35%;
  max-width: 150px;
  width: 40%;
}
.content {
  .text;
  // width: 65%;
  width: 60%;
  min-width: calc(100% - 150px);
}
.background {
  background-color: @headerBgc;
}
.border {
  border-left: @listBorder;
  border-top: @listBorder;
  > div {
    border-right: @listBorder;
    border-bottom: @listBorder;
    display: flex;
  }
}
</style>
