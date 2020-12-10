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
