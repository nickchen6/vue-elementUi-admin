<template>
    <div style="padding: 15px;margin-top: 20px" >
        <el-row   type="flex" justify="center">
            <div  >
                <h1>{{lang.homepage.contact}} </h1>
            </div>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top: 20px">
            <el-col :span="17">
                <el-card  style="padding: 10px;border-radius: 30px;" >
                    <el-row style="padding: 15px">
                        <el-col  style="margin-left: 50px;font-size: 20px;display: flex">
                            <div  >
                                <img src="static/img/picture/location.png"  style="width: 20px; height: 20px; object-fit: cover;">
                            </div>
                            <div style="width: 100px">
                                {{lang.homepage.address}}
                            </div>
                            <div>
                                <span style="font-size: 20px;margin-left: 10px">
                                {{lang.footer.address}}
                            </span>
                            </div>
                        </el-col>
                    </el-row>
<!--                    <el-row style="padding: 15px">-->
<!--                        <el-col  style="margin-left: 50px;font-size: 20px;display: flex">-->
<!--                            <div  >-->
<!--                                <img src="static/img/picture/phone.png"  style="width: 20px; height: 20px; object-fit: cover;">-->
<!--                            </div>-->
<!--                            <div style="width: 100px">-->
<!--                                {{lang.homepage.phone}}-->
<!--                            </div>-->
<!--                            <div>-->
<!--                                <span style="font-size: 20px;margin-left: 10px">-->
<!--                                    13988888888-->
<!--                                </span>-->
<!--                            </div>-->
<!--                        </el-col>-->
<!--                    </el-row>-->
                    <el-row style="padding: 15px">
                        <el-col  style="margin-left: 50px;font-size: 20px;display: flex">
                            <div >
                                <img src="static/img/picture/email.png"  style="width: 20px; height: 20px; object-fit: cover;">

                            </div>
                            <div style="width: 100px">
                                {{lang.homepage.email}}
                            </div>
                            <div>
                                <span style="font-size: 20px;margin-left: 10px">
                                antujiancaimaoyi@gmail.com
                                </span>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>

        </el-row>
        <el-row   type="flex" justify="center" >
            <div style="margin-top: 15px" >
                <span>Copyright © 2025 {{lang.title}} </span>
            </div>
        </el-row>
    </div>
</template>
<script>
import langpack from '../../lang/index.js';
export default {
    created(){
    },
    data() {
        return {
        }
    },
    computed:{
        onRoutes(){
            console.log(this.$route.path);
            return this.$route.path;
        },
        lang(){
            return langpack[this.language]
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
    }
}
</script>
<style scoped>
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-form-item__label {
    text-align: left !important;
    justify-content: flex-start !important; /* 如果 label 是 flex 布局 */
}
</style>
