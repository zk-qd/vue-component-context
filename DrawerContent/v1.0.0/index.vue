<template>
  <div
    :class="{
      [$style.container]: true,
      [$style.unfold]: visible,
      [$style.fold]: !visible,
      [$style.left]: justify === 'left',
      [$style.right]: justify == 'right',
      [$style.overflow]: true,
    }"
    :style="{ top: top }"
  >
    <!--  -->
    <div :class="$style.handler" @click.stop.prevent="handleChange">
      <!-- 展开时 -->
      <svg-icon :icon-class="$gIcons.drawer.right" v-show="visible" />
      <!-- 折叠时 -->
      <svg-icon :icon-class="$gIcons.drawer.left" v-show="!visible" />
    </div>
    <div :class="$style.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 改变状态
    handleChange() {
      let visible = !this.visible;
      this.$emit("update:visible", visible);
    },
  },
  props: {
    // 展开状态
    visible: {
      type: Boolean,
      default: true,
    },
    // 顶部定位
    top: {
      type: String,
      default: "30%",
    },
    // 左右位置
    justify: {
      type: String,
      default: "right",
    },
  },

  /* 
    功能：
    1. 鼠标悬停，展开handler，移开不展开，折叠状态下始终展开
    2. 展开状态由visible属性控制
    3. 顶部定位由top属性控制
    4. 左右位置由justify属性控制
  */
};
</script>
<style lang="less" module>
@gap: 10px;
.container {
  background: white;
  position: absolute;
  //   默认不展开handler
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  z-index: 1996;
  transition: all 400ms ease 0s;

  // 框的位置
  &.left {
    right: 100%;
    .handler {
      right: 0;
      transform: translate(80%, -50%) rotateZ(180deg);
    }
  }
  &.right {
    left: 100%;
    .handler {
      transform: translate(-80%, -50%);
      left: 0;
    }
  }

  // 动画
  &.unfold.left {
    transform: translateX(100% + @gap);
  }
  &.unfold.right {
    transform: translateX(-100% - @gap);
  }
  &.fold.right,
  &.fold.left {
    transform: translateX(0px);
    // 折叠状态下始终展开handler
    overflow: visible;
  }
  // 鼠标悬停展开handler
  &.overflow:hover {
    overflow: visible;
  }
  .handler {
    position: absolute;
    top: 50%;
    width: 20px;
    line-height: 50px;
    height: 50px;
    font-size: 12px;
    color: #d8dbdf;
    // border: 1px solid #d8dbdf;
    border-radius: 3px;
    vertical-align: middle;
    cursor: pointer;
    background: white;
    box-shadow: -6px 0px 6px 0 rgba(0, 0, 0, 0.1);
    &:hover {
      color: @linkColor;
    }
  }
  .content {
  }
}
</style>
