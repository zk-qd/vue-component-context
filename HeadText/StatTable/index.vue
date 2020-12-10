<template>
  <el-row class="row">
    <slot></slot>
  </el-row>
</template>

<script>
export default {
};
</script>

<style scoped>
.row {
  border: 1px solid #bae7ff;
  background-color: #e6f7ff;
  border-radius: 2px;
  color: #666d71;
  font-size: 14px;
  padding: 0 10px;
  box-sizing: content-box;
}
</style>
