<template>
    <div >
        <el-row>
            <el-col :span="12" style="display: flex; justify-content: flex-end;">
                <el-carousel height="370px"  style="border-radius: 20px;width: 90%;margin-top: 30px">
                    <el-carousel-item >
                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template1.jpg"  style="width: 100%; height: 100%;">
                    </el-carousel-item>
                    <el-carousel-item >
                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template2.jpg"  style="width: 100%; height: 100%;">
                    </el-carousel-item>
                    <el-carousel-item >
                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template3.jpg"  style="width: 100%; height: 100%;">
                    </el-carousel-item>
                    <el-carousel-item >
                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template4.jpg"  style="width: 100%; height: 100%;">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="12" >
                <el-row style="padding: 15px;display: flex; justify-content: center;margin-top: 100px">
                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex;margin-top: -70px">
                        <div style="width: 100px">
                            {{lang.buy.nametitle}}:
                        </div>
                        <div>
                                <span style="font-size: 20px;margin-left: 10px">
                                {{ lang.buy.name}}
                                </span>
                        </div>
                    </el-col>
                </el-row>
                <el-row style="padding: 15px;display: flex; justify-content: center;margin-top: -60px">
                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex">
                        <div style="width: 100px">
                            {{ lang.buy.description }}:
                        </div>

                    </el-col>
                </el-row>
                <el-row style="display: flex; justify-content: center">
                    <div style="margin-left:  25px">
                                <span style="font-size: 20px;width: 90%">
                                {{ lang.buy.detail}}
                                </span>
                    </div>
                </el-row>
                <el-row style="padding: 15px;display: flex; justify-content: center">
                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex">
                        <div style="width: 100px">
                            {{lang.buy.price}}:
                        </div>
                        <div>
                            <span>320000 ₩/m²</span>
                        </div>
                    </el-col>
                </el-row>
                <el-row style="padding: 15px;display: flex; justify-content: center;margin-top: -10px">
                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex">
                        <div style="">
                            {{lang.buy.remind}}:
                        </div>
                        <div style="margin-left: 10px">
                            <el-input-number :precision="2" :step="0.1" v-model="size" :min="1" :max="20" style="width: 150px;margin-top: -8px" label="描述文字"></el-input-number>
                            m²
                        </div>
                        <div style="margin-left: 10px">
                            <span>{{ lang.buy.totalCost}}:</span>
                            <span>{{size*320000}}₩</span>
                        </div>
                        <div style="margin-left: 10px;margin-top: -6px">
                            <el-button @click="open" style="background :#ff9d02">{{lang.buy.buy}}</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <v-footer></v-footer>
    </div>
</template>

<script>

    import vFooter from "../common/Footer.vue";
    import langpack from "../../lang";
    export default {
        components:{vFooter},
        created(){
            var a = window.location.hash.replace('#/','');
        },
        computed:{
            lang(){
                return langpack[this.language]
            },
            language(){
                return this.$store.state.language;
            },
        },
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                },
                size:1.00,
            }
        },
        methods: {
            open() {
                this.$alert(this.lang.buy.contact, '', {
                    confirmButtonText: 'OK!',
                });
            }
        }
    }
</script>
<style scoped>

</style>
