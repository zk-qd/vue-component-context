<template>
  <div>
    <el-radio-group
      :value="active"
      @input="handleInput"
      @change="handleChange"
      :class="$style.tabs"
      size="mini"
    >
      <el-radio-button
        v-for="(item, index) in tabOptions"
        :key="index"
        :label="index"
        >{{ item }}</el-radio-button
      >
    </el-radio-group>
  </div>
</template>
<script>
export default {
  name: "BoxContentTabs",
  data() {
    return {
    };
  },

  props: {
    tabOptions: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      default: 0
    }
  },
  /* 向外暴露： tabOptions属性  togger方法 */
  methods: {
    handleChange(index) {
      this.$emit("change", index);
    },
    handleInput(index) {
      this.$emit("update:active", index);
    }
  }
};
</script>
<style module scoped>
.tabs {
}
</style>
