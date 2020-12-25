<template>
  <div>
    <el-upload
      :limit="limit"
      :action="action"
      :accept="accept"
      :headers="requestHeaders"
      :auto-upload="true"
      :file-list="value"
      :on-before-remove="handleBeforeRemove"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :on-exceed="handleFileExceed"
      :before-upload="handleBeforeUpload"
      :on-progress="handleFileUploadProgress"
      :on-success="handleFileSuccess"
      :on-error="handleFileError"
      ref="upload"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <!-- <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div> -->
    </el-upload>
  </div>
</template>
<script>
// 附件上传
import { getToken } from "@/utils/auth";
import { upload } from "@/network/file";
export default {
  data() {
    return {
      action: upload().url,
      prefix: upload().src,
      /* value: [
        {
          name: "food.jpeg",
          url: "",
        },
      ], */
    };
  },
  methods: {
    handleChange(file, fileList) {
      if (file.response) {
        this.$emit("input", fileList.map((item) => response.data));
      }
    },
    handleBeforeRemove() {},
    handleRemove(file) {
      let index = this.value.findIndex((item) => item.uid === file.uid);
      this.value.splice(index, 1);
      this.$emit("input", this.value);
    },
    handleFileExceed(files, fileList) /* 文件超出限制钩子 */ {
      this.$message.warning("单次上传文件的个数不超过" + this.limit + "个");
    },
    handleBeforeUpload(file) {
      // 判断文件的大小
      if (file.size > this.size) {
        this.$message.warning("文件大小超出");
        return false;
      }
    },
    handleFileUploadProgress(event, file, fileList) {},
    handleFileSuccess(res, file, fileList) {
      this.$message.success("上传成功");
    },
    handleFileError() {
      this.$message.error("上传失败");
    },
  },
  props: {
    limit: {
      type: Number,
      default: 1,
    },
    accept: /* 文件类型 */ {
      type: String,
      default: ".*",
    },
    size: /* */ {
      type: Number,
      default: 100 * 1024 * 1024,
    },
    // 和el-form配合使用，
    value: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    requestHeaders() {
      return { token: getToken() /* ...this.headers */ };
    },
  },
};
</script>
