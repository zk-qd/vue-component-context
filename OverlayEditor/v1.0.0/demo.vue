<template>
  <div class="table-container" :style="{ height: '600px' }">
    <overlay-editor />
  </div>
</template>
<script>
import OverlayEditor from "./index";
export default {
  name: "overlay_editor_demo",
  components: { OverlayEditor },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped></style>
