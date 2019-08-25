//登录
const Login=require("./login/");
// **************//
//首页
const Home=require("./home/")
//首页子路由
//首页banner
const Banner=require("./home/children/banner/")
//商品列表
const Commodity=require("./home/children/commodity/")
//分类管理
const Classified=require("./home/children/classified/")
//评论管理
const Evaluate=require("./home/children/evaluate/")



export  {
    Home,
    Login,
    Banner,
    Commodity,
    Classified,
    Evaluate

}