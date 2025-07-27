<template>
    <div class="table">
        <el-row type="flex" justify="center" style="margin-top: 30px" >
            <el-col :span="17">
                <el-card  style="padding: 10px;border-radius: 30px;" >
                    <el-row   type="flex" justify="left">
                        <div  >
                            <h1>{{lang.measureAndInstall.measure}} </h1>
                        </div>
                    </el-row>
                    <el-row>
                        <video controls  style="border-radius: 30px;margin-top: 20px;width: 100%">
                            <source src="static/video/measure.mp4" type="video/mp4">
                            您的浏览器不支持 HTML5 视频标签。
                        </video>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center" style="margin-top: 30px" >
            <el-col :span="17">
                <el-card  style="padding: 10px;border-radius: 30px;" >
                    <el-row   type="flex" justify="left">
                        <div  >
                            <h1>{{lang.measureAndInstall.install}} </h1>
                        </div>
                    </el-row>
                    <el-row>
                        <video controls  style="border-radius: 30px;margin-top: 20px;width: 100%">
                            <source src="static/video/install.mp4" type="video/mp4">
                            您的浏览器不支持 HTML5 视频标签。
                        </video>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <v-footer></v-footer>
    </div>
</template>

<script>
import langpack from "../../lang";
import vFooter from "../common/Footer.vue"
export default {

    computed:{
        lang(){
            return langpack[this.language]
        },
        language(){
            return this.$store.state.language;
        },
    },
    components:{
        vFooter
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
