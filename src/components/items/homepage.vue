<!--<template>-->
<!--    <div style="padding: 5px">-->
<!--        <el-row style=""  type="flex" justify="center">-->
<!--            <div  >-->
<!--                <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepagetitle.png"  style="width: 100%; height: 100%;">-->
<!--            </div>-->
<!--        </el-row>-->
<!--        <el-row>-->
<!--            <el-carousel height="900px" style="border-radius: 50px;">-->
<!--                <el-carousel-item >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage1.jpg"  style="width: 100%; height: 100%;">-->
<!--                </el-carousel-item>-->
<!--                <el-carousel-item >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage2.jpg"  style="width: 100%; height: 100%;">-->
<!--                </el-carousel-item>-->
<!--                <el-carousel-item >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage3.jpg"  style="width: 100%; height: 100%;">-->
<!--                </el-carousel-item>-->
<!--                <el-carousel-item >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage4.jpg"  style="width: 100%; height: 100%;">-->
<!--                </el-carousel-item>-->
<!--                <el-carousel-item >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage5.jpg"  style="width: 100%; height: 100%;">-->
<!--                </el-carousel-item>-->
<!--            </el-carousel>-->
<!--        </el-row>-->
<!--        <el-row type="flex" justify="center" style="margin-top: 30px" >-->
<!--            <el-col :span="10" style="display: flex; justify-content: flex-end;margin-right: 30px ">-->
<!--                <el-card  style="background: rgba(255,220,2,0.55);box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);width: 100%" >-->
<!--                    <ul  style="overflow:auto">-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            1. Define your parking space style with one click-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise" >-->
<!--                            2. Make each of your returns home make you want to go home.-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            3. Reject pollution, create a pure haven for your car-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise" >-->
<!--                            4. A green new choice: park eco-friendly without compromise-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            5. Cutting-edge tech, ultra-eco-friendly, effortless breathing-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            6. Unique eco-customization, no two parking spaces alike-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            7. Customized without repetition, eco-friendly spaces with endless charm-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="10" style="display: flex;">-->
<!--                <el-card style="background: rgba(255,220,2,0.55);box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);width: 100%" >-->
<!--                    <ul  style="overflow:auto">-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            1. 너만의 주차 공간 스타일, 한 번의 클릭으로 완성-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise" >-->
<!--                            2. 매번 집에 돌아오는 길이 더 기대돼-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            3. 오염은 거부하고, 내 차를 위한 깨끗한 안식처-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise" >-->
<!--                            4. 친환경 주차의 새로운 선택, 환경도 차량도 모두 지켜요-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            5. 블랙테크，초절친환경, 내 차도 숨 쉬는 주차 공간-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            6. 맞춤형 친환경, 주차 공간마다 다른 개성-->
<!--                        </li>-->
<!--                        <li class="infinite-list-item advertise">-->
<!--                            7. 똑같은 건 없어요! 무한한 조합, 나만의 친환경 주차 스타일-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--        </el-row>-->
<!--        <el-row style="margin-top: 20px"  type="flex" justify="center">-->
<!--            <div  >-->
<!--                <h1>{{lang.homepage.hotProduct}} </h1>-->
<!--            </div>-->
<!--        </el-row>-->
<!--        <el-row style="margin-top: 20px"  type="flex" justify="center">-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product1.png"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product2.png"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product3.png"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product5.png"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--        </el-row>-->
<!--                <v-footer></v-footer>-->
<!--    </div>-->
<!--</template>-->
<template>
    <div class="homepage">
        <!-- 标题图片 -->
<!--        <div class="title-section">-->
<!--            <div class="title-container">-->
<!--                <img-->
<!--                    src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepagetitle.png"-->
<!--                    alt="Homepage Title"-->
<!--                    class="title-image"-->
<!--                >-->
<!--            </div>-->
<!--        </div>-->
        <el-row   type="flex" justify="center">
                        <div  >
                            <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepagetitle.png"  style="width: 100%; height: 100%;">
                        </div>
        </el-row>
<!--        <div class="carousel-section">-->
<!--            <el-carousel :height="carouselHeight" class="home-carousel">-->
<!--                <el-carousel-item v-for="(item, index) in carouselItems" :key="index">-->
<!--                    <img-->
<!--                        :src="item.src"-->
<!--                        :alt="`Homepage Image ${index + 1}`"-->
<!--                        class="carousel-image"-->
<!--                    >-->
<!--                </el-carousel-item>-->
<!--            </el-carousel>-->
<!--        </div>-->

        <div class="carousel-section" >
            <el-carousel
                :height="carouselHeight"
                class="home-carousel"
                :autoplay="true"
                indicator-position="outside"
            >
                <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
                    <div class="carousel-image-container">
                        <img
                            :src="item.src"
                            :alt="`Homepage Image ${index + 1}`"
                            class="carousel-image"
                        >
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 广告语区域 -->
        <div class="ad-section">
            <div class="ad-container">
                <el-card class="ad-card" v-for="(adList, index) in advertisementLists" :key="index">
                    <ul class="ad-list">
                        <li
                            v-for="(text, textIndex) in adList"
                            :key="textIndex"
                            class="ad-list-item"
                        >
                            {{ text }}
                        </li>
                    </ul>
                </el-card>
            </div>
        </div>

        <!-- 热门产品 -->
        <div class="product-section">
            <div class="product-title">
                <h1>{{ lang.homepage.hotProduct }}</h1>
            </div>

            <div class="product-container">
                <el-card
                    v-for="(product, index) in products"
                    :key="index"
                    class="product-card"
                >
                    <img
                        :src="product.image"
                        :alt="`Product ${index + 1}`"
                        class="product-image"
                    >
                </el-card>
            </div>
        </div>

        <!-- 底部组件 -->
        <v-footer></v-footer>
    </div>
</template>
<!--<script>-->
<!--import langpack from "../../lang";-->
<!--import vFooter from "../common/Footer.vue"-->
<!--export default {-->
<!--    components:{-->
<!--        vFooter-->
<!--    },-->
<!--    computed:{-->
<!--        lang(){-->
<!--            return langpack[this.language]-->
<!--        },-->
<!--        language(){-->
<!--            return this.$store.state.language;-->
<!--        },-->
<!--    },-->
<!--    created(){-->
<!--        var a = window.location.hash.replace('#/','');-->
<!--    },-->
<!--    data() {-->
<!--        return {-->

<!--        }-->
<!--    },-->
<!--    methods: {-->

<!--    }-->
<!--}-->
<!--</script>-->
<script>
import langpack from "../../lang";
import vFooter from "../common/Footer.vue"

export default {
    name: 'HomePage',

    components: {
        vFooter
    },

    data() {
        return {
            // 轮播图数据
            carouselItems: [
                { src: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage1.jpg" },
                { src: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage2.jpg" },
                { src: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage3.jpg" },
                { src: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage4.jpg" },
                { src: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/homepage5.jpg" }
            ],

            // 广告语数据
            advertisementLists: [
                [
                    "1. Define your parking space style with one click",
                    "2. Make each of your returns home make you want.",
                    "3. Reject pollution, create a pure haven for your car",
                    "4. A green new choice: park eco-friendly",
                    "5. Cutting-edge tech, effortless breathing",
                    "6. Unique eco-customization",
                    "7. Customized without repetition, eco-friendly spaces with endless charm"
                ],
                [
                    "1. 너만의 주차 공간 스타일, 한 번의 클릭으로 완성",
                    "2. 매번 집에 돌아오는 길이 더 기대돼",
                    "3. 오염은 거부하고, 내 차를 위한 깨끗한 안식처",
                    "4. 친환경 주차의 새로운 선택, 환경도 차량도 모두 지켜요",
                    "5. 블랙테크，초절친환경, 내 차도 숨 쉬는 주차 공간",
                    "6. 맞춤형 친환경, 주차 공간마다 다른 개성",
                    "7. 똑같은 건 없어요! 무한한 조합, 나만의 친환경 주차 스타일"
                ]
            ],

            // 产品数据
            products: [
                { image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product1.png" },
                { image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product2.png" },
                { image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product3.png" },
                { image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product5.png" }
            ]
        }
    },

    computed: {
        lang() {
            return langpack[this.language] || {}
        },

        language() {
            return this.$store.state.language;
        },

        // 响应式轮播图高度
        carouselHeight() {
            if (window.innerWidth <= 768) {
                return '450px' // 移动端高度
            } else if (window.innerWidth <= 1024) {
                return '600px' // 平板端高度
            } else {
                return '800px' // 桌面端高度
            }
        }
    },

    mounted() {
        // 监听窗口大小变化
        window.addEventListener('resize', this.handleResize)
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },

    methods: {
        handleResize() {
            // 强制更新计算属性
            this.$forceUpdate()
        }
    }
}
</script>
<!--<style scoped>-->
<!--.el-carousel__item h3 {-->
<!--    color: #475669;-->
<!--    font-size: 18px;-->
<!--    opacity: 0.75;-->
<!--    margin: 0;-->
<!--}-->

<!--.text {-->
<!--    font-size: 14px;-->
<!--}-->


<!--.box-card {-->
<!--    width: 800px;-->
<!--}-->

<!--.advertise {-->
<!--    height: 30px;-->
<!--    font-size: 20px;-->
<!--}-->

<!--</style>-->
<style scoped>
/* CSS变量 */
:root {
    --section-padding: 20px;
    --card-border-radius: 30px;
    --card-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    --primary-color: rgba(255, 220, 2, 0.55);
}

.homepage {
    padding: 5px;
    max-width: 100%;
    overflow-x: hidden;
}

/* 轮播图区域 */
.carousel-section {
    padding: var(--section-padding) 0;
    width: 100%;
}

.home-carousel {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 30px;
    overflow: hidden;
}

/* 图片容器 - 使用固定比例 */
.carousel-image-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5; /* 可选：图片加载时的背景色 */
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 保持比例，填充整个容器 */
    object-position: center; /* 图片居中显示 */
}

/* 响应式高度 */
@media (max-width: 768px) {
    .home-carousel {
        border-radius: 20px;
    }
}

@media (max-width: 480px) {
    .home-carousel {
        border-radius: 15px;
    }
}

/* 广告语区域 */
.ad-section {
    padding: 30px 0;
}

.ad-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.ad-card {

    background: #ffd329;
    //background: var(--primary-color) !important;
    box-shadow: var(--card-shadow) !important;
    border: none !important;
}

.ad-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.ad-list-item {
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.ad-list-item:last-child {
    border-bottom: none;
}

/* 产品区域 */
.product-section {
    padding: 30px 0;
}

.product-title {
    text-align: center;
    margin-bottom: 30px;
}

.product-title h1 {
    font-size: 32px;
    color: #333;
    margin: 0;
}

.product-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.product-card {
    padding: 12px;
    border-radius: var(--card-border-radius) !important;
    height: 100%;
}

.product-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
}

/* 平板端适配 */
@media (max-width: 1024px) {
    .ad-container {
        gap: 20px;
    }

    .product-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    .ad-list-item {
        font-size: 16px;
        height: 35px;
        line-height: 35px;
    }

    .product-title h1 {
        font-size: 28px;
    }

    .product-image {
        height: 200px;
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .homepage {
        padding: 2px;
    }

    .title-container,
    .ad-container,
    .product-container {
        padding: 0 15px;
    }

    .home-carousel {
        border-radius: 20px;
    }

    .ad-container {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .product-container {
        grid-template-columns: 1fr;
        gap: 15px;
        max-width: 400px;
    }

    .ad-list-item {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
    }

    .product-title h1 {
        font-size: 24px;
    }

    .product-image {
        height: 180px;
    }

    .ad-section,
    .product-section {
        padding: 20px 0;
    }
}

/* 超小屏幕手机适配 */
@media (max-width: 480px) {
    .title-container,
    .ad-container,
    .product-container {
        padding: 0 10px;
    }

    .home-carousel {
        border-radius: 15px;
    }

    .ad-list-item {
        font-size: 12px;
        height: 28px;
        line-height: 28px;
    }

    .product-title h1 {
        font-size: 20px;
    }

    .product-image {
        height: 150px;
    }

    .product-card {
        padding: 8px;
    }
}

/* 大屏幕适配 */
@media (min-width: 1600px) {
    .title-container,
    .ad-container,
    .product-container {
        max-width: 1500px;
    }

    .product-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Element UI 组件样式覆盖 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
}

.text {
    font-size: 14px;
}
</style>
