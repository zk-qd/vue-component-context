<template>
  <div class="block-container">
    <info-list :data="item">
      <info-list-item
        prop="name"
        label="姓名"
        :show-overflow-tooltip="true"
      ></info-list-item>
      <info-list-item
        prop="age"
        label="年龄"
        :formatter="ageFormat"
        :show-overflow-tooltip="true"
      ></info-list-item>
      <info-list-item prop="sex" label="性别" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{ dictTranslate(sexOptions, scope.item.sex) }}
        </template>
      </info-list-item>
      <info-list-item
        prop="job"
        label="职业"
        :show-overflow-tooltip="true"
      ></info-list-item>
      <info-list-item prop="file" label="附件" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <div>
            <span>{{ scope.item.file.name }}</span>
            <span>{{ scope.item.file.size }}</span>
            <span>{{ scope.item.file.url }}</span>
          </div>
        </template>
      </info-list-item>
    </info-list>
  </div>
</template>
<script>
import InfoListItem from "../item";
import InfoList from "../index";
export default {
  components: {
    InfoListItem,
    InfoList,
  },
  data() {
    return {
      item: {
        name: "张三",
        age: "13",
        sex: "1",
        job: "学生",
        file: {
          name: "文件名称",
          size: "100kb",
          url: "路径",
        },
      },
      sexOptions: [
        {
          dictLabel: "男",
          dictValue: "1",
        },
        {
          dictLabel: "女",
          dictValue: "2",
        },
      ],
    };
  },
  created() {},
  methods: {
    ageFormat(value, item) {
      return value + "岁";
    },
  },
};
</script>
