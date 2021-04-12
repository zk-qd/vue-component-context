<template>
  <div>
    <el-row
      type="flex"
      :gutter="20"
      justify="space-between"
      align="space-between"
    >
      <el-col v-bind="orient" v-for="item in list" :key="item.url">
        <p>{{ item.name }}</p>
        <hls :url="item.url"></hls>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import hls from "./index.vue";
export default {
  name: "hls_demo",
  components: { hls },
  data() {
    return {
      orient: {
        span: 8,
        xs: 24,
        sm: 12,
        md: 8,
        lg: 8,
        xl: 6,
      },
      list: [
        {
          name: "呵呵",
          url:
            "http://172.16.150.51:83/ncg/172.16.150.220/7099/0/43012207001310784328/MAIN/TCP/live.m3u8&checkinfo=ewogICAidGltZSIgOiAiMjAyMTAyMDRUMTUxMzI0WiIsCiAgICJ1cmwiIDogImh0dHA6Ly8xNzIuMTYuMTUwLjUxOjgzL25jZy8xNzIuMTYuMTUwLjIyMC83MDk5LzAvNDMwMTIyMDcwMDEzMTA3ODQzMjgvTUFJTi9UQ1AvbGl2ZS5tM3U4Igp9Cg%3D%3D&idinfo=EAAAAAAQAAD9mqqBSTrvxz%2BxP4eYPdmUL3Sb3v%2Fn9kr1iXCX1WyVaIkYRd5Lkl%2BPZ6R4CLLzvZg%3D",
        },
        {
          name: "哈哈",
          url:
            "http://172.16.150.51:83/ncg/172.16.150.220/7099/0/43010227001310861451/MAIN/TCP/live.m3u8&checkinfo=ewogICAidGltZSIgOiAiMjAyMTAxMzBUMjI1MTM0WiIsCiAgICJ1cmwiIDogImh0dHA6Ly8xNzIuMTYuMTUwLjUxOjgzL25jZy8xNzIuMTYuMTUwLjIyMC83MDk5LzAvNDMwMTAyMjcwMDEzMTA4NjE0NTEvTUFJTi9UQ1AvbGl2ZS5tM3U4Igp9Cg%3D%3D&idinfo=EAAAAAAQAADBAyJwCcusnS9pk%2B7%2B9WHieR6xzptpiZibdqcwnGWxTQvjMLzq5p6o%2BcfsfkqcT84%3D",
        },
        {
          name: "嘿嘿",
          url:
            "http://172.16.150.51:83/ncg/172.16.150.220/7099/0/43010303001310482895/MAIN/TCP/live.m3u8&checkinfo=ewogICAidGltZSIgOiAiMjAyMTAyMDVUMTEyMDQ5WiIsCiAgICJ1cmwiIDogImh0dHA6Ly8xNzIuMTYuMTUwLjUxOjgzL25jZy8xNzIuMTYuMTUwLjIyMC83MDk5LzAvNDMwMTAzMDMwMDEzMTA0ODI4OTUvTUFJTi9UQ1AvbGl2ZS5tM3U4Igp9Cg%3D%3D&idinfo=EAAAAAAQAAAfb%2B56rMd390I1tIjU3mSvtd0a%2BIYsx3Be63jKEFYajkRJkGhYU%2BbSt03WMFcOTfE%3D",
        },
        {
          name: "嘻嘻",
          url:
            "http://172.16.150.51:83/ncg/172.16.150.220/7099/0/43010303001310487539/MAIN/TCP/live.m3u8&checkinfo=ewogICAidGltZSIgOiAiMjAyMTAyMDVUMTEyMDQ5WiIsCiAgICJ1cmwiIDogImh0dHA6Ly8xNzIuMTYuMTUwLjUxOjgzL25jZy8xNzIuMTYuMTUwLjIyMC83MDk5LzAvNDMwMTAzMDMwMDEzMTA0ODc1MzkvTUFJTi9UQ1AvbGl2ZS5tM3U4Igp9Cg%3D%3D&idinfo=EAAAAAAQAAAzChI8jOGFeFug0vOcSwjNc608DhqVHuxTDLVPCIVaZS0wFF3jpLEQPUgTA%2B9C0Kk%3D",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
