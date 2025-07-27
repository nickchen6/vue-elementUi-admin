<template>
    <div class="table">
        <el-row   type="flex" justify="center" style="margin-top: 30px">
            <div  >
                <h1>{{lang.product.introudction}} </h1>
            </div>
        </el-row>
        <el-row type="flex" justify="center" style="width: 100%;margin-top: 30px" >
            <el-col :span="8" style="display: flex; justify-content: flex-end;margin-right: 40px ">
                <el-card class="box-card" style="box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);border-radius: 30px" >
                    <img src="static/img/picture/product/introduction1.png"  style="width: 100%; height: 100%; object-fit: cover;;border-radius: 30px;">
                </el-card>
            </el-col>
            <el-col :span="8" >
                <el-card class="box-card" style="box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);border-radius: 30px">
                    <img src="static/img/picture/product/introduction2.png"  style="width: 100%; height: 100%; object-fit: cover;;border-radius: 30px;">
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px"  type="flex" justify="center">
            <div  >
                <h1>{{lang.homepage.hotProduct}} </h1>
            </div>
        </el-row>
        <el-row style="margin-top: 20px"  type="flex" justify="center">
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/product1.png"  style="width: 100%; height: 100%; object-fit: cover;">
                </el-card>
            </el-col>
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/product2.png"  style="width: 100%; height: 100%; object-fit: cover;">
                </el-card>
            </el-col>
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/product3.png"  style="width: 100%; height: 100%; object-fit: cover;">
                </el-card>
            </el-col>
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/product5.png"  style="width: 100%; height: 100%; object-fit: cover;">
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px"  type="flex" justify="center">
            <div  >
                <h1>{{lang.product.template}} </h1>
            </div>
        </el-row>
        <el-row style="margin-top: 20px"  type="flex" justify="center">
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/template1.jpg"  style="width: 100%; height: 100%; object-fit: cover;">
                </el-card>
            </el-col>
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/template2.jpg"  style="width: 100%; height: 100%; object-fit: cover;">
                </el-card>
            </el-col>
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/template3.jpg"  style="width: 100%; height: 100%; object-fit: cover;">
                </el-card>
            </el-col>
            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">
                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >
                    <img src="static/img/picture/product/template4.jpg"  style="width: 100%; height: 100%; object-fit: cover;">
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
    components:{
        vFooter
    },
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
        console.log(a)
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
.product_card {
}
</style>
