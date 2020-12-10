<template>
  <div class="content_box-container">
    <p class="content_box-title">
      {{ title }}
      <!-- 文字按钮 -->
      <span class="content_box-link">
        <slot name="link"></slot>
      </span>
      <!-- 按钮 -->
      <span class="content_box-tabs">
        <slot name="button"></slot>
      </span>
      <!-- 选项卡按钮 -->
      <span class="content_box-tabs">
        <slot name="tabs"></slot>
      </span>
      <!-- select -->
      <span class="content_box-tabs">
        <slot name="select"></slot>
      </span>
      <!-- toggle -->
      <span class="content_box-tabs">
        <slot name="toggle"></slot>
      </span>
    </p>
    <div class="content_box-content">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxContent",
  /* 
    内容盒子：

    title: 标题名称
    
    
     */
  props: {
    title: {
      type: String,
      require: true
    }
  }
};
</script>
<style lang="less" scoped>
/* 实际内容 */
.content_box-container {
  border: @listBorder;
}
.content_box-title {
  // border-bottom: 1px solid #c0d8e9;
  border-bottom: @listBorder;
  padding: 15px;
  margin: 0;
  position: relative;
  color: @titleColor;
  font-weight: 600;
  font-size: 14px;
}

// 普通按钮
.content_box-button() {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  cursor: pointer;
  color: @linkColor;
  font-weight: 400;
}

// 链接或者按钮
.content_box-link {
  .content_box-button;
  &:hover {
    color: @linkColorHover;
  }
}

// 选项卡 tabs
.content_box-tabs {
  .content_box-button;
}
.content_box-content {
  padding: 15px;
}
</style>
