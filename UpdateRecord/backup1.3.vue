<template>
  <div>
    <el-table
      :data="datas"
      stripe
      class="table"
      header-cell-class-name="table-header"
      :ref="ref"
      :highlight-current-row="highlightCurrentRow"
      @current-change="handleCurrentChange"
    >
      <column-item
        v-for="(item, index) in match"
        :item="item"
        :key="index"
        :level="level"
        :format="format(item, index)"
      ></column-item>
    </el-table>
    <el-pageable
      class="pageable"
      v-if="pageable"
      background
      layout="total, prev, pager, next, jumper"
      :current-page="query.index"
      :page-size="query.count"
      :total="rows"
      @current-change="request"
    ></el-pageable>
  </div>
</template>
<script>
// version: 1.2

/* 
  功能： 
  1. 嵌套header  :match
  2. 操作栏按钮 bottoms
  3. 分页  :pageable
  4. 选中 :highlight-current-row @current-change
  5. level: 2 用来format取this的，
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
      },
      ref: "table"
    };
  },
  methods: {
    /* 
      @request='handleRequest'
    
     */
    request(val) {
      this.$set(this.query, "index", val);
      this.$emit("request", this.query);
    },
    /* 
      设置选中当前行
    */
    setCurrentRow(row) {
      this.$refs[this.ref].setCurrentRow(row);
    },
    /* 
      手动选中可触发回调
    */
    handleCurrentChange(...args) {
      this.$emit("current-change", ...args);
    },
    format(item, index) {
      let thisArg = this,
        level = this.level;
      while (level > 0) {
        level--;
        thisArg = thisArg.$parent;
      }
      return item.format && item.format.bind(thisArg);
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
                  hasPermi: "window.$hasPermi.basic.company.search"
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

    /* :pageable="true" 是否分页 */
    ["pageable"]: {
      type: Boolean,
      default: false
    },

    // highlight-current-row  开启可选中当前行
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    // 组件的层级
    level: {
      type: Number,
      default: 2
    },
  },
  created() {
    //   初始化请求
    this.request(1);
  }
};
</script>
<style lang="scss" scoped></style>
