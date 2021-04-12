<template>
  <div :class="$style.container">
    <el-menu mode="horizontal" :default-active="active" @select="handleSelect">
      <el-menu-item
        v-for="(item, index) in menu"
        :index="item.index"
        :key="index"
      >
        <template v-if="item.to">
          <router-link :to="item.to">{{ item.title }}</router-link>
        </template>
        <template>{{ item.title }}</template>
        
      </el-menu-item>
      <span class="content_box-tabs">
          <slot name="final"></slot>
        </span>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "TabHeader",
  data() {
    return {};
  },

  /*
        menu: [
            {
                index: 1,
                title: '',
                to: {path: '' ,replace: true},
            }
        ]

        active: 初始化选中index

     */
  props: {
    menu: {
      type: Array,
      require: true,
    },
    active: {
      type: String,
      default: "0",
    },
  },
  methods: {
    handleSelect(index, path) {
      this.$emit("update:active", index);
    },
  },
};
</script>
<style module lang="scss">
.container {
  width: 100%;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
}

</style>
<style scoped lang="less">
.content_box-button() {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  cursor: pointer;
  color: @titleColor;
  font-weight: 600;
}
.content_box-tabs {
  .content_box-button();
}
.el-menu--horizontal>.el-menu-item{
  height: 40px  !important;
    line-height: 40px !important;
}
.el-menu-item{
  font-size: 13px !important;
    padding: 0 10px !important;
}
</style>

