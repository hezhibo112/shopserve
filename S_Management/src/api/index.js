import {axios} from "@/utils/request";
let bash="/api"
export default {
    //管理员登陆接口
    Login:(data)=>axios.post(bash+"/admin/login",{...data}),
    //获取所有商品
    allShop:()=>axios.get(bash+"/shop/allShop"),
    //添加商品分类
    addType:(data)=>axios.get(bash+"/shop/addType",{...data}),
    //添加商品子分类
    addCategory:(data)=>axios.get(bash+"/shop/addCategory",{...data}),
    //添加商品接口
    addShop:(data)=>axios.post(bash+"/shop/addShop",{...data}),
    //获取商品分类
    getType:()=>axios.get(bash+"/shop/getType"),
    //获取商品子分类
    getCategory:()=>axios.get(bash+"/shop/getCategory"),
    //上传图片
    upimage:(data)=>axios.post(bash+"/upimage",{...data}),
    //添加首页轮播图片
    addBanner:(data)=>axios.post(bash+"/home/addBanner",{...data}),
}