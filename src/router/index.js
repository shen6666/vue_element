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
    // console.log(to);
    // console.log(from);
    next();
    // if(to.path == "/login"){
    //     next();
    // }else if(to.path=="/"){
    //     next()
    // }else{
    //     console.log("访问了login除外的地址");
    // }
})

export default routers

