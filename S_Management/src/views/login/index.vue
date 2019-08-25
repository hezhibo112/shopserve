<template>
    <div class="wrap">
        <el-form :model="userInfo" ref="userInfo" label-width="70px" class="demo-dynamic">
            <el-form-item
                label="用户名"
                prop="username"
                :rules="[
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ]"
            >
                <el-input type="text" v-model="userInfo.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="password"
                :rules="[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]"
            >
                <el-input type="password" v-model="userInfo.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginForm('userInfo')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  computed: {},
  methods: {
    ...mapActions("login", ["signIn_actions"]),
    
     loginForm(formName){
         let that=this;
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            let {username,password}=this.userInfo;
               await this.signIn_actions({
                username,
                password
              });
              that.$router.push("/home")
          }
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.el-form {
  width: 300px;
  padding: 10px;
  margin: 20px auto;
 border-radius: 10px;
 border: 1px solid #ccc;
  .el-form-item {
    margin: 20px 0;
  }
  .el-button{
    margin-left: 20%;
    width: 100px;
  }
}
</style>
