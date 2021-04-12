<template>
  <p :class="$style.wrapper" v-text="name"></p>
</template>
<script>
export default {
  name: "Title",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="less" module>
.wrapper {
  padding: 0 15px;
  /* line-height: 30px; */
  position: relative;
  color: #555b67;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
}
</style>
