<template>
  <em>
    {{ formatter ? formatter(item[prop], item) : item[prop] }}
  </em>
</template>
<script>
export default {
  props: {
    // TODO 参数1: 值，参数2: 数据项
    formatter: {
      type: Function,
    },
    item: {
      type: Object,
    },
    prop: {
      type: String,
    },
  },
};
</script>
