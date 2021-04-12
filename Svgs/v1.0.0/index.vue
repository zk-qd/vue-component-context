<template>
  <div class="table-container">
    <h2>使用方法</h2>
    <p>（共{{ SVG_LIST.length }}个图标）</p>
    <p style="line-height: 50px;">
      使用名为component的图标 &lt;svg-icon icon-class=&quot;component&quot;
      /&gt;
      <svg-icon icon-class="component" />
    </p>
    <p style="line-height: 50px;">
      改变图标颜色 &lt;svg-icon icon-class=&quot;component&quot;
      style=&quot;color: red;&quot; /&gt;
      <svg-icon icon-class="component" style="color: red" />
    </p>
    <p style="line-height: 50px;">
      改变图标大小 &lt;svg-icon icon-class=&quot;component&quot;
      style=&quot;width: 30px;height: 30px;&quot; /&gt;
      <svg-icon icon-class="component" style="width: 30px;height: 30px;" />
    </p>
    <br />
    <h2>图标</h2>
    <div class="search-box">
      <el-input
        class="search"
        size="large"
        v-model="keyword"
        clearable
        placeholder="请输入图标名称"
      ></el-input>
    </div>
    <ul>
      <li class="icon-li" v-for="(item, index) in list" :key="index">
        <div class="icon-li-content">
          <svg-icon :icon-class="item" class="svgs-item-custom" />
          <span>{{ item }}</span>
          <p ref="icon-code" style="height: 0;opacity: 0">{{ item }}</p>

          <p @click="copy(index)">
            <el-button icon="el-icon-copy-document" type="primary" size="mini"
              >复制</el-button
            >
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "devolpment_svgs",
  data: function() {
    return {
      keyword: "",
    };
  },
  computed: {
    list() {
      return this.SVG_LIST.filter((item) => {
        return item.indexOf(this.keyword) !== -1;
      });
    },
    ...mapGetters({
      SVG_LIST: "devolpment/SVG_LIST",
    }),
  },
  methods: {
    copy(index) {
      let dom = this.$refs["icon-code"][index];
      DomKit.copyText(dom)
        .then(() => {
          this.$message.success("复制成功");
        })
        .catch(() => {
          this.$message.error("复制失败");
        });
    },
  },
};
</script>

<style scoped>
.example-p {
  height: 45px;
  display: flex;
  align-items: center;
}
.search-box {
  text-align: center;
  margin-top: 10px;
}
.search {
  width: 300px;
}
ul,
li {
  list-style: none;
}
.icon-li {
  display: inline-block;
  padding: 10px;
  width: 120px;
  height: 120px;
}
.icon-li-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon-li-content i {
  font-size: 36px;
  color: #606266;
}
.icon-li-content span {
  margin-top: 10px;
  color: #787878;
}
.svgs-item-custom {
  width: 35px;
  height: 35px;
}
</style>
