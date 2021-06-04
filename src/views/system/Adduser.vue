<!--  -->
<template>
  <div class="">
    <div class="form">
      <h2>用户注册!</h2>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-button
          @click="adduser"
          :disabled="btnshow"
          size="medium "
          type="primary"
          >注册</el-button
        >
      </el-form>
    </div>
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
      btnshow: false,
      form: {
        username: "",
        password: "",
        name: "",
        sex: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async adduser() {
      this.btnshow = true;
      let res = await axios.post(`http://localhost:3000/add`, this.form);
      console.log(res);
      if (res.data.code == 200) {
        this.$notify({
          title: "注册成功",
          type: "success",
        });
        this.form = {username: "",password: "",name: "",sex: "",};
        // setTimeout(()=>{
        //     this.$router.push("/login")
        // },2000)
      } else {
        this.$notify({
          title: "注册失败",
          message: res.data.msg,
          type: "error",
        });
      }
      this.btnshow = false;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped></style>
