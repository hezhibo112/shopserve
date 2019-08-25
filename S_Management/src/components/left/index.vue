<template>
    <div class="left">
        
        <!-- <router-link to="/home/banner">系统首页</router-link>
        <router-link to="/home/classified">分类管理</router-link>
        <router-link to="/home/commodity">商品列表</router-link> 
        <router-link to="/home/evaluate">评论管理</router-link>  -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <span slot="title"><router-link to="/home/banner">系统首页</router-link></span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/home/commodity">商品列表</router-link> </el-menu-item>
          <el-menu-item index="1-2"><router-link to="/home/classified">分类管理</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link to="/home/evaluate">评论管理</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      
    </el-menu>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    created(){

    },
    mounted(){

    }
}
}
</script>
<style scoped lang="scss">

.left{
    width:20%;
    font-size: 16px;
}
.left ul li{
    line-height: 56px;
}
.el-menu-item  a{
    display: inline-block;
    width:190px;
    height: 100%;
}
.el-menu-vertical-demo el-menu{
    width:20%;
}


</style>