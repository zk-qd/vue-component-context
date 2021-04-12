<template>
  <div class="container" v-loading="loading">
    <div id="overlay-edit-map"></div>
    <div class="hint" v-if="toolShow">
      鼠标在地图上点击绘制，双击或右键结束绘制
    </div>
    <div class="button" v-if="toolShow">
      <el-button type="primary" @click="handleOpenEditor">开始编辑</el-button>
      <el-button type="primary" @click="handleCloseEditor">结束编辑</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "OverlayEditor",
  data() {
    return {
      loading: true, // 加载
      toolShow: true, // 工具是否显示
      commandModel: null, // 命令对象
      kmap: null, // 地图对象
      polyEditor: null, // 编辑对象
      mouseTool: null, // 鼠标工具
      overlay: null // 覆盖物对象

      /*
      usage:
      父组件直接取子组件的overlay对象，

      过程：
      1. 创建地图
      2. 创建鼠标工具
      3. 画线
      4. 触发创建编辑工具，并关闭鼠标工具
      5. 开启编辑
      6. 编辑成功
      7. 利用子组件获取overlay对象
      8. 校验画的覆盖物是否成功，在父组件校验

      */
    };
  },
  methods: {
    createMouseTool() {
      // 创建鼠标工具对象
      this.mouseTool = this.kmap.createMouseTool();
    },
    initMouseTool() {
      this.mouseTool.open("polygon"); // 画多边形
      this.mouseTool.draw = overlay => {
        if (!overlay) return;
        this.overlay = overlay;
        // 如果覆盖物画出来了，那么就关闭鼠标工具
        this.mouseTool.close();
        // 创建编辑对象
        this.createPolyEditor(this.overlay);
      };
    },
    createPolyEditor(overlay) {
      // 创建编辑对象
      this.polyEditor = this.kmap.createPolyEditor(overlay);
      this.kmap.on("end", () => {});
    },
    handleOpenEditor() {
      this.polyEditor && this.polyEditor.open();
    },
    handleCloseEditor() {
      this.polyEditor && this.polyEditor.close();
    }
  },
  mounted() {
    //  创建地图
    KMap.loader({
      id: "overlay-edit-map",
      zoom: 14,
      plugin: "all",
      center: KMap.CENTER("长沙县")
    })
      .then(kmap => {
        this.kmap = kmap;
        // this.kmap.addBasicTools();
        this.commandModel.execute({
          cmd: this.type
        });
      })
      .finally(() => {
        this.loading = false;
      });
  },
  created() {
    this.commandModel = new ObjectKit.CommandModel({
      insert: () => {
        this.createMouseTool();
        this.initMouseTool();
      },
      update: () => {
        // 1. 创建多边形
        setTimeout(() => {
          // 需要延迟才能把覆盖物画出来，暂时不知道原因
          this.overlay = this.kmap.createPolygon({ path: this.path });
          this.overlay.setMap(this.kmap.$map);
          this.kmap.setFitView();
          // 2. 创建编辑器
          this.createPolyEditor(this.overlay);
          // 3. 打开编辑
          this.handleOpenEditor();
        }, 1000);
      },
      find: () => {
        // 1. 创建多边形
        setTimeout(() => {
          // 需要延迟才能把覆盖物画出来，暂时不知道原因
          this.overlay = this.kmap.createPolygon({ path: this.path });
          this.overlay.setMap(this.kmap.$map);
          this.kmap.setFitView();
        }, 1000);
        // 2. 隐藏按钮
        this.toolShow = false;
      }
    });
    this.stateModel = new ObjectKit.StateModel({});
  },
  props: {
    type: {
      type: String, // insert update find
      default: "insert"

      /*
        insert: 初始化没有覆盖物
        update: 初始化有覆盖物，没有鼠标工具
        find: 既没有鼠标工具，也没有编辑对象
      */
    },
    path: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.container,
#overlay-edit-map {
  position: relative;
  width: 100%;
  height: 100%;
}
.hint {
  position: absolute;
  top: 2%;
  right: 2%;
  background-color: #00000022;
  height: 20px;
  line-height: 20px;
  color: red;
  padding: 0 2px;
  font-size: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.button {
  position: absolute;
  right: 2%;
  bottom: 2%;
}
</style>
