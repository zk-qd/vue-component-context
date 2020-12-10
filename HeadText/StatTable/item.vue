<template>
  <el-col :span="span" class="col" v-if="data" > 
      <!-- style="text-align:right;" -->
    <em v-if="data.title">{{ data.title }}<i>|</i></em>
    <span v-for="(item, index) in data.children" :key="index">
      <i v-show="!(index == 0)">|</i>
      <em>{{ item.label }}</em>
      <em
        >:&nbsp;&nbsp;{{
          item.format ? item.format(item.value) : item.value
        }}</em
      >
    </span>
  </el-col>
</template>
<script>

// 表格 统计数据
export default {
  created() {},
  props: {
    span: {
      type: Number,
      default: 24
    },
    data: {
      type: null
    }
    /* 
    data: {
        title: '龙骧',
        children: [
            {
                label: '运营车辆',
                value: '12',
                format(value) {
                    return value + '辆',
                }
            }
        ]

    }

    */
  }
};
</script>
<style lang="less" scoped>
.col {
  /* height: 40px; */
  line-height: 38px;
  i {
    margin: 0 10px;
  }
}
</style>
