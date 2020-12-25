<template>
  <!--最外层-->
  <div>
    <div :class="visible ? 'show' : 'hidde'">
      <dl>
        <dt>{{ title }}</dt>
        <dd ref="bussinessTypeRef" id="menu">
          <a
            href="javascript:void(0);"
            @click="handleChange(-1, -1)"
            :class="{ active: active === -1 }"
            >全部</a
          >
          <a
            href="javascript:void(0);"
            v-for="(item, index) in projectType"
            :key="item.dictValue"
            :class="{ active: active === item.dictValue }"
            @click="handleChange(index, item.dictValue, item)"
            >{{ item.dictLabel }}</a
          >
        </dd>
        <i
          class="unfold"
          @click="visible = !visible"
          v-show="visibleHeight > 40"
        >
          <i
            :class="visible ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"
          ></i>
          <!-- <Icon :type="visible ? 'chevron-down' : 'chevron-up'"></Icon> -->
        </i>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  /*
    详情列表
    - 数据项
    1.  菜单栏数据数组
    2. 菜单栏标题
    

    -传给父组件getChildMenuData点击的菜单栏值

     */
  name: "MenuBar",
  data() {
    return {
      visible: false,
      visibleHeight: null,
    };
  },
  props: {
    projectType: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Number,
      default: -1,
    },
  },
  watch: {},
  methods: {
    handleChange(index, dictValue, item) {
      if (this.active != dictValue) {
        this.active = dictValue;
        this.$emit("update:active", this.active);
        this.$emit("change", dictValue, item);
      }
    },
  },
  created() {
    this.$nextTick(function() {
      let cur = this.$refs.bussinessTypeRef;
      if (cur) {
        this.visibleHeight = cur.clientHeight;
      }
    });
  },
};
</script>
<style scoped>
.show {
  height: auto;
  border-bottom: 1px dashed #ddd;
}
.hidde {
  height: 40px;
  overflow: hidden;
  border-bottom: 1px dashed#ddd;
  margin: 7px 0;
}
.list-filter {
  position: relative;
  margin-bottom: 20px;
  font-size: 14px;
}
.active {
  color: #409eff;
  /* border-bottom: 1px solid #409EFF; */
}
dl {
  overflow: hidden;
}

dt {
  float: left;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  color: #aaa;
  padding: 0 20px 0px 15px;
}

dd {
  margin-left: 30px;
  float: left;
  width: 85%;
  line-height: 40px;
}
.unfold {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
  font-style: normal;
  vertical-align: middle;
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
a {
  color: #333;
  display: inline-block;
  margin-right: 20px;
  padding: 0 5px;
  text-decoration: none;
  line-height: 2em;
  z-index: 0;
}

a:hover {
  color: #409eff;
}
</style>
