<template>
  <el-row
    ref="row"
    :class="{
      [border ? border : '']: true,
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
    this.$watch("data", {
      handler() {
        // 安全策略 判断data是否有键，如果没有则不赋值
        // why，因为data中if判断data是判断falsy
        let keyCount = this.data ? Object.keys(this.data).length : 0;
        if (!keyCount) return;
        // 赋值给子元素，el-table中我猜测用的是store
        this.$refs["row"].$children.forEach((child) => {
          child.allSpan = this.span;
          child.item = this.data;
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
      type: null,
      default: "border",
    },
    data: {
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
</style>
<style lang="less" scoped>
.background {
  ::v-deep .header {
    background-color: var(--var-info-head__bgc);
  }
}

.border-color() {
  border-color: var(--var-info-border__color);
}
// 全部边距
.border {
  border-left: @listBorder;
  border-top: @listBorder;
  .border-color();
  > ::v-deep div {
    border-right: @listBorder;
    border-bottom: @listBorder;
    .border-color();
  }
}
// 只保留下边
.border-bottom {
  > ::v-deep div {
    border-bottom: @listBorder;
    .border-color();
  }
}
</style>
