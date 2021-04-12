<template>
  <div
    v-show="empty"
    style="text-align: center;font-size: 14px;line-height: 80px;color: #ADADAD"
  >
    <svg-icon
      icon-class="zanwushuju"
      style="width: 20px;height: 20px;"
      class="mgr10"
    />
    <span>暂无数据</span>
  </div>
</template>
<script>
import vRoot from "@/utils/root";
export default {
  data() {
    return {
      // 为true则显示 no-data
      empty: true,
      eventName: ""
    };
  },
  created() {
    // 因为多对1的关系 多个订阅者，通过uid 处理成不同事件
    this.eventName = "no-data:empty:" + this.$parent._uid;
  },
  activated() {
    vRoot.$off(this.eventName).$on(this.eventName, ({ empty }) => {
      this.empty = empty;
    });
  },
  deactivated() {
    vRoot.$off(this.eventName);
  }
};
</script>
