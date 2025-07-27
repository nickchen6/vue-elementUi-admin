<template>
    <div style="padding: 5px">
        <el-row>
            <el-carousel height="1100px" style="border-radius: 50px;">
                <el-carousel-item >
                    <img src="static/img/picture/homepage1.jpg"  style="width: 100%; height: 100%;">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="static/img/picture/homepage2.jpg"  style="width: 100%; height: 100%;">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="static/img/picture/homepage3.jpg"  style="width: 100%; height: 100%;">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="static/img/picture/homepage4.jpg"  style="width: 100%; height: 100%;">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="static/img/picture/homepage5.jpg"  style="width: 100%; height: 100%;">
                </el-carousel-item>
            </el-carousel>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top: 30px" >
            <el-col :span="10" style="display: flex; justify-content: flex-end;margin-right: 30px ">
                <el-card  style="background: rgba(255,220,2,0.55);box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);width: 100%" >
                    <ul  style="overflow:auto">
                        <li class="infinite-list-item advertise">
                            1. Define your parking space style with one click
                        </li>
                        <li class="infinite-list-item advertise" >
                            2. Make each of your returns home make you want to go home.
                        </li>
                        <li class="infinite-list-item advertise">
                            3. Reject pollution, create a pure haven for your car
                        </li>
                        <li class="infinite-list-item advertise" >
                            4. A green new choice: park eco-friendly without compromise
                        </li>
                        <li class="infinite-list-item advertise">
                            5. Cutting-edge tech, ultra-eco-friendly, effortless breathing
                        </li>
                        <li class="infinite-list-item advertise">
                            6. Unique eco-customization, no two parking spaces alike
                        </li>
                        <li class="infinite-list-item advertise">
                            7. Customized without repetition, eco-friendly spaces with endless charm
                        </li>
                    </ul>
                </el-card>
            </el-col>
            <el-col :span="10" style="display: flex;">
                <el-card style="background: rgba(255,220,2,0.55);box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);width: 100%" >
                    <ul  style="overflow:auto">
                        <li class="infinite-list-item advertise">
                            1. 너만의 주차 공간 스타일, 한 번의 클릭으로 완성
                        </li>
                        <li class="infinite-list-item advertise" >
                            2. 매번 집에 돌아오는 길이 더 기대돼
                        </li>
                        <li class="infinite-list-item advertise">
                            3. 오염은 거부하고, 내 차를 위한 깨끗한 안식처
                        </li>
                        <li class="infinite-list-item advertise" >
                            4. 친환경 주차의 새로운 선택, 환경도 차량도 모두 지켜요
                        </li>
                        <li class="infinite-list-item advertise">
                            5. 블랙테크，초절친환경, 내 차도 숨 쉬는 주차 공간
                        </li>
                        <li class="infinite-list-item advertise">
                            6. 맞춤형 친환경, 주차 공간마다 다른 개성
                        </li>
                        <li class="infinite-list-item advertise">
                            7. 똑같은 건 없어요! 무한한 조합, 나만의 친환경 주차 스타일
                        </li>
                    </ul>
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
}

.text {
    font-size: 14px;
}


.box-card {
    width: 800px;
}

.advertise {
    height: 30px;
    font-size: 20px;
}

</style>
