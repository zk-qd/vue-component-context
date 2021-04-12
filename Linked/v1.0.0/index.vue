<template>
  <el-autocomplete
    class="w250 mgr10"
    :value="value"
    @input="handleInput"
    @select="handleSelect"
    :fetch-suggestions="handleQuery"
    :placeholder="placeholder"
    clearable
    :disabled="disabled"
    :size="size"
  ></el-autocomplete>
</template>
<script>
/* 封装element的关联查询input 
说明: 该组件只能用名称查询不能用id查询，如果需要用id查询那么就不能使用该组件
*/
export default {
  name: "LinkedList",
  data() {
    return {};
  },
  props: {
    /*

     <linked-list
              class="w250 mgr10"
              v-model="query.lineName"
              placeholder="请输入线路名称"
              :list="lineNameList"
            />

            */
    value: {
      type: null,
      required: true
    },

    placeholder: {
      type: String
    },
    // 默认为静态数据
    type: {
      type: String,
      default: "static"
      //  static dynamic
    },
    // type = static 静态数据
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    // type = dynamic 动态数据
    request: {
      type: Function,
      default: () => {
        return () => {
          Promise.resolve([]);
          // LinkedList 数据格式都是 [{value: '',id: ''}] 只是对于LinkedList只有value有作用
         };
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 大小
    size: {
      type: String,
      default: "small"
    }
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    handleSelect(item) {
      this.$emit("select", item);
    },
    // 提示
    handleQuery(queryString, cb) {
      if (this.type === "static") {
        // 静态数据
        var list = this.list;
        var results = queryString
          ? list.filter(this.createFilter(queryString))
          : list;
        // 调用 callback 返回建议列表的数据
        cb(results);
      } else if (this.type === "dynamic") {
        // 静态数据
        this.request().then(list => {
          var results = queryString
            ? list.filter(this.createFilter(queryString))
            : list;
          // 调用 callback 返回建议列表的数据
          cb(results);
        });
      }
    },
    createFilter(queryString) {
      return station => {
        return (
          // 表示必须是开头
          station.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    }
  }
};
</script>
