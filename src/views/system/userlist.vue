<!--  -->
<template>
  <div class="">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="warning"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改的弹框 -->
    <el-dialog
      title="修改用户信息"
      :close-on-click-modal="false"
      :visible.sync="editshow"
      width="30%"
    >
      <el-form :inline="false" :model="formData" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formData.username" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="formData.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formData.sex" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editshow = false">取 消</el-button>
        <el-button type="primary" @click="editOk">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      tableData: [], //table的数据
      editshow: false, //弹框显示
      formData: {
        id: null,
        username: "",
        name: "",
        sex: "",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   获取table数据
    async getList() {
      let res = await axios.get(`http://localhost:3000/select`);
      this.tableData = res.data;
      console.log(this.tableData);
    },
    // 修改按钮的点击事件
    handleEdit(index, row) {
      this.editshow = true;
      this.formData = {
        id: row.id,
        username: row.username,
        name: row.name,
        sex: row.sex,
      };
    },
    // 删除按钮的点击事件
    async handleDelete(index, row) {
      let res = await axios.get(`http://localhost:3000/del?id=${row.id}`);
      if (res.data.code == 200) {
        this.$notify({
          title: "删除成功",
          type: "success",
        });
      } else {
        this.$notify.error({
          title: "删除失败",
          type: "success",
        });
      }
      this.getList();
    },

    // 弹框的确认按钮点击事件
    async editOk() {
      let res = await axios.post(`http://localhost:3000/update`, this.formData);
      if (res.data.code == 200) {
        this.$notify({
          title: "修改成功",
          type: "success",
        });
        this.editshow = false;
      } else {
        this.$notify.error({
          title: "修改失败",
          type: "success",
        });
      }
      this.getList();
    },

    // 新增用户
    adduser() {
      console.log("add");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style></style>
