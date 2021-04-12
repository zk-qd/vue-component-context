<template>
  <el-button
    type="info"
    icon="el-icon-top-right"
    class="singleFileUpload-button"
  >
    <input type="file" class="singleFileUpload-file" style="display: none" />
    {{ label }}</el-button
  >
</template>
<script>
export default {
  name: "Import",
  data() {
    return {};
  },
  /* 
    usage:
    <upload label='导入' @upload="handleUpload"/>
   */
  props: {
    label: {
      type: String,
      default: "导入",
      require: false
    }
  },
  mounted() {
    var fileDom = document.querySelector(".singleFileUpload-file");
    var buttonDom = document.querySelector(".singleFileUpload-button");
    fileDom.addEventListener('click',e=> e.stopPropagation())
    buttonDom.addEventListener("click", e => {
      fileDom.click();
      e.preventDefault();
      e.stopPropagation();
    });
    fileDom.addEventListener("input", function(e) {
      var current = e.currentTarget;
      var formData = new FormData();
      // formData.append('multipartFile', e.currentTarget.files[0]);
      setTimeout(() => (current.value = ""));
      this.$emit("upload", {
        formData: formData,
        target: current,
        files: current.files
      });
    });
  }
};
</script>
<style lang="stylus" scoped></style>
