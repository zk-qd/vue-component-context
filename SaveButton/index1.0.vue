<template>
  <div
    class="bottom_button-position"
    :class="this.sidebar.opened ? 'sideBarWidth' : 'sideBarMinWidth'"
  >
    <div class="fr">
      <slot name="button"></slot>
      <el-button @click="save">{{ name }}</el-button>
    </div>
  </div>
</template>
<script>
/* 
  新增功能：
  1. slot为button

  2. 返回，默认返回表格页面 获取当前路由，利用正则表达式获取表格页面路由，也可以自定义返回，传入路由

*/
import { mapGetters } from "vuex";
export default {
  name: "SaveButton",
  methods: {
    /* 保存 */
    save() {
      this.$emit("save");
    }
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  props: {
    name: {
      type: String,
      default: "保存"
    }
  }
};
</script>
