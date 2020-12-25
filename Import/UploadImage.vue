<template>
  <div class="container">
    <el-upload
      :disabled="disabled"
      :class="[className, randomClassName /*disabled ? 'empty' : ''*/]"
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
        <i
          class="el-icon-plus"
          :style="{ visibility: disabled ? 'hidden' : 'visible' }"
        ></i>
        <p style="color: #8C939D;font-size: 14px;">
          {{ fileText }}
        </p>
      </div>
      <!-- v-for="file in fileList"  内部实现-->
      <div slot="file" slot-scope="{ file }">
        <el-progress
          v-if="percentage"
          type="circle"
          :percentage="percentage"
          style="margin-top:7px;"
        ></el-progress>
        <img
          v-else
          class="el-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <!-- <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="el-icon-download"></i>
          </span> -->
          <span
            v-show="!disabled"
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
      <img width="100%" :src="dialogUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
/* 
  example: 以车辆上传为例使用该组件
*/
import file from "./mixins/file";
export default {
  mixins: [file],
  props: {
    accept: /* 图片类型 */ {
      type: String,
      default: ".jpg, .jpeg, .png, .gif",
    },
    size: /* 文件大小限制 不超过100m */ {
      type: Number,
      default: 100 * 1024 * 1024,
    },
    /*
      人像面照片
      国徽面照片
    */
  },
  /* 
    上传图片的思路：
    接口： 1. 上传文件接口，  2. 修改接口（字段对应服务器图片地址） 3. 查询接口 （字段对应服务器图片地址）
    过程：1. 上传： 上传文件后台返回地址，拿到地址调用修改接口，提交给后台，（上传后插件本身拿到了响应消息，通过change事件返回fileList参数中就有response），在调用修改接口 2. 修改： 先调用查询接口赋值fileList然后修改文件调用修改接口
  */
};
</script>
<style lang="less" scoped>
.container {
  // 身份证正面
  .idNumber-front {
    .common("img/idNumber-front");
  }
  // 身份证反面
  .idNumber-back {
    .common("img/idNumber-back");
  }
  .driveNumber-front {
    .common("img/driveNumber-front");
  }
  .driveNumber-back {
    .common("img/driveNumber-back");
  }
  .qualiNumber-front {
    .common("img/qualiNumber-front");
  }
  .qualiNumber-back {
    .common("img/qualiNumber-back");
  }
  // 营业执照
  .businessNumber-front {
    .common("img/businessNumber-front");
  }
  // 发票
  .invoic-front {
    .common("img/invoic-front");
  }
  // 车辆
  .car-front {
    .common("img/car-front");
  }
  .empty {
    .common(empty) !important;
  }
  .upload-picture-bg {
    .common(upload-picture-bg) !important;
  }
}
.common(@imgName) {
  // 添加开片样式
  ::v-deep .el-upload--picture-card {
    background-image: url("../../assets/image/papers/@{imgName}.png");
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
