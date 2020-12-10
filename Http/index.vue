<template>
  <div class="table-container">
    <el-form
      :model="query"
      :inline="true"
      ref="query"
      :label-width="$gForms.labelWidth"
    >
      <el-form-item label="请求方式">
        <el-select
          v-model="query.method"
          placeholder="请选择请求方式"
          class="w100"
        >
          <el-option
            v-for="item in methodOptions"
            :key="item.dictValue"
            :value="item.dictValue"
            :label="item.dictLabel"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="域">
        <el-select v-model="query.origin" placeholder="请选择" class="w300">
          <el-option
            v-for="item in originOptions"
            :key="item.dictValue"
            :value="item.dictValue"
            :label="item.dictLabel"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="前缀">
        <el-select v-model="query.prefix" placeholder="请选择" class="w100">
          <el-option
            v-for="item in prefixOptions"
            :key="item.dictValue"
            :value="item.dictValue"
            :label="item.dictLabel"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="路径">
        <el-input
          v-model="query.path"
          placeholder="请输入路径(如：'/driver/queryDrivers')"
          class="w500"
        ></el-input>
      </el-form-item>
      <br />
      <el-form-item label="超时">
        <el-input
          v-model="query.timeout"
          placeholder="请输入"
          class="w100"
        ></el-input>
      </el-form-item>
      <el-form-item label="是否选择token">
        <el-checkbox v-model="query.token">TOKEN</el-checkbox>
      </el-form-item>
      <br />
      <el-form-item label="传入JSON类型的参数">
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 100 }"
          placeholder="请输入参数(如{name: 'zhangsan',gender: '0'})"
          v-model="query.data"
          class="w250 "
        >
        </el-input>
      </el-form-item>
      <el-form-item label="传入非JSON类型参数">
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 100 }"
          placeholder="请输入参数(如{name: 'zhangsan',gender: '0'})"
          v-model="query.params"
          class="w250 "
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="$gIcons.search" @click="handleSearch"
          >提交</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="default" :icon="$gIcons.reset" @click="handleDefault"
          >重置</el-button
        >
      </el-form-item>
      <br />
      <el-form-item label="结果">
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 100 }"
          placeholder=""
          v-model="result"
          class="w600"
        >
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import http from "./http";
import { getToken } from "@/utils/auth";
export default {
  name: "Http",
  data() {
    return {
      methodOptions: [
        { dictValue: "GET", dictLabel: "GET" },
        { dictValue: "POST", dictLabel: "POST" }
      ],
      originOptions: [
        {
          dictValue:
            process.env.VUE_APP_OUTER_ORIGIN + process.env.VUE_APP_BASE_API,
          dictLabel:
            process.env.VUE_APP_OUTER_ORIGIN + process.env.VUE_APP_BASE_API
        }
      ],
      prefixOptions: [
        {
          dictValue: "industry",
          dictLabel: "industry"
        }
      ],
      query: {
        method: "GET",
        origin: process.env.VUE_APP_OUTER_ORIGIN + process.env.VUE_APP_BASE_API,
        prefix: "industry",
        path: "",
        params: null,
        data: null,
        token: true,
        timeout: 10000
      },
      result: ""
    };
  },
  methods: {
    handleSearch() {
      let headers = {};
      if (this.query.token) {
        headers = { token: getToken() };
      }
      http({
        url: this.query.origin + '/' + this.query.prefix + "/" + this.query.path,
        async: true,
        method: this.query.method,
        params: this.query.params,
        data: this.query.data,
        responseType: "json",
        headers: headers,
        timeout: this.query.timeout
      })
        .then(res => {
          this.result = JSON.stringify(res.target.response);
        })
        .catch(err => {
          this.result = err;
        });
    },
    handleDefault() {
      this.resetForm("query");
    }
  },
  created() {}
};
</script>
<style scoped="less"></style>
