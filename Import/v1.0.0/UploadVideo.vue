<template>
  <div class="container">
    <el-upload
      :disabled="disabled"
      :class="[className, randomClassName]"
      :action="action"
      :headers="requestHeaders"
      list-type="picture-card"
      :accept="accept"
      :auto-upload="true"
      :limit="limit"
      :on-change="handleChange"
      :on-exceed="handleFileExceed"
      :before-upload="handleBeforeUpload"
      :on-progress="handleFileUploadProgress"
      :on-success="handleFileSuccess"
      :on-error="handleFileError"
      :file-list="fileList"
      ref="upload"
    >
      <!-- :on-remove="handleRemove" -->
      <div slot="default" style="line-height: 20px;padding-top: 50px;">
        <!-- <i class="el-icon-plus"></i> -->
        <!--  <p style="color: #8C939D;font-size: 14px;">
          {{ fileText }}
        </p> -->
      </div>

      <div slot="file" slot-scope="{ file }">
        <el-progress
          v-if="percentage"
          type="circle"
          :percentage="percentage"
          style="margin-top:7px;"
        ></el-progress>
        <video
          v-else
          v-on:loadeddata="loadeddata"
          :src="file.url"
          ref="video"
          class="wfill hfill"
        >
          您的浏览器不支持视频播放
        </video>
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <!-- <el-button type="primary" @click="handleSubmit">提交</el-button> -->
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="true"
      :destroy-on-close="true"
      :modal-append-to-body="true"
      title="预览"
    >
      <video :src="dialogUrl" autoplay controls class="wfill">
        您的浏览器不支持视频播放
      </video>
    </el-dialog>
  </div>
</template>

<script>
/* 
  example: video
*/
import file from "./mixins/file";
export default {
  mixins: [file],
  data() {
    return {};
  },
  methods: {
    loadeddata() {
      this.$nextTick(() => {
        // 视频上传后，还未播放时 是空白，因此加他加一个开始时间，这样能看到也能视频图像
        this.$refs["video"].currentTime = 5;
      });
    }
    /* // 文件上传后台过程处理 2
    handleFileUploadProgress(event, file, fileList) {
      this.percentage = file.percentage.toFixed(0) * 1;
    },
    handleFileSuccess(res, file, fileList) {
      this.percentage = 0;
      this.$message.success("上传成功");
    },
    handleFileError() {
      this.percentage = 0;
      this.$message.error("上传失败");
    } */
  },
  props: {
    accept: /* 文件类型 */ {
      type: String,
      //   default: "video/mp4,video/ogg,video/flv,video/avi,video/wmv,video/rmvb"
      default: "video/mp4"
    },
    size: /* 文件大小限制 不超过1000m */ {
      type: Number,
      default: 1000 * 1024 * 1024
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  // 身份证正面
  .video {
    .common(video);
  }
}
.common(@imgName) {
  // 添加开片样式
  ::v-deep .el-upload--picture-card {
    background-image: url("../../assets/image/papers/video/@{imgName}.png");
    background-size: 100% 100%;
    width: 300px;
  }
  //   展示卡片样式
  ::v-deep .el-upload-list.el-upload-list--picture-card {
    > li {
      width: 300px;
    }
  }
}
</style>
