import api from "@/api/"
const login = {
    namespaced: true,
    state: {
        //用户信息
        userInfo:{}
    },
    getters: {
        
    },
    mutations: {
        //登录
        signIn_mutations(state,data){
            state.userInfo=data;
        }
    },
    actions:{
        //登录
        async signIn_actions({commit},data){
            let userInfo=await api.Login(data);
            commit("signIn_mutations",userInfo)
        }
    }
}

export default login;