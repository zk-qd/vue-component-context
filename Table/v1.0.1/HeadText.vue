<template>
  <el-row>
    <el-col :span="24" class="col">
      <span v-for="(v, i) in item" :key="i">
        <em>{{ v.label }}</em
        ><em v-if="v.value">:&nbsp;&nbsp;{{ v.value }}</em
        ><i v-show="!(i == item.length - 1)">|</i>
      </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      default: [],
    },
    /* 
        item:
        [
            {
                label: '',
                value: '',
            }
        ]
    
    
    */
  },
};
</script>

<style scoped>
.col {
  border: 1px solid #bae7ff;
  background-color: #e6f7ff;
  border-radius: 2px;
  /* height: 40px; */
  line-height: 38px;
  color: #666d71;
  font-size: 14px;
  padding: 0 10px;
  box-sizing: content-box;
}
/* .col i {
}
.col em {
  margin-right: 10px;
} */
.col i {
  font-size: 20px;
  margin: 0 10px;
}
</style>
