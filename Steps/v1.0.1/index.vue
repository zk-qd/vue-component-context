<template>
  <div>
    <el-steps
      :active="active"
      align-center
      finish-status="finish"
      :class="$style.steps"
    >
      <el-step
        v-for="(item, index) in menu"
        :title="item.title"
        :key="index"
        :description="item.description"
        :class="{ icon: item.icon, [item.icon]: item.icon }"
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
    menu: {
      type: Array,
      require: true,
    },
    // 这个有限制了必须是Number类型  和TabHeader冲突， 如果一起使用active还是要为String类型 不然TabHeader无法正常使用
    active: {
      type: Number,
      require: true,
    },
  },
};

/* 

    向外暴露的

    menu: [
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
// 图标和线
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

<style lang="less">
// 字体颜色
.wait {
  .el-step__title,
  .el-step__description {
    color: @info-color;
  }
}
.error {
  .el-step__title,
  .el-step__description {
    color: @danger-color;
  }
}
.success {
  .el-step__title,
  .el-step__description {
    color: @success-color;
  }
}
</style>
