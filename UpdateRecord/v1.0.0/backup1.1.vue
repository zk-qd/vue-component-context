<template>
  <div>
    <el-table
      :data="datas"
      stripe
      class="table"
      header-cell-class-name="table-header"
    >
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <template v-for="(item, index) in match">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :key="index"
          :align="item.align"
          :width="item.width"
          :show-overflow-tooltip="item.tooltip"
        >
          <el-table-column
            v-for="(citem, cindex) in item.children"
            :prop="citem.prop"
            :label="citem.label"
            :key="cindex"
            :align="citem.align"
            :width="citem.width"
            :show-overflow-tooltip="citem.tooltip"
          >
          </el-table-column>
        </el-table-column>
      </template>
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
//version: 1.1
export default {
  name: "UpdateRecord",
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

        match: [
            {
                prop: 'handlers',
                label: '操作人'
            },
            {
                prop: 'modifyContent',
                label: '更新内容'
            },
            {
                prop: 'lastModifyDate',
                label: '更新时间'
            },
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
