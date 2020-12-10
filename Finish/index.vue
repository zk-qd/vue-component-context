<template>
  <div :class="$style.wrapper">
    <svg-icon icon-class="success" style="width: 90px;height: 90px;" />
    <p v-if="hint">{{ hint }}</p>
    <div style="min-height: 250px;margin: 20px 0px;">
      <slot name="inform"></slot>
    </div>
    <div>
      <slot name="button"></slot>
    </div>
  </div>
</template>
<script>
/* 
  该版本为Steps文件中的StepFinish优化版本
  
*/
export default {
  name: "Finish",
  props: {
    hint: {
      type: String
    }
  }
};
</script>
<style lang="less" module>
.wrapper {
  text-align: center;
  padding: 30px;
  p {
    color: #555b67;
    font-weight: 500;
    margin-top: 20px;
    font-size: 22px;
    letter-spacing: 3px;
  }
}
</style>
