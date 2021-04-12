<template>
  <el-row
    ref="row"
    :class="{
      [$style.border]: border,
      background: background,
      [$style.wrapper]: true,
    }"
  >
    <slot name="default"></slot>
  </el-row>
</template>
<script>
export default {
  name: "info_list",
  data() {
    return {};
  },
  mounted() {
    this.$watch("item", {
      handler() {
        // 安全策略 判断item是否有键，如果没有则不赋值
        // why，因为item中if判断item是判断falsy
        let keyCount = this.item ? Object.keys(this.item).length : 0;
        if (!keyCount) return;
        // 赋值给子元素，el-table中我猜测用的是store
        this.$refs["row"].$children.forEach((child) => {
          child.allSpan = this.span;
          child.item = this.item;
          child.maxWidth = this.maxWidth;
        });
      },
      immediate: true,
      deep: true,
    });
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
      type: null,
    },
    span: {
      type: Number,
      default: 8,
      validator(val) {
        // 占位
        return [1, 2, 3, 4, 6, 8, 12, 24].includes(val);
      },
    },
    // TODO header的最大宽度
    maxWidth: {
      type: Number,
      default: 150,
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
  > div {
    display: flex;
  }
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
<style lang="less" scoped>
.background {
  ::v-deep .header {
    background-color: @headerBgc;
  }
}
</style>
