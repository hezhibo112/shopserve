import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const {Home,Login} =require("@/views/") 
const {subrouting}=require("./subrouting")


const router=new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/login"
        },
        {
            path:"/login",
            components:Login
        },
        {
            path:"/home",
            components:Home,
            children:subrouting
        }
    ]
})

export default router;