<template>
  <!--最外层-->
  <div>
    <div
      class="el-progress el-progress--line is-success el-progress--text-inside"
      role="progressbar"
      :aria-valuenow="percentageBar"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <!--线形进度条-->
      <div class="el-progress-bar">
        <!--进度条外部背景；strokeWidth:文档中说是宽度，这里是高度呀-->
        <div
          class="el-progress-bar__outer"
          :style="{ height: strokeWidth + 'px' }"
        >
          <!--进度条内部百分比-->
          <div
            class="el-progress-bar__inner"
            :style="barStyle"
            style="z-index:999"
          >
            <!--线形进度条内部文字-->
            <div
              class="el-progress-bar__innerText"
              :style="{ lineHeight: strokeWidth + 'px' }"
            >
              {{ percentageBar }}%
            </div>
          </div>
          <div
            class="el-progress-bar__inner"
            :style="barStyle2"
            v-if="percentageValue[1]"
          >
            <div
              class="el-progress-bar__innerText2"
              :style="{ lineHeight: strokeWidth + 'px' }"
            >
              {{ percentageBar2 }}%
            </div>
          </div>
        </div>
        <div class="number">{{ percentageValue[0] }}次</div>
      </div>
      <div class="contener ">
        <div>
          <span>{{ percentageLabel[0] }}:{{ percentageValue[0] }}次</span>
        </div>
        <div v-if="!isNaN(percentageValue[1])">
          <span>{{ percentageLabel[1] }}:{{ percentageValue[1] }}次</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VProgress",
  data() {
    return { percentageBar: 0, percentageLabel: null, percentageValue: null };
  },
  props: {
    //调用量数组（当前/总共）
    percentage: {
      type: Array,
      required: true,
    },
    //进度条高度
    strokeWidth: {
      type: Number,
      default: 6,
    },
    //上限值
    UpperProgressData: {
      //  type: String,
      required: true,
    },
  },
  methods: {
    //进度条内部百分比和背景颜色显示
    progressBar() {
      this.percentageLabel = this.percentage.map((item) => item.label);
      this.percentageValue = this.percentage.map((item) => item.value);
      if (this.UpperProgressData)
        this.percentageBar = Math.round(
          (this.percentageValue[0] / this.UpperProgressData) * 100
        );
      else this.percentageBar = 0;
      if (this.percentageValue[1]!=undefined) {
        if (this.UpperProgressData)
          this.percentageBar2 = Math.round(
            (this.percentageValue[1] / this.UpperProgressData) * 100
          );
        else this.percentageBar2 = 0;
      }
    },
  },
  computed: {
    barStyle() {
      const style = {};
      style.width = this.percentageBar + "%";
      if (this.percentageBar < 50) {
        style.backgroundColor = "#409eff";
      } else if (this.percentageBar < 80) {
        style.backgroundColor = "#e6a23c";
      } else style.backgroundColor = "#f56c6c";

      style.ZIndex = "999";
      return style;
    },
    barStyle2() {
      const style = {};
      style.width = this.percentageBar2 + "%";
      style.backgroundColor = "#bbb";
      return style;
    },
  },
  created() {
    this.progressBar();
  },
};
</script>
<style scoped>
.el-progress-bar__outer {
  display: inline-block;
  width: 70%;
}
.el-progress-bar__innerText,
.el-progress-bar__innerText2 {
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  font-size: 12px;
  margin: 0 5px;
  line-height: 24px;
  float: right;
}
.el-progress-bar__outer {
  height: 6px;
  border-radius: 100px;
  background-color: #ebeef5;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
}
.contener {
  border: 1px solid #000;
  display: none;
  position: fixed;
  z-index: 999;
  background-color: #fff;
  /* left: 0; */
  margin-left: 38px;
  font-size: 11px;
  padding: 4px 21px;
  text-align: center;
  line-height: 13px;
}
.el-progress:hover .contener {
  display: block;
  z-index: 10000;
}
.el-progress:hover {
  cursor: pointer;
}
.number {
  display: inline-block;
  width: 28%;
}
</style>
