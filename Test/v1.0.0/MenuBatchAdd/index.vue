<template>
  <div :class="$style.container">
    <p>共有{{ total }}个菜单</p>
    <el-button
      type="primary"
      @click.once.prevent="
        handleInsertMenu(menu);
        $message.warning('开始添加菜单');
        disabled = true;
      "
      :icon="$gIcons.insert"
      :disabled="disabled"
      >批量添加菜单</el-button
    >
  </div>
</template>
<script>
import menu from "./tool/menu/ucar.json";
import { addMenu } from "@/network/system/menu";
/** 
 * 可以添加任意级别开始的菜单，最外层只需要有parentId即可
 */
export default {
  name: "test_menu_batch_add",
  data() {
    return {
      menu: menu,
      count: 0,
      total: 0,
      disabled: false,
    };
  },
  methods: {
    request(params) {
      // 请求添加菜单接口
      params = { ...params };
      delete params.children;
      return addMenu(params);
    },
    handleInsertMenu(menu) {
      menu.forEach((item) => {
        //   只有等父菜单添加完毕才会添加子菜单
        this.request(item)
          .then((res) => {
            let { menuId } = res.data;
            if (item.children && item.children.length) {
              // 如果存在子菜单 才会往下递归
              item.children.forEach((item) => (item.parentId = menuId));
              this.handleInsertMenu(item.children);
            }
            if (++this.count == this.total)
              this.$message.success("全部添加完成");
          })
          .catch(() => {
            console.log("添加失败", JSON.stringify(item));
          });
      });
    },
    statTotal(menu) {
      menu.forEach((item) => {
        this.total++;
        item.children && this.statTotal(item.children);
      });
    },
  },
  created() {
    //   获取总数
    this.statTotal(this.menu);
  },
};
</script>
<style lang="less" module>
.container {

}
</style>
