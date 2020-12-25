<template>
  <div>
    <el-steps
      :active="active"
      align-center
      finish-status="success"
      :class="$style.steps"
    >
      <el-step
        v-for="(item, index) in items"
        :title="item.title"
        :key="index"
        :description="item.description"
        :class="{ icon: item.icon }"
      >
        <!-- <i slot="icon" class="el-icon-eleme"></i> -->
        <svg-icon
          v-if="item.icon"
          slot="icon"
          :icon-class="item.icon"
          style="width: 100%;height: 100%;"
        ></svg-icon>
      </el-step>
    </el-steps>
  </div>
</template>
<script>
export default {
  name: "Steps",
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      require: true,
    },
    active: {
      type: Number,
      require: true,
    },
  },
};

/* 

    向外暴露的

    items: [
        {
            title: '步骤一',
            description: '描述',
            icon: '',
        }
    ]
    步骤到达哪一步由父组件决定
    active: 0,
      
 */
</script>
<style lang="less" module>
.steps {
  width: 100%;
  background-color: white;
  padding: 15px 200px;
}
</style>
<style lang="less">
.icon {
  .el-step__icon.is-text {
    width: 40px;
    height: 40px;
    border-color: transparent;
  }
  .el-step__line {
    left: 60% !important;
    right: -40% !important;
    margin-top: 10px !important;
  }
}
</style>
