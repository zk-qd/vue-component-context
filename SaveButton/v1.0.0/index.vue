<template>
  <div
    class="bottom_button-position"
    :class="this.sidebar.opened ? 'sideBarWidth' : 'sideBarMinWidth'"
  >
    <div class="fr">
      <slot name="button"></slot
      ><!-- 向下兼容 -->
      <slot name="before"></slot>
      <slot name="default"></slot>
      <el-button v-if="visible" @click="save">{{ name }}</el-button>
      <slot name="after"></slot>
    </div>
  </div>
</template>
<script>
/*
  新增功能：
  1. slot为button
  2. 返回，默认返回表格页面 获取当前路由，利用正则表达式获取表格页面路由，也可以自定义返回，传入路由

  version:
  - 1.1
    1. 保留之前的button插槽
    2. 新增before和after以及default插槽
    3. default插槽是为了代替原本默认的按钮
    4. 为了兼容之前的版本新加了visible属性


*/
import { mapGetters } from "vuex";
export default {
  name: "SaveButton",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    /* 保存 */
    save() {
      this.$emit("save");
    },
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  mounted() {
    this.$watch("$scopedSlots", {
      deep: true,
      immediate: true,
      handler(scope) {
        if (
          scope &&
          scope.default
          // && scope.default().find(item=> item.tag)
        ) {
          // 如果有slot=default
          return (this.visible = false);
        } else {
          return (this.visible = true);
        }
      },
    });
  },
  props: {
    name: {
      type: String,
      default: "保存",
    },
  },
};
</script>
