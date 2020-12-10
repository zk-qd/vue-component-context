<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="visible"
      width="400px"
      :close-on-click-modal="false"
      :show-close="false"
      :close-on-press-escape="false"
    >
      <el-upload
        ref="upload"
        :limit="limit"
        :accept="accept"
        :headers="requestHeaders"
        :action="action"
        :disabled="disabled"
        :before-upload="handleBeforeUpload"
        :on-change="handleChange"
        :on-remove="handleRemove"
        :on-progress="handleFileUploadProgress"
        :on-success="handleFileSuccess"
        :auto-upload="false"
        :on-error="handleFileError"
        :on-exceed="handleFileExceed"
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip" v-if="template">
          <!-- <el-checkbox v-model="updateSupport" />是否更新已经存在的用户数据 -->
          <el-link
            type="info"
            style="font-size:12px"
            @click="handleDownloadTemplate"
            >下载模板</el-link
          >
        </div>
        <div class="el-upload__tip" style="color:red" slot="tip">
          {{ tip }}
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSubmit"
          :disabled="forbidden"
          :loading="loading"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getToken } from "@/utils/auth";
export default {
  name: "Upload",
  data() {
    return {
      loading: false,
      // 是否禁用上传
      disabled: false,
      // 是否更新已经存在的用户数据  1表示跟新
      updateSupport: false,
      forbidden: true
    };
  },
  props: {
    // 弹出层标题（用户导入）
    title: {
      type: String,
      default: "上传文件"
    },
    // 设置上传的请求头部
    headers: {
      type: Object
    },

    visible: {
      type: Boolean,
      default: false
    },
    // 请求地址
    action: {
      type: String,
      required: true
    },

    tip: /* 提示信息 */ {
      type: String,
      default: "提示：仅允许导入“xls”或“xlsx”格式文件！且大小不超过2M"
    },
    // 是否显示可以下载模板
    template: {
      type: Boolean,
      default: false
    },
    accept: /* 允许类型 */ {
      type: String,
      default: ".xlsx, .xls"
      /* 
      有这些类型： 控制不同类型上传，就是选择一下这些不同类型
        video: '.mp4, .ogv, .ogg, .webm',
        audio: '.wav, .mp3, .ogg, .acc, .webm, .amr',
        file: 'doc,.docx,.xlsx,.xls,.pdf',
        excel: 'xlsx,.xls',
        img: '.jpg, .jpeg, .png, .gif'
      */
    },
    limit: /* 文件个数限制 */ {
      type: Number,
      default: 1
    },
    size: /* 文件大小限制 不超过2m */ {
      type: Number,
      default: 2 * 1024 * 1024
    }
  },

  /*
    success(res, file, fileList): 成功函数
    process(event, file, fileList): 进度函数
    error(): 失败函数

  */
  computed: {
    requestHeaders() {
      return { token: getToken(), ...this.headers };
    }
    // 如果是undefined或者为0那么就是true 否则为false
    /*   forbidden() { 没有响应式不知道为什么,后面发现应该是 fileList的length一直为0 即使fileList本应该有文件了
      return this.$refs.upload && this.$refs.upload.fileList.length
        ? false
        : true;
    } */
  },

  methods: {
    // 文件添加 文件上传成功或者失败都会触发 因为上传成功或者失败都会删除fileList因此会触发change方法（不会触发remove）
    handleChange(file, fileList) {
      if (fileList.length) this.forbidden = false;
      else this.forbidden = true;
    },
    // 文件删除之后触发 如果在before-upload没有通过，那么会触发remove
    handleRemove(file) {
      if (fileList.length) this.forbidden = false;
      else this.forbidden = true;
    },
    // 上传之前
    handleBeforeUpload(file) {
      // 判断文件的大小
      if (file.size > this.size) {
        this.$message.warning("文件大小超出");
        this.loading = false;
        return false;
      }
    },
    // 文件上传过程处理
    handleFileUploadProgress(event, file, fileList) {
      /* 禁用上传 */
      this.disabled = true;
      this.$emit("process", event, file, fileList);
    },
    // 文件上传成功之后处理
    handleFileSuccess(res, file, fileList) {
      this.handleCancel();
      this.$refs.upload.clearFiles();
      this.$alert(res.msg, "导入结果", { dangerouslyUseHTMLString: true });
      this.$emit("success", res, file, fileList);
    },
    // 文件上传失败
    handleFileError() {
      this.loading = false;
      this.disabled = false;
      this.$message.error("上传失败");
      this.$emit("error");
    },
    // 文件上传个数超出
    handleFileExceed(files, fileList) /* 文件超出限制钩子 */ {
      this.$message.warning("单次上传文件的个数不超过" + this.limit + "个");
    },

    // 下载模板操作
    handleDownloadTemplate() {
      /* 模板接口 */
      handleDownloadTemplate().then(res => {
        this.download(res.msg);
      });
    },
    // 提交上传文件
    handleSubmit() {
      this.loading = true;
      this.$refs.upload.submit();
    },
    handleCancel() {
      this.changeVisible(false);
      this.disabled = false;
      this.loading = false;
      this.forbidden = true;
      /* this.$refs.upload.abort();
      this.$message.info("已取消上传"); */
    },
    changeVisible(val) {
      this.$emit("update:visible", val);
    }
  }
  /*
    思路：

    文件大小限制： 只有在before-upload中文件超出大小才能做到中断操作

    文件类型限制:  有现成的属性

    文件数量限制: 有现成的回调函数

    如何保证没有添加文件不能提交文件:  判断fileList长度是否大于0，如果大于0那么就开启提交按钮 否则禁用

    判断fileList时机： 文件状态改变 change 和 remove两个事件可能操作


  */
};
</script>
