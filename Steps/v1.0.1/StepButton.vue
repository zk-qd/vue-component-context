<template>
  <div
    class="bottom_button-position"
    :class="this.sidebar.opened ? 'sideBarWidth' : 'sideBarMinWidth'"
    v-if="active != steps"
  >
    <div class="fr">
      <template v-if="active == 0">
        <el-button @click="next">下一步</el-button>
      </template>
      <template v-else-if="active == steps - 1">
        <el-button @click="prev">上一步</el-button>
        <el-button @click="finish" type="primary">保存</el-button>
      </template>
      <template v-else>
        <el-button @click="prev">上一步</el-button>
        <el-button @click="next">下一步</el-button>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "StepButton",
  methods: {
    // 下一步
    next() {
      this.change("next");
    },
    // 上一步
    prev() {
      // this.$emit("step-change", "prev");
      this.change("prev");
    },
    // 完成
    finish() {
      // this.$emit("step-change", "finish");
      this.change("finish");
    },
    change(type) {
      this.$emit("step-change", type, (pass) => {
        if (pass) {
          // 表示通过
          if (type == "next")
            this.$emit("update:active", Number(this.active) + 1);
          else if (type == "prev")
            this.$emit("update:active", Number(this.active) - 1);
          else if (type == "finish")
            this.$emit("update:active", Number(this.active) + 1);
        } else {
          // 表示不通过
        }
      });
    },
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  props: {
    steps: {
      type: Number,
      default: 3,
    },
    active: {
      type: Number,
      require: true,
    },
  },
};

/* 
  向外提供接口

  总步骤数
  :steps='3'
  状态
  :active=0
  步骤状态改变
  @step-change='handleStepChange('type')'





  业务细节：
  1. active为0时，只显示下一步
  2. active为step-1时 只显示上一步和保存
  3. active为step时 销毁组件
  4. active为其他时，显示上一步下一步

  5. 组件是否隐藏有子组件决定
  6. active变化也是由子组件决定，父页面告知

 */
</script>
