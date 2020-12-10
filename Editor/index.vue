<template>
  <div>
    <quill-editor
      ref="quillEditor"
      v-model="content"
      :options="editorOption"
      @blur="handleBlur($event)"
      @focus="handleFocus($event)"
      @change="handleChange($event)"
    ></quill-editor>
    <el-button class="editor-btn" type="primary" @click="submit"
      >提交</el-button
    >
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "Editor",
  data: function() {
    return {
      content: "",
      rOption: {
        //  富文本修改器配置
        modules: {
          toolbar: "#toolbar"
        },
        theme: "snow",
        placeholder: "Hello World"
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      console.log(this.content);
      this.$message.success("提交成功！");
    },
    handleBlur() {
      //失去焦点事件
    },
    handleFocus() {
      //获得焦点事件
    },
    handleChange({ editor, html, text }) {
      this.content = html;
      this.$emit("input", this.content);
    }
  }
};
</script>
<style scoped>
.editor-btn {
  margin-top: 20px;
}
</style>
