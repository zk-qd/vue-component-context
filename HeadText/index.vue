<template>
  <ul :class="$style.container">
    <li v-for="(itme, index) in data" :key="index">
      <!-- 标题 -->
      <span :class="$style.title" v-if="item.title"
        >{{ item.title }}:&nbsp;&nbsp;</span
      >
      <ul>
        <li v-for="(citem, cindex) in item.children" :key="cindex">
          <!-- label项 -->
          <em :class="$style.label">{{ citem.label }}:&nbsp;&nbsp;</em>
          <!-- value项 -->
          <em :class="$style.value">{{
            citem.format ? citem.format(citem.value) : citem.value
          }}</em>
          <!-- 分隔符 -->
          <i :class="$style.limit" v-show="cindex < item.children.length - 1"
            >|</i
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["data"],

  /*
   配置
    data: [{
        title: '', // 需要事先填写
        children: [{
            label: '',
            value: '',
            format() {

            }//添加单位 需要事先填写
        }]
    }]
    后台返回数据格式都变成这种传入adapterStatData，key为任意名称
    data: [
        {
            enterName: '',  标题没有就为空
            states: [{num: '',status: ''}]  值
        }
    ]
  */

  methods: {
    /**
     * *适配器
     * @param {Array} config 配置信息
     * @param {Array} data 数据
     * @param {String} label 标签
     * @param {String} 值
     * @return {Array} 适配完成的数据
     * todo数据适配思路
     * *1. 如果多项根据标题匹配配置
     * *2. 配置多于数据，删除不需要的
     * *3. 配置少于数据，不处理
     * *4. 值以data为标准，顺序以config为标准,个数有data决定
     *
     *  */

    adapterStatData(config, data, label, value) {
      //   区分字段
      let fields = Object.keys(data[0]),
        childrenField =
          fields.find(item => data[0][item] instanceof Array) || "children",
        titleField =
          fields.find(item => !(data[0][item] instanceof Array)) || "title";
      //  适配数据
      data.forEach(updateConfig);
      //   第一层
      function updateConfig(itemData, index) {
        config.forEach(itemConfig => {
          if (itemConfig.title === itemData[titleField]) {
            itemConfig.need = true;
            updateConfigChildren(itemConfig.children, itemData[childrenField]);
          }
        });
      }
      //   第二层
      function updateConfigChildren(childrenConfig, childrenData) {
        childrenData.forEach(item => {
          childrenConfig.forEach(citem => {
            if (citem.label === item[label]) {
              citem.need = true;
              citem.value = item[value];
            }
          });
        });
      }
      //   去除data没有的项
      config = config.filter(item => item.need);
      config = config.map(item => item.children.map(citem => citem.need));
      return config;
    }
  }
};
</script>

<style lang="less" module scoped>
.container {
  font-size: 14px;
  > li {
    border: 1px solid #bae7ff;
    background-color: #e6f7ff;
    border-radius: 2px;
    height: 40px;
    line-height: 38px;
    color: #666d71;
    padding: 0 10px;
  }
  .title {
  }
  .label {
  }
  .value {
  }
  .limit {
    font-size: 20px;
    margin: 0 10px;
  }
}
</style>
