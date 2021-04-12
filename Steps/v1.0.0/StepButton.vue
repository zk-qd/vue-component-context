<template>
  <div
    class="bottom_button-position"
    :class="this.sidebar.opened ? 'sideBarWidth' : 'sideBarMinWidth'"
  >
    <div class="fr">
      <template v-if="active === 0">
        <el-button @click="next">下一步</el-button>
      </template>
      <template v-else-if="active === steps - 1">
        <el-button @click="prev">上一步</el-button>
        <el-button @click="save" type='primary'>保存</el-button>
      </template>
      <template v-else-if="active === steps"> </template>
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
      this.$emit("step-change", "next");
    },
    // 上一步
    prev() {
      this.$emit("step-change", "prev");
    },
    // 保存
    save() {
      this.$emit("step-change", "save");
      // 销毁操作让父组件决定，
    }
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  props: {
    steps: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      require: true
    }
  }
};

/* 
  向外提供接口

  总步骤数
  :steps='3'
  状态
  :active=0
  步骤状态改变
  @step-change='handleStepChange('type')'

  状态有父组件决定，由子组件通知
  最后一步状态隐藏组件有父组件决定


 */
</script>
