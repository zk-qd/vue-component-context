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
        :vue="vue"
      ></column-item>
    </el-table>
    <el-pagination
      class="pagination"
      v-if="pageable"
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
  1. 嵌套header  :match
  2. 操作栏按钮 bottoms
  3. 分页  :pageable
  4. 选中 :highlight-current-row @current-change
  5. level: 2 用来format取this的，
  6. vue: vue实例
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
        count: 5,
      },
      ref: "table",
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
  },
  watch: {
    data: {
      handler(nData) {
        this.rows = nData.rows;
        this.datas = nData.datas;
      },
      immediate: true,
      deep: true,
    },
  },
  props: {
    //   接口数据
    /*
        data: {datas: [],rows: 20};
     */
    data: {
      type: Object,
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
          format:(v,i,item)=> {}
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
              label: "",// 有默认值
              align: "", //默认值是居中
              width: "", 
              visible: "" // 只要不等于false，那么就显示
              buttons: [
                {
                  icon: window.$gIcons.find,
                  click: scope=> {},
                  class: "", //blue
                  hasPermi: window.$hasPermi.basic.company.search,//默认值['*:*:*']
                  title: '',
                  titleFormat: function(scope) {} // 格式化title,如有时候同一个查看要显示不同的标题
                }
              ]
            }R
          ]
        }
      ]
      */
    match: {
      type: Array,
      require: true,
    },

    /* :pageable="true" 是否分页 */
    ["pageable"]: {
      type: Boolean,
      default: false,
    },

    // highlight-current-row  开启可选中当前行
    highlightCurrentRow: {
      type: Boolean,
      default: false,
    },
    // 组件的层级
    level: {
      type: Number,
      default: 2,
    },
    vue: {
      type: Object,
    },
    // 初始化加载时是否请求
    immediate: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    //   初始化请求
    this.immediate && this.request(1);
  },
};
</script>
<style lang="scss" scoped></style>
