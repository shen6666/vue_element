import Vue from "vue";
import vueRouter from "vue-router";
import routes from "./routes";
console.log(routes);
Vue.use(vueRouter);
const routers = new vueRouter({
    routes,
    mode:"history"
})
routers.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);
    if(to.path != "/login" && !sessionStorage.getItem("token")){
        console.log("没有权限");
        next({
            path:"/login"
        });
    }else{
        if(to.path != "/login" && sessionStorage.getItem("token")){
            next();
        }else if(to.path == "/login"){
            next();
        }
    } 
})
export default routers

