<template>
  <div class="container">
    <el-upload
      :disabled="disabled"
      :class="[className, randomClassName]"
      :action="action"
      :headers="requestHeaders"
      list-type="picture-card"
      accept="accept"
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
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
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
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
/* 
  example: 以车辆上传为例使用该组件

*/

import { getToken } from "@/utils/auth";
export default {
  data() {
    return {
      observer: null,
      commandModel: null,
      dialogUrl: "",
      dialogVisible: false,
      // 为了获取操作dom不影响其他该组件
      randomClassName: $math.randomCoding(10),
      fileList: [
        /*   {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        } */
      ],
    };
  },
  methods: {
    /* 
      触发时机： 选择文件之后触发 
      触发条件：
      1. 上传后台成功或者失败
      2. 选择文件上传缓存时
      注意事项：
      1. 触发change事件不会触发remove事件，反之亦然
      2. fileList参数和fileList属性是不一样的，fileList参数包含所有文件（新添加的文件和原有的文件）,而fileList属性则是原有文件
      如果想要对应上，每次改变都需要将fileList参数赋值给fileList属性
      不管触发那个事件 都不会主动添加或者删除fileList,回调返回fileList参数会改变，但是fileList属性需要手动改变

    */
    handleChange(file, fileList) {
      this.fileList = [...fileList];
      this.observer.emit("togger", { length: this.fileList.length });
    },
    /*
      触发时机： 文件删除缓存之后触发 
      触发条件：
      1. 如果在before-upload没有通过，也会触发remove， 
      2. 直接点击删除触发 
      注意事项：
      1. 点击删除需要主动删除fileList中指定的数据
      2. 主动删除不会触发change事件
    */
    handleRemove(file) {
      // 根据索引删除对应图片
      let index = this.fileList.findIndex((item) => item.uid === file.uid);
      this.fileList.splice(index, 1);
      this.observer.emit("togger", { length: this.fileList.length });
    },

    /* 
      触发时机： 选择文件时 
      触发条件：
      1. 选择文件上传缓存时如果文件个数超出，就会触发该方法
    */
    handleFileExceed(files, fileList) /* 文件超出限制钩子 */ {
      this.$message.warning("单次上传文件的个数不超过" + this.limit + "个");
    },
    // 上传给后台之前 1
    handleBeforeUpload(file) {
      // 判断文件的大小
      if (file.size > this.size) {
        this.$message.warning("文件大小超出");
        this.loading = false;
        return false;
      }
    },
    // 文件上传后台过程处理 2
    handleFileUploadProgress(event, file, fileList) {},
    // 文件上传后台成功之后处理
    /* 
    触发时机： 上传文件成功 
    触发条件：
    1. 上传文件成功
    注意事项：
    1. 上传文件成功后会触发change事件
    2. 不会删除成功的文件
    */
    handleFileSuccess(res, file, fileList) {},
    // 文件上传后台失败
    /*
    触发时机： 上传文件失败 
    触发条件：
    1. 上传文件失败
    注意事项：
    1. 上传文件失败后会触发change事件，
    2. 会自动删除失败的文件
    */
    handleFileError() {},
    // handleSubmit() {  // 使用了选中文件就提交，不需要使用这个了
    //   this.$refs.upload.submit();
    // },

    handlePictureCardPreview(file) {
      this.dialogUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
  props: {
    ["file-text"]: {
      type: String,
      default: "人像面照片",
    },
    // 驼峰命名，使用该属性可以用-分开
    className: {
      type: String,
      default: "idNumber",
    },
    accept: /* 图片类型 */ {
      type: String,
      default: ".jpg, .jpeg, .png, .gif",
    },
    limit: {
      type: Number,
      default: 1,
    },
    size: /* 文件大小限制 不超过2m */ {
      type: Number,
      default: 10 * 1024 * 1024,
    },
    action: {
      type: String,
      default: "#",
    },
    list: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /*
        人像面照片
        国徽面照片
      */
  },
  created() {
    this.$watch("list", {
      deep: true,
      immediate: false,
      handler(nData) {
        this.$set(this.$data, "fileList", [...nData]);
        // 初始化显示  注意时机，不然隐藏了preview
        this.observer.emit("togger", { length: this.fileList.length });
      },
    });
    this.observer = new $design.observer();
    this.observer.on("togger", (e) => {
      let { length } = e.params;
      if (length >= this.limit) {
        // 有图片
        this.commandModel.execute({
          cmd: "have",
        });
      } else {
        // 没有图片
        this.commandModel.execute({
          cmd: "none",
        });
      }
    });
  },
  mounted() {
    let uploadContainer = document.querySelector("." + this.randomClassName);
    let preview = uploadContainer.querySelector(
        ".el-upload-list.el-upload-list--picture-card"
      ),
      add = uploadContainer.querySelector(".el-upload.el-upload--picture-card");
    this.commandModel = new $design.command({
      none() {
        preview && (preview.style.display = "none");
        add && (add.style.display = "inline-block");
      },
      have() {
        add && (add.style.display = "none");
        preview && (preview.style.display = "inline");
      },
    });
  },
  computed: {
    requestHeaders() {
      return { token: getToken(), ...this.headers };
    },
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
    .common(idNumber-front);
  }
  .idNumber-back {
    .common(idNumber-back);
  }
  .driveNumber-front {
    .common(driveNumber-front);
  }
  .driveNumber-back {
    .common(driveNumber-back);
  }
  .qualiNumber-front {
    .common(qualiNumber-front);
  }
  .qualiNumber-back {
    .common(qualiNumber-back);
  }
  // 营业执照
  .businessNumber-front {
    .common(businessNumber-front);
  }
  // 发票
  .invoic-front {
    .common(invoic-front);
  }
  // 车辆
  .car-front {
    .common(car-front);
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
