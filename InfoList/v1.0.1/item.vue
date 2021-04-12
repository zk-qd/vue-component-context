<template>
  <el-col
    v-if="item"
    :span="span || allSpan"
    :xs="24"
    :sm="24"
    :md="span || allSpan"
    :lg="span || allSpan"
    :lx="span || allSpan"
  >
    <span :class="{ [$style.header]: true }" class="header">{{ label }}:</span>
    <span
      :class="$style.content"
      class="content"
      :style="{ 'min-width': `calc(100% - ${maxWidth}px)` }"
    >
      <!-- <el-tooltip
        effect="dark"
        placement="top-start"
        :disabled="!showOverflowTooltip"
      >
        <template slot="content">
          <slot-em v-if="!!vnode" :vnode="vnode"></slot-em>
          <item-em v-else :formatter="formatter" :item="item" :prop="prop" />
        </template> -->
      <slot-em
        v-if="!!vnode"
        :vnode="vnode"
        style="overflow-wrap: anywhere;"
      ></slot-em>
      <item-em
        v-else
        :formatter="formatter"
        style="overflow-wrap: anywhere;"
        :item="item"
        :prop="prop"
      />
      <!-- </el-tooltip> -->
      <template v-if="route">
        <router-link
          :to="route.to"
          v-hasPermi="route.hasPermi || ['*', '*', '*']"
          :class="[$style.link]"
          style="float: right;"
          >{{ route.name }}</router-link
        >
      </template>
    </span>
  </el-col>
</template>
<script>
import ItemEm from "./children/itemEm";
import slotEm from "./children/slotEm";
export default {
  name: "Info_List_item",
  components: { ItemEm, slotEm },
  data() {
    return {
      allSpan: 8,
      item: undefined,
      maxWidth: 300,
    };
  },
  computed: {
    // TODO 判断是否使用了插槽
    vnode: function() {
      let scope = this.$scopedSlots,
        vnodes = scope && scope.default && scope.default({ item: this.item });
      if (vnodes) {
        return this.$createElement("em", vnodes);
      } else {
        return "";
      }
    },
  },
  props: {
    // TODO 单独等分
    span: {
      type: Number,
      default: 0,
    },
    // TODO 字段
    prop: {
      type: String,
    },
    // TODO 标签
    label: {
      type: String,
      default: "",
    },
    // TODO 路由
    route: {
      type: null,
      /*  default() {
        return {
          to: {path: '/industry/basic/company/find/id'},
          hasPermi: ["*", "*", "*"],
          name: '标题'
        };
      }, */
    },
    // TODO 溢出提示
    showOverflowTooltip: {
      type: Boolean,
      default: false,
    },
    // TODO 格式化
    formatter: {
      type: Function,
    },
  },
};
</script>
<style lang="less" module>
// 路由
.link {
  font-size: 13px;
  color: @linkColor;
}

.text {
  padding: 10px 10px;
  line-height: 20px;
  display: inline-block;
}

.header {
  color: var(--var-info-head__color);
  .text;
  text-align: right;
  // color: @headerColor;
  // width: 35%;
  // max-width: 150px;
  width: 100%;
}
.content {
  color: var(--var-info-head__color);
  .text;
  // width: 65%;
  // width: 80%;
  // min-width: calc(100% - 150px);
}
</style>
