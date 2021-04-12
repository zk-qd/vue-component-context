<template>
  <el-row>
    <el-col :span="24" class="col">
      <span v-for="(itme, index) in msg.name" :key="index">
        <em>{{ itme }}</em
        ><em v-if="msg.data[index]"
          >:&nbsp;&nbsp;{{ msg.data[index] }}</em
        ><i v-show="!(index == msg.name.length - 1)">|</i>
      </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    msg: {}
  }
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
