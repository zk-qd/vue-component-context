<template>
  <div class="wrapper">
    <div class="head">
      <svg-icon :icon-class="img" class="img" /><span class="title"
        >{{ title }}
      </span>
      <span v-if="!hideDetail" class="btn" @click="handleFind()">明细</span>
    </div>
    <p class="body" v-for="(item, index) in labels" :key="index">
      <span class="bodyKey">{{ labels[index] }}:</span
      ><span class="bodyValue blue">{{ values[index] }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "HeadList",
  props: {
    //标题
    title: {
      type: String,
      require: true
    },
    //列表项
    labels: {
      type: Array,
      require: true
    },
    values: {
      type: Array,
      require: true
    },
    img: {
      type: String
    },
    // 如果为false那么隐藏明细按钮
    hideDetail: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleFind() {
      this.$emit("click");
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
/* 容器 */
.wrapper {
  box-shadow: 2px 3px 4px 0px rgba(0, 0, 0, 0.08);
  font-size: 14px;
  overflow: hidden;
  padding: 15px;
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
  .img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px;
    color: #0386ff;
  }
  .title {
    .align;
    font-weight: 600;
  }
  .btn {
    .align;
    right: 0;
    color: @linkColor;
    &:hover {
      color: @linkColorHover;
    }
    // color: #0084ff;
    // float: right;
    font-size: 13px;
    cursor: pointer;
  }
}
/* 内容 */
.body {
  height: 25px;
  line-height: 25px;
  .bodyKey {
    // color: #bbb;
    color: @titleColor;
    width: 150px;
    text-align: right;
    display: inline-block;
    vertical-align: middle;
  }
  .bodyValue {
    margin-left: 15px;
    // color: #a1d9fe;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
