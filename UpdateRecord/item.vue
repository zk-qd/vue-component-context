<template>
  <el-table-column
    v-if="item.type == 'index'"
    :type="item.type"
    :label="item.label || '序号'"
    :width="item.width"
    :align="item.align"
  ></el-table-column>
  <el-table-column
    v-else-if="item.type === 'operation' && item.visible"
    :label="item.label || '操作'"
    :width="item.width || '200'"
    :align="item.align || 'center'"
  >
    <template slot-scope="scope">
      <el-button
        v-for="(bItem, index) in item.buttons"
        :key="index"
        type="text"
        :icon="bItem.icon"
        @click="bItem.click && bItem.click.call(vue, scope)"
        :class="bItem.class || 'blue'"
        v-hasPermi="bItem.hasPermi || ['*:*:*']"
        >{{
          (bItem.titleFormat && bItem.titleFormat(scope)) || bItem.title
        }}</el-button
      >
    </template>
  </el-table-column>
  <el-table-column
    v-else-if="!item.type"
    :prop="item.prop"
    :label="item.label"
    :align="item.align"
    :width="item.width"
    :formatter="item.format"
    :show-overflow-tooltip="item.tooltip"
  >
    <template slot-scope="scope">
      {{
        item.format
          ? item.format.call(vue, scope.row[item.prop], scope.$index, scope.row)
          : scope.row[item.prop]
      }}
    </template>
    <column-item
      v-for="(item, index) in item.children"
      :item="item"
      :key="index"
      :level="level"
      :vue="vue"
    ></column-item>
  </el-table-column>
</template>
<script>
export default {
  name: "ColumnItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      require: true,
    },
    vue: {
      type: Object,
    },
    level: {
      type: Number,
    },
  },
  methods: {},
};
</script>
