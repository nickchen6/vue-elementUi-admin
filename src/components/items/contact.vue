<template>
    <div >
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
                        <el-row style="padding: 15px">
                            <el-col  style="margin-left: 50px;font-size: 20px;display: flex">
                                <div  >
                                    <img src="static/img/picture/phone.png"  style="width: 20px; height: 20px; object-fit: cover;">
                                </div>
                                <div style="width: 100px">
                                    {{lang.homepage.phone}}
                                </div>
                                <div>
                                <span style="font-size: 20px;margin-left: 10px">
                                    13988888888
                                </span>
                                </div>
                            </el-col>
                        </el-row>
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
                        <el-row style="padding: 15px">
                            <el-col  style="margin-left: 50px;font-size: 20px;display: flex">
                                <div >
                                    <img src="static/img/picture/tiktok.png"  style="width: 20px; height: 20px; object-fit: cover;">

                                </div>
                                <div style="width: 100px">
                                    Tiktok
                                </div>
                                <div>
<!--                                    <el-link href="https://www.tiktok.com/@cheweidiban?lang=zh-Hans" target="_blank" style="font-size: 20px;margin-left: 10px"> https://www.tiktok.com/@cheweidiban?lang=zh-Hans </el-link>-->
                                    <p><a href="https://www.tiktok.com/@cheweidiban?lang=zh-Hans" style="font-size: 20px;margin-left: 10px;color: black">https://www.tiktok.com/@cheweidiban?lang=zh-Hans</a> </p>
                                </div>
                            </el-col>
                        </el-row>
<!--                        <el-row style="padding: 15px">-->
<!--                            <el-col  style="margin-left: 50px;font-size: 20px;display: flex">-->
<!--                                <div >-->
<!--                                    <img src="static/img/picture/email.png"  style="width: 20px; height: 20px; object-fit: cover;">-->

<!--                                </div>-->
<!--                                <div style="width: 100px">-->
<!--                                    {{lang.homepage.email}}-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                <span style="font-size: 20px;margin-left: 10px">-->
<!--                                antujiancaimaoyi@gmail.com-->
<!--                                </span>-->
<!--                                </div>-->
<!--                            </el-col>-->
<!--                        </el-row>-->
                    </el-card>
                </el-col>

            </el-row>
            <el-row   type="flex" justify="center" >
                <div style="margin-top: 15px" >
                    <span>Copyright © 2025 {{lang.title}} </span>
                </div>
            </el-row>
        </div>
    </div>
</template>

<script>

import langpack from "../../lang";
    export default {
        components:{},
        computed:{
            lang(){
                return langpack[this.language]
            },
            language(){
                return this.$store.state.language;
            },
        },
        created(){
            var a = window.location.hash.replace('#/','');
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style scoped>

</style>
