<template>
  <div class="container">
    <ul v-for="(item, index) in value" :key="index">
      <li class="file"><i class="el-icon-document"></i></li>
      <li class="name">{{ item.name }}</li>
      <li class="size">{{ item.size | sizeFormat }}</li>
      <li class="download">
        <i
          class="el-icon-download"
          title="下载"
          @click="handleDownload(item)"
        ></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleDownload({ url, name }) {
      let link = document.createElement("a");
      link.href = url;
      link.download = name;
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
      type: Array,
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
        return Number((value / kb).toFixed(2)) + "B";
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
  ul {
    padding: 3px 0;
    li {
      font-style: normal;
      color: #666;
      font-weight: 600;
      padding-right: 5px;
      font-size: inherit;
      float: left;
    }
    /deep/ i {
      font-size: 25px;
    }
    .size,
    .name {
      padding: 0 10px;
    }
    .file {
    }
    .download {
      cursor: pointer;
    }
  }
}
</style>
