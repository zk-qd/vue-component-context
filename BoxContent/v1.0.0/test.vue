<template>
  <div class="table-container">
    <box-content :title="'企业信息'">
      <info-list :match="match" :item="item"></info-list>
    </box-content>
    <box-content :title="'企业信息'">
      <info-list :match="match" :item="item"></info-list>
    </box-content>
    <box-content :title="'企业信息'">
      <info-list :match="match" :item="item"></info-list>
    </box-content>
    <box-content :title="'企业信息'">
      <info-list :match="match" :item="item"></info-list>
    </box-content>
  </div>
</template>
<script>
import BoxContent from "./index.vue";
import InfoList from "../InfoList";
export default {
  name: "TestBoxContent",
  components: {BoxContent,InfoList},
  data() {
    return {
      item: {
        a: "湖南"
      },
      match: [
        {
          field: "a",
          label: "运营企业",
          route: { name: "详情", route: { path: "" } },
          value: "龙骧",
          format(value) {
            return value || "暂无";
          },
          color: "green"
        },
        {
          field: "b",
          label: "所属线路",
          route: { name: "详情", route: { path: "" } },
          value: "龙骧",
          format(value) {
            return value || "暂无";
          }
        },
        {
          field: "c",
          label: "姓名",
          route: { name: "详情", route: { path: "" } },
          value: "龙骧",
          format(value) {
            return value || "暂无";
          }
        },
        {
          field: "d",
          label: "性别",
          route: { name: "详情", route: { path: "" } },
          value: "龙骧",
          format(value) {
            return value || "暂无";
          }
        },
        {
          field: "e",
          label: "年龄",
          route: { name: "详情", route: { path: "" } },
          value: "龙骧",
          format(value) {
            return value || "暂无";
          }
        },
        {
          field: "f",
          label: "年龄",
          route: { name: "详情", route: { path: "" } },
          value: "龙骧",
          format(value) {
            return value || "暂无";
          }
        },
        {
          field: "g",
          label: "年龄",
          route: { name: "详情", route: { path: "" } },
          value: "龙骧",
          format(value) {
            return value || "暂无";
          }
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped></style>
