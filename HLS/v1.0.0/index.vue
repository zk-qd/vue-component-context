<template>
  <video
    v-show="visible"
    ref="video"
    :autoplay="autoplay"
    :preload="preload"
    :controls="controls"
    style="width:100%;height:100%;"
  ></video>
</template>
<script>
const Hls = require("hls.js");
export default {
  data() {
    return {
      hls: null, // 插件对象
      videoEl: null, // 视频元素
      visible: true, // 视频显示隐藏
    };
  },
  props: {
    url: {
      type: String,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    preload: {
      type: Boolean,
      default: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    paly() {
      this.videoEl.paly();
    },
    pause() {
      this.videoEl.pause();
    },
    destroy() {
      this.hls.destroy();
      this.visible = false;
    },
    load() {
      this.hls.loadSource(this.url);
      this.visible = true;
    },
    init() {
      let videoEl = this.$refs["video"];
      this.videoEl = videoEl;
      this.hls = new Hls();
      this.hls.attachMedia(this.videoEl); // 关联媒体
      // 准备就绪事件
      this.hls.on(Hls.Events.MANIFEST_PARSED, function() {
        videoEl.play();
      });
      //  错误监听事件
      this.hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            // 网络错误导致的错误，据观察这种类型的错，占比最高
            case Hls.ErrorTypes.NETWORK_ERROR:
              // 500 400 404都进入这里
              let code = data.response.code;
              if (code == 500) {
                return this.msgError("该视频无法播放");
              } else if (code == 400) {
                this.msgError("网络异常，正在重新加载");
                this.hls.startLoad();
              } else if (code == 404) {
                // this.msgError("网络异常，正在重新加载");
                // this.hls.startLoad();
                this.msgError("该视频不存在");
              }
              // 根据自己业务（心跳/错误次数 需要加载还是重新请求，这里只给出简单的，加载情况作为示例）
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              this.msgError("多媒体错误");
              this.hls.recoverMediaError(); // 很少见
              break;
            default:
              this.msgError("其他原因");
              this.load();
              break;
          }
        }
      });
    },
  },
  mounted() {
    this.init();
    this.$watch("url", {
      handler(val) {
        if (!val) return;
        this.load();
      },
      immediate: true,
    });
  },
  //路由保持活性时离开该路由和进入该路由时触发
  activated() {
    this.play();
  },
  deactivated() {
    this.pause();
  },
  beforeDestroy() {
    this.destroy();
  },
  /**
   * 业务流程
   * 1. 初始化视频
   * 2. 监听url-中途切换视频，
   * 3. 播放视频
   * 4. 暂停视频
   * 5. 切换路由
   * 6. 关闭视频
   *
   * 逻辑实现
   * 1. 初始化视频-不播放
   *   - 初始化创建hls对象
   * 2. 监听url-初始加载或者，中途切换视频
   *   - 先销毁之前视频
   *   - 监听url的变化，有值则加载视频，并显示视频容器
   * 3. 播放视频 暂停视频
   *   - video的 play pause方法
   * 4. 切换路由-释放资源
   *   - 保持活性切换 暂停，切回再次播放
   *   - 不保持活性切换 直接销毁
   * 5. 关闭视频
   *   - 手动关闭
   *   - 组件销毁关闭
   *
   *
   * 外部操作：
   * 1. 播放视频- 传入url
   * 2. 修改视频- 传入修改后url
   * 3. 关闭视频- 销毁组件
   */
};
</script>
<style lang="less" scoped></style>
