<template>
  <div ref="better-scroll" :class="$style['better-scroll']">
    <div :class="$style.container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "BetterScroll",
  data() {
    return {
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs["better-scroll"], {
      //开启点击事件 默认为false
      click: true,
      probeType: 3,
      // scrollX: !this.isScrollY,
      // scrollY: this.isScrollY,
      // eventPassthrough: this.isScrollY ? "horizontal" : "vertical"
      eventPassthrough: "horizontal"
    })
  },
  methods: {
    scrollTo(x,y) {
      this.scroll.scrollTo(x,y);
    },
    scrollToElement(...args) {
      this.scroll.scrollToElement(...args);
    }
  },
}
</script>
<style module lang='scss'>
.better-scroll {
  overflow: hidden;
  height: 100%;
  .container {
    overflow: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
