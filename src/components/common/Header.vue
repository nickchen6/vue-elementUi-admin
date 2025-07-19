<template>
    <div class="header" >
       <div class=" status"  >
           <el-row>
               <el-col :span="5">
                   <div class="logoimg"></div>
                   <div class="logo">{{lang.title}}</div>
               </el-col>
               <el-col :span="15" style="display: flex; justify-content: center; align-items: center">
                   <el-menu :default-active="onRoutes"
                            mode="horizontal"
                            style="background: transparent;margin-left: -140px;"
                            @select="handleSelect"
                            router
                   >
                       <el-menu-item v-for="(value, key) in lang.nav"
                                     :key="key"
                                     :index="key" style="font-size: 20px;text-align: center;margin-top: 7px">
                           <!--               <template slot="title"><i class="el-icon-date"></i>{{key}}</template>-->
                           <!--               <el-menu-item v-for="(detail,item) in value" :index="item">{{detail}}</el-menu-item>-->
                           {{value}}
                       </el-menu-item>
                   </el-menu>
               </el-col>
               <el-col :span="4">
                   <div class="switch">
                       <a @click="switchzh">中文</a>/
                       <a @click="switchen">English</a>
                   </div>
               </el-col>
           </el-row>
       </div>
    </div>
</template>
<script>
    import langpack from '../../lang/index.js';
    export default {
        created(){
            // this.$store.state.language
            // $store代表的是vuex的实例，
        },
        data() {
            return {
                name: 'linxin',
                index:3,
            }
        },
        computed:{
            onRoutes(){
                console.log(this.$route.path);
                // var a = this.$route.path.replace('/','');
                // console.log(a);
                // return a
                return this.$route.path;
            },
             lang(){
                return langpack[this.language]
            },
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            },
            language(){
                return this.$store.state.language;
            },
        },
        methods:{
            switchzh(){
                this.$store.commit('switchzh');
            },
            switchen(){
                this.$store.commit('switchen');
            },
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }

            },
            handleSelect(key, keyPath) {
                console.log(key,keyPath)
            }
        }
    }
</script>
<style scoped>
    .header {
        box-sizing: border-box;
        width: 100%;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background: #ff9d02;
    }
    .switch {
        float: right;
        line-height: 70px;
        font-size: 22px;
        padding-right:100px;
        color: #fff;
    }
    .switch>a {
        cursor: pointer;
    }
    .switch>a:hover {
        color: #58B7FF;
    }
    .status {
        padding-left: 30px;
    }

    .header .logoimg{
        float: left;
        width: 70px;
        height: 70px;
        background-image: url(../../../static/img/antuLogo1.jpg);
        background-size: cover;
        border-radius: 34px;
    }
    .header .logo{
        padding-left: 30px;
        float: left;
        text-align: center;
    }
</style>
