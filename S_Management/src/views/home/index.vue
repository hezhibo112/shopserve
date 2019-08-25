<template>
    <div>
        <Head></Head>
        <div class="wrap">
            <Left></Left>
            <router-view></router-view>
        </div>
        
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
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .wrap{
        width:100%;
        height: 100%;
        display: flex;

        .left{
            width:15%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .page{
            flex: 1;
            font-size: 16px;
        }
    }
</style>