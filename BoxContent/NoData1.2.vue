<template>
  <div class="container">
    <img :src="src" alt="暂无数据" title="暂无数据" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: require("./img/empty.jpg")
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  text-align: center;
  img {
    height: 100px;
  }
}
</style>
