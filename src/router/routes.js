const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        name:"首页",
        component:()=>import("../views/system/Home.vue")
    },
    {
        path:"/add",
        name:"登录页",
        component:()=>import("../views/system/Adduser.vue")
    },
    {
        path:"/userlist",
        name:"用户列表",
        component:()=>import("../views/system/userlist.vue")
    },
];
const stateRoutes = [
    {
        path:"/login",
        name:"登录页",
        component:()=>import("../views/system/Login.vue")
    },
]

export default [
    ...routes,...stateRoutes
]