<template>
  <div>
    <upload
      title="导入测试"
      ref="upload"
      :action="action"
      :visible.sync="uploadVisible"
    />
    <el-button @click="handleOpen"></el-button>
  </div>
</template>
<script>
import Upload from "./Upload";
export default {
  components: { Upload },
  data() {
    action: "http://www.baidu.com";
  },
  methods: {
    handleOpen() {
      // this.$refs["upload"].visible = true;
      this.uploadVisible = true;
    }
  },
  mounted() {}
};
</script>
