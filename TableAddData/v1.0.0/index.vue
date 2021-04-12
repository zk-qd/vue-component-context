<template>
  <div>
    <div class="addButton">
      <el-button
        type="primary"
        @click="handleAdd()"
        :icon="$gIcons.insert"
        slot="button"
        v-if="!disable"
        >添加一行</el-button
      >
    </div>
    <el-form :model="formData" :rules="rulesName" ref="form">
      <el-table :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column
          align="center"
          v-for="(item, index, key) in columns"
          :item="item"
          :key="key"
          :index="index"
          :label="item.label"
          :disabled="disable"
        >
          <template slot-scope="scope">
            <el-form-item
              :prop="propName + '.' + scope.$index + '.' + item.prop"
              :rules="rulesName[item.prop]"
              style="width: 100% !important;"
            >
              <el-input
                v-model="scope.row[item.prop]"
                :disabled="disable"
                v-if="item.type == 'input'"
                placeholder="请输入"
              ></el-input>
              <el-select
                clearable
                v-model="scope.row[item.prop]"
                v-if="item.type == 'select'"
                :disabled="disable"
                placeholder="请选择"
              >
                <el-option
                  v-for="items in item.options()"
                  :key="items.dictValue"
                  :value="items.dictValue"
                  :label="items.dictLabel"
                ></el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" v-if="!disable">
          <template slot-scope="scope">
            <el-button
              type="text"
              :icon="$gIcons.delete"
              class="red"
              @click="handleDelete(scope)"
              v-hasPermi="hasPermi"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>
<script></script>
<script>
import basic from "@/mixins/operate/basic";
export default {
  name: "TableAddData",
  mixins: [basic],
  data() {
    return {
      new_date_json: {}, //数据结构
    };
  },

  created() {},

  methods: {
    //删除
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
      this.$message({
        message: "删除成功！",
        type: "success",
      });
    },
    handleAdd() {
      var addDataJson = {};
      this.new_date_json = this.columns.map((item) => item.prop);
      this.new_date_json.forEach((element) => {
        addDataJson[element] = null;
      });
      this.tableData.push(addDataJson);
    },
    // 校验数据
    validateForm() {
      let flag = null;
      this.$refs["form"].validate((valid) => {
        if (valid) {
          flag = true;
        } else {
          flag = false;
        }
      });
      return flag;
    },
  },
  props: {
    //表头
    /*    {
          prop: "name",
           label: "字段类型",
           type: "select",//input/select
            options: value => {
         return this.exchangeFieldType;//下拉菜单
          }
      },*/
    columns: {
      type: Array,
      required: true,
    },
    //表格数据
    tableData: {
      type: Array,
      required: true,
    },
    //是否显示
    disable: {},
    formData: {
      type: Object,
    },
    //校验名称
    rulesName: {
      // type:String,
      required: true,
    },
    hasPermi: {
      type: Array,
      default: () => ["*:*:*"],
    },
    propName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.el-tag--small {
  padding: 0 16px !important;
  margin: 0 5px;
}
.addButton {
  position: absolute;
  right: 30px;
  top: 25px;
  transform: translateY(-50%);
  z-index: 999;
}
</style>

<style lang="less">
.tag {
  position: absolute;
  top: 15px;
  left: 150px;
}
</style>
