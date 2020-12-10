<template>
  <div :class="$style.wrapper">
    <svg-icon icon-class="success" style="width: 90px;height: 90px;" />
    <p v-if="hint">{{ hint }}</p>
    <div v-if="route">
      <el-button type="primary" :icon="route.icon" size="medium"
        ><router-link :to="route.to">{{ route.label }}</router-link></el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "StepFinish",
  props: {
    //   跳转
    /* 
    route: {
        to: {path: '',replace},
        label: '查看详情',
        icon: 'el-icon-info'
    }
    hint: '线路添加成功'
     */
    route: {
      type: Object
    },
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
    height: 250px;
    margin-top: 20px;
    font-size: 22px;
    letter-spacing: 3px;
  }
}
</style>
