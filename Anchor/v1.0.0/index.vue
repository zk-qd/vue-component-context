<template>
  <div :class="{ [$style.wrapper]: true }">
    <div v-if="status" :class="{ [$style.open]: true }">
      <span :class="{ [$style.icon]: true }">
        <svg-icon
          :class="$style.svg"
          icon-class="youzhankaixianxing"
          @click="handleClose"
        />
      </span>
      <div :class="{ [$style.bar]: true }">
        <a
          v-for="(item, index) in menu"
          :key="index"
          href=""
          style="display: block"
          @click.self.prevent.stop="handleAnchor(item)"
          >{{ item.label }}</a
        >
      </div>
    </div>
    <div v-else :class="{ [$style.close]: true }">
      <span :class="{ [$style.icon]: true }">
        <svg-icon
          :class="$style.svg"
          icon-class="zuozhankaixianxing"
          @click="handleOpen"
        />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Anchor",
  props: {
    menu: {
      type: Array,
      default: () => {
        return [
          {
            label: "运管处",
            value: "yunguanchu"
          },
          {
            label: "省厅",
            value: "shengting"
          },
          {
            label: "潇湘支付",
            value: "xiaoxiangzhifu"
          },
          {
            label: "龙骧集团",
            value: "longxiangjituan"
          },
          {
            label: "易通",
            value: "yitong"
          },
          {
            label: "执法局",
            value: "zhifaju"
          },
          {
            label: "公安局",
            value: "gongganju"
          },
          {
            label: "驾培",
            value: "jiapei"
          }
        ];
      }
    }
  },
  data() {
    return {
      status: 1
    };
  },
  methods: {
    handleClose() {
      this.status = 0;
    },
    handleOpen() {
      this.status = 1;
    },
    handleAnchor(item) {
      // 找到锚点
      let anchorElement = document.getElementById(item.value);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
      // 调整视野
      let app = document.querySelector(".app-main");
      app.scrollTop = app.scrollTop - 84;
    }
  }
};
</script>
<style lang="less" module>
@fontSize: 18px;
@color: #9f9f9f;

.wrapper {
  color: @color;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  box-shadow: -4px 0px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
}

.bar {
  > a {
    line-height: 25px;
    font-size: 13px;
    font-weight: 500;
    padding: 8px 5px 8px 10px;
    margin-left: 20px;
    cursor: pointer;
    border-left: 1px solid #ededed;
    &:hover {
      background-image: linear-gradient(
        to right,
        #88b9fb 0%,
        #a5cbfccc 50%,
        #c0dafd55 100%
      );
      color: white;
    }
  }
}

.close {
  width: 20px;
  height: 50px;
  position: relative;
}

// 图标父元素
.icon {
  position: absolute;
  cursor: pointer;
  font-size: @fontSize;
  top: 0;
  bottom: 0;
  width: 20px;
  &:hover {
    color: rgba(blue(@color), blue(@color), blue(@color), 0.5)
  }
}
// 图标
.svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
