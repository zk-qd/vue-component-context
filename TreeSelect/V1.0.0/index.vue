<template>
<div>
<el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline cmgb10"
          >
            <el-form-item label="监控名称">
              <el-input
                v-model="formInline.name"
                placeholder="监控名称"
                class="w160"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :icon="$gIcons.search"></el-button>
            </el-form-item>
          </el-form>
          <el-select
            v-model="value"
            placeholder="请选择"
            style="width:100%"
            @change="handleCheckAllChange"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <tab-header :menu="menu" :active.sync="active">
            <span slot="final"
              ><el-button type="text" icon="el-icon-refresh"
                >刷新</el-button
              ></span
            >
          </tab-header>
          <div v-show="active == 0">
            <el-tree
              :class="treeHeight"
              style="overflow:auto"
              :data="organizationData"
              ref="organizationData"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps"
            >
            </el-tree>
          </div>
</div>
      
</template>
<script>
import TabHeader from "@/context/TabHeader/v1.0.1";
export default {
  name: "tree_select",
  components: {
    TabHeader,
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      
      value: "",
     
      defaultProps: {
        children: "children",
        label: "label"
      },

      // tab默认选中
      active: "0",
    };
  },
  props:{
      organizationData:{
          type:Array
      },
      options: {type:Array},
      menu:{type:Array},
      treeHeight:{}
  },

  methods: {
    handleCheckAllChange(val) {
      if (val == "全选") {
        this.$refs.organizationData.setCheckedNodes(this.organizationData);
      }
    },
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  }
};
</script>
<style >
.el-form--inline .el-form-item {
    display: inline-block;
     margin-right: 0px; 
    vertical-align: top;
}
.el-form-item {
     margin-bottom: 10px !important; 
}

</style>


