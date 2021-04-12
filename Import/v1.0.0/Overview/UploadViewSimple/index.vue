<template>
  <div class="container">
    <p><i class="el-icon-document"></i></p>
    <p>{{ file.name }}</p>
    <p>{{ file.size | sizeFormat }}</p>
    <p>
      <i class="el-icon-download" title="下载" @click="handleDownload()"></i>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleDownload() {
      let link = document.createElement("a");
      link.href = this.value.url;
      link.download = this.value.name;
      link.click();
      link = null;
    },
  },
  /*
    value: {
        size,文件大小
        name,文件名称
        time,上传时间
        url,地址
    }

  */
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  filters: {
    sizeFormat(value) {
      let m = 1024 * 1024,
        kb = 1024;
      if (value >= m / 10) {
        // 大于102.4kb
        return Number((value / m).toFixed(2)) + "MB";
      } else if (value > kb && value < m / 10) {
        return Number((value / kb).toFixed(2)) + "KB";
      } else {
        Number((value / kb).toFixed(2)) + "B";
      }
    },
    timeFormat(value) {
      return DateKit.dateFormat(value, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  p {
    font-style: normal;
    color: #666;
    font-weight: 600;
    padding-right: 5px;
    font-size: inherit;
    float: left;
  }
}
</style>
