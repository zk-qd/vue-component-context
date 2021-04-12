<template>
  <el-row :class="{ [$style.border]: border, [$style.wrapper]: true }">
    <template v-for="(item, index) in list">
      <el-col
        :span="3"
        :class="{ [$style.header]: true, [$style.background]: background }"
        :xs="4"
        :key="index"
        >{{ item.label }}:</el-col
      >
      <el-col :span="5" :class="$style.content" :xs="8" :key="item.prop">
        <span
          :style="{ color: item.color ? item.color : 'inherit' }"
          :title="item.value"
        >
          {{ item.value }}</span
        >
        <router-link
          v-if="item.route"
          :to="item.route.to"
          :class="[$style.link]"
          style="float: right;"
          >{{ item.route.name }}</router-link
        >
      </el-col>
    </template>
  </el-row>
</template>
<script>
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

     */
  name: "InfoList",
  data() {
    return {};
  },
  props: {
    background: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    item: {
      type: Object,
      default: () => {
        return {};
      }
    },
    match: {
      type: Array,
      require: true
    }
  },
  /* 

  match:[
    {
          prop: "a",
          label: "运营企业",
          route: { name: "详情",identifier: 'companyId', to: { path: "" } },
          format(value) {
            return value || "暂无";
          },
          color: "green"
        },]
  
   */
  computed: {
    list() {
      let data = [];
      this.match &&
        this.match.forEach((mItem, mIndex) => {
          let to = mItem.route&&mItem.route.to;
          let identifier = mItem.route&&mItem.route.identifier;
          data.push({
            // 项字段
            prop: mItem.prop,
            // 项标题
            label: mItem.label,
            // 值
            value: mItem.format
              ? mItem.format(this.item[mItem.prop], mIndex, mItem, this.item)
              : this.item[mItem.prop],
            // 跳转
            route: mItem.route&&{
              to: {
                ...to,
                path: to.path + (identifier ? "/" + this.item[identifier] : "")
              },
              name: mItem.route.name
            },
            color: mItem.color
          });
        });
      return data;
    }
  }
};
</script>
<style module lang="less">
.wrapper {
  font-size: 14px;
}
.link {
  font-size: 13px;
  color: @linkColor;
}
.text {
  padding: 10px 0;
  line-height: 19px;
}

.header {
  .text;
  text-align: right;
  padding-right: 10px;
  color: @headerColor;
}
.content {
  .text;
  padding-left: 10px;
  padding-right: 10px;
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
  }
}
</style>
