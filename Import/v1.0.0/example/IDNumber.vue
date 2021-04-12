<template>
  <div>
    <upload-image
      class-name="idNumber-back"
      file-text="身份证反面"
      :action="impApi().url"
      ref="upload"
      :list="fileList"
    />
    <el-button type="primary" @click="handleClick">提交</el-button>
  </div>
</template>
<script>
import UploadImage from "../UploadImage";
// import { update } from "@/network/industry/basic/driver";
import { imp } from "@/network/file/index";
export default {
  name: "UploadDemo",
  components: { UploadImage },
  data() {
    return {
      impApi: imp,
      fileList: []
    };
  },
  methods: {
    handleClick() {
      let src = this.impApi().src;
      let hrefs = this.$refs.upload.fileList.map(item => {
        let href = src;
        if (item.response) {
          href += item.response.data;
        } else {
          href = item.url;
        }
        return href;
      });
      update({
        driverObverse: hrefs[0]
      }).then(res => {});
    }
  }
};
</script>
<style lang="less" scoped></style>
