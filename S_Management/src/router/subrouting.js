const {
    Banner,
    Commodity,
    Classified,
    Evaluate,
}=require("@/views/index"); //首页子视图
const subrouting=[
    {//首页banner
        path:"banner",
        components:Banner,
        meta:{
            title:"首页banner",
        }
    },
    {//商品列表
        path:"commodity",
        components:Commodity,
        meta:{
            title:"商品列表",
        }
    },
    {//分类管理
        path:"classified",
        components:Classified,
        meta:{
            title:"分类管理",
        }
    },
    {//评论管理
        path:"evaluate",
        components:Evaluate,
        meta:{
            title:"评论管理",
        }
    }
]

export  {
    subrouting
}