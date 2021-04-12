<template>
  <div>
    <el-table
      :data="data"
      border
      class="table"
      header-cell-class-name="table-header"
    >
      <el-table-column
        v-for="(item, index) in match"
        :prop="item.prop"
        :label="item.label"
        :key="index"
        :align="item.align"
      >
        <el-table-column
          v-for="(citem, cindex) in item.children"
          :prop="citem.prop"
          :label="citem.label"
          :key="cindex"
          :formatter="citem.formatter"
        >
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "TotalTable",
  data() {
    return {};
  },
  methods: {},
  props: {
    //   接口数据

    data: {
      type: Array,
      default: () => []
    },
    /*
 match: [
        {
          label: "总计",
          align: "center",
          children: [
            { label: "线路名称", align: "center", prop: "lineName" },
            {
              prop: "cars",
              label: "营运车辆"
            },
            {
              prop: "upTrips",
              label: "上行趟次"
            },
            {
              prop: "downTrips",
              label: "下行趟次"
            },
            {
              prop: "totalTrips",
              label: "总计趟次"
            }
          ]
        }
      ],
      totalData: [
        {
          lineName: "218路",
          cars: "9台",
          upTrips: "7趟",
          downTrips: "7趟",
          totalTrips: "14趟"
        }
      ]
    };
     */
    match: {
      type: Array,
      require: true
    }
  }
};
</script>
<style lang="scss" scoped></style>
