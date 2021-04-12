<template>
  <el-select
    :value="value"
    @input="handleInput"
    filterable
    :placeholder="placeholder"
    clearable
    @change="handleChange"
    :disabled="disabled"
    :size="size"
    :multiple="multiple"
  >
    <el-option
      v-for="item in list"
      :key="item.id"
      :label="item.value"
      :value="item.id"
    >
    </el-option>
  </el-select>
</template>

<script>
/* 
 <linked-select
    class="w250 mgr10"
    v-model="query.lineName"
    placeholder="请输入线路名称"
    :list="lineNameList"
 />
*/
/* 
    说明： 该组件使用id查询的
*/
export default {
  name: "LinkedSelect",
  props: {
    value: {
      type: null
    },
    placeholder: {
      type: String
    },

    list: {
      type: Array,
      default: () => []
          // LinkedList 数据格式都是 [{value: '',id: ''}] 只是对于LinkedList只有value有作用
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 大小
    size: {
      type: String,
      default: "small"
    },
    // 多选操作默认不多选
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    handleChange(val) {
      this.$emit("select", val);
    }
  }
};
</script>
