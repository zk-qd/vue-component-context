<template>
  <div>
    <info-list :match="match" :item="item"></info-list>
  </div>
</template>
<script>
import InfoList from "./index";
export default {
  name: "TestInfoList",
  components: { InfoList },
  data() {
    return {
      item: {
        a: "湖南"
      },
      match: [
        {
          prop: "a",
          label: "运营企业",
          route: { name: "详情", to: { path: "" } },
          format(value) {
            return value || "暂无";
          },
          color: "green"
        },
        {
          prop: "b",
          label: "所属线路",
          route: { name: "详情", to: { path: "" } },
          format(value) {
            return value || "暂无";
          }
        },
        {
          prop: "c",
          label: "姓名",
          route: { name: "详情", to: { path: "" } },
          format(value) {
            return value || "暂无";
          }
        },
        {
          prop: "d",
          label: "性别",
          route: { name: "详情", to: { path: "" } },
          format(value) {
            return value || "暂无";
          }
        },
        {
          prop: "e",
          label: "年龄",
          route: { name: "详情", to: { path: "" } },
          format(value) {
            return value || "暂无";
          }
        },
      ]
    };
  }
};
</script>
<style lang="less" scoped></style>
