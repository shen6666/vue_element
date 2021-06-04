<!--  -->
<template>
<div class='div'>
    <div class="form">
        <h2>用户登录</h2>
        <el-form ref="formData" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input el-input v-model="form.username">
                    <template slot="append">
                        <a href="/add" style="text-decoration:none;color:red">没有账号？去注册</a>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button @click="login" size="medium " type="primary">登录</el-button>
        </el-form>
    </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { axiosfn } from "../../api/system"
import axios from "axios";
import NProgress from 'nprogress'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    form:{
        username:"",
        password:"",
    },
    rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    async login(){
        NProgress.start();
        let next = null;
        this.$refs["formData"].validate((valid) => {
          if (valid) {
            next = true
          } else {
            next = false;
            return;
          }
        });
        if(next == true){
            let res = await axios.get(`http://localhost:3000/login?username=${this.form.username}&password=${this.form.password}`);
            console.log(res);
            if(res.data.code == 200){
                console.log("成功");
                this.$notify({
                  title: '登录成功',
                  message: '等待进入主界面',
                  type: 'success'
                });
                sessionStorage.setItem('token',"成功");
                setTimeout(()=>{
                    this.$router.push("/index")
                },2000)

            }else{
                this.$notify({
                  title: '登录失败',
                  message:res.data.msg,
                  type: 'error'
                });
            }
        }
        NProgress.done()
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style>

</style>