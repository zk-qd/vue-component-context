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
        :icon="item.icon"
      ></el-step>
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
      require: true
    },
    active: {
      type: Number,
      require: true
    }
  }
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
