<template>
  <div class="wrapper" :class="shadow">
    <div class="head">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    shadow: {
      /* hover鼠标悬停阴影 always总是有阴影 never从未有 */
      type: String,
      default: "always"
    }
  },
  methods: {},
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
/* 容器 */
.wrapper {
  border: 1px solid #ebeef5;
  border-radius: 2px;
  font-size: 14px;
  overflow: hidden;
  padding: 15px;
  background-color: white;
}
.never {
  box-shadow: none;
}
.hover:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.always {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
/* 垂直居中 */
.align() {
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
}
/* 头部 */
.head {
  position: relative;
  color: @titleColor;
  margin-bottom: 15px;
  font-weight: 600;
}
/* 内容 */
.body {
  text-align: center;
}
</style>
