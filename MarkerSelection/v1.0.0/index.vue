<template>
  <div id="map-marker__selection"></div>
</template>

<script>
/* 
  新增和修改
    1. 加载组件时初始化创建地图，点标记懒创建
    2. 父组件初始化新增或者初始化修改时通过position方法设置点标记，如果position不存在，那么默认创建在center位置
    3. 通过移动点标记触发drag，改变父组件经纬度

  查看
    1. 加载组件时初始化创建地图，点标记懒创建
    2. 父组件初始化查看时，通过position方法设置点标记，如果position不存在，那么就创建点标记
    3. 默认禁用点标记

  校验经纬度： 全部交给父组件
  position: [lng,lat] 格式
*/

export default {
  data() {
    return {
      marker: null,
      kmap: null
    };
  },
  methods: {
    createMap() {
      return KMap.loader({
        id: "map-marker__selection",
        zoom: 12,
        center: this.center
      }).then(kmap => {
        this.kmap = kmap;
        this.kmap.addBasicTools();
      });
    },
    createMarker(position) {
      ObjectKit.afterPerform(
        () => {
          // 创建站点
          this.marker = this.kmap.createMarker({
            position: position,
            // 设置是否可以拖拽
            draggable: !this.disabled, // 禁用
            cursor: "move",
            // 设置拖拽效果
            raiseOnDrag: true
          });
          this.kmap.on("dragend", e => {
            let lnglat = e.lnglat,
              position = [lnglat.lng, lnglat.lat];
            this.drag(position);
            this.moveMarker(position);
          })(this.marker);
          this.kmap.setFitView(this.marker);
          this.kmap.add(this.marker);
        },
        () => {
          return this.kmap;
        }
      );
    },
    moveMarker(position) {
      this.marker.setPosition(position);
      this.kmap.setFitView(this.marker);
    },
    // 拖动
    drag(position) {
      this.$emit("drag", position);
    },
    // 定位
    position(position) {
      if (!position) {
        if (this.disabled) return;
        // 处于禁用状态，position没有值时不创建点标记
        else position = this.center; // 否则以center位置创建点标记
      }
      if (this.marker) {
        this.moveMarker(position);
      } else {
        this.createMarker(position);
      }
    }
  },
  mounted() {
    this.createMap();
  },
  props: {
    center: {
      type: Array,
      default: () => KMap.CENTER("长沙县")
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    disabled: {
      immediate: false,
      handler(nVal) {
        this.marker &&
          this.marker.setOptions({
            draggable: !nVal
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
#map-marker__selection {
  width: 100%;
  height: 100%;
}
</style>
