<template>
  <div>
    <el-table
      :data="datas"
      stripe
      class="table"
      header-cell-class-name="table-header"
    >
      <column-item
        v-for="(item, index) in match"
        :item="item"
        :key="index"
      ></column-item>
    </el-table>
    <el-pagination
      class="pagination"
      v-if="pagination"
      background
      layout="total, prev, pager, next, jumper"
      :current-page="query.index"
      :page-size="query.count"
      :total="rows"
      @current-change="request"
    ></el-pagination>
  </div>
</template>
<script>
// version: 1.2

/* 
  功能： 
  1. 嵌套header
  2. 操作栏按钮
  3. 分页
*/

import ColumnItem from "./item";
export default {
  name: "UpdateRecord",
  components: { ColumnItem },
  data() {
    return {
      rows: 0,
      datas: [],
      query: {
        index: 1,
        count: 5
      }
    };
  },
  methods: {
    /* 
      @request='handleRequest'
    
     */
    request(val) {
      this.$set(this.query, "index", val);
      this.$emit("request", this.query);
    }
  },
  watch: {
    data(nData) {
      this.rows = nData.rows;
      this.datas = nData.datas;
    }
  },
  props: {
    //   接口数据
    /*
        data: {datas: [],rows: 20};
     */
    data: {
      type: Object
    },
    // 字段项
    /* 
    没有值的就是取默认值是最佳写法
       match: [
        {
          type: "index",
          label: "",
          width: "",
          align: ""
        },
        {
          prop: "total",
          label: "总计",
          align: "",
          width: "",
          tooltip: "true",
          children: [
            {
              prop: "prop1",
              label: "属性1",
              align: "",
              width: "",
              tooltip: "true"
            },
            {
              type: "operation",
              label: "",
              align: "",
              width: "",
              buttons: [
                {
                  icon: "icon",
                  click: function(scope) {},
                  class: "",
                  hasPermi: ""
                }
              ]
            }
          ]
        }
      ]
      */
    match: {
      type: Array,
      require: true
    },

    /* :pagination="true" 是否分页 */
    ["pagination"]: {
      type: Boolean,
      default: false
    }
  },
  created() {
    //   初始化请求
    this.request(1);
  }
};
</script>
<style lang="scss" scoped></style>
