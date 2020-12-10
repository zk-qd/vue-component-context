<template>
  <div class="custom-full-screen" @click="click">
    <svg-icon :icon-class="fullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>
<script>
import vRoot from "@/utils/root.js";
import screenfull from "screenfull";
export default {
  name: "custom_full_screen",
  data() {
    return {
      fullscreen: false,
      parent: null
    };
  },
  mounted() {
    this.init();
    // 获取父元素
    this.parent = this.$parent.$vnode.elm;
    /* //监听退出全屏事件
    window.onresize = () => {
      // 判断是否已经退出全屏，
      if (!checkFull()) {
        //   判断以何种方式退出
        if (this.fullscreen) {
          // 这是 esc以及点击x 方式退出的
          this.close();
        }
      }
    };
    function checkFull() {
      var isFull =
        document.fullscreenEnabled ||
        window.fullscreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenEnabled;
      //to fix : false || undefined == undefined
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    } */
  },
  methods: {
    click() {
      /* vRoot.$emit("full-screen", this.fullscreen);
      this.$nextTick(() => {
        if (!this.fullscreen) {
          this.open();
        } else {
          this.close();
        }
      }); */
      if (screenfull.enabled) {
        screenfull.request(this.parent);
      }
    },
    change() {
      this.fullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off("change", this.change);
      }
    }
  },
  beforeDestroy() {
    this.destroy();
  }

  /* open() {
      // 开启大屏
      this.fullscreen = true;
      this.parent.classList.add("full-screen");
    },
    close() {
      // 关闭大屏
      this.fullscreen = false;
      this.parent.classList.remove("full-screen");
    } */
};
</script>
<style lang="less" scoped>
.custom-full-screen {
  position: absolute;
  left: 100px;
  top: 100px;
  width: 30px;
  height: 30px;
}
</style>
<style lang="less">
/* .full-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
} */
</style>
