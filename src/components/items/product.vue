<!--<template>-->
<!--    <div class="table">-->
<!--        <el-row   type="flex" justify="center" style="margin-top: 30px">-->
<!--            <div  >-->
<!--                <h1>{{lang.product.introudction}} </h1>-->
<!--            </div>-->
<!--        </el-row>-->
<!--        <el-row type="flex" justify="center" style="width: 100%;margin-top: 30px" >-->
<!--            <el-col :span="8" style="display: flex; justify-content: flex-end;margin-right: 40px ">-->
<!--                <el-card class="box-card" style="box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/introduction1.png"  style="width: 100%; height: 100%; object-fit: cover;;border-radius: 30px;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="8" >-->
<!--                <el-card class="box-card" style="box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);border-radius: 30px">-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/introduction2.png"  style="width: 100%; height: 100%; object-fit: cover;;border-radius: 30px;">-->
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
<!--        <el-row style="margin-top: 20px"  type="flex" justify="center">-->
<!--            <div  >-->
<!--                <h1>{{lang.product.template}} </h1>-->
<!--            </div>-->
<!--        </el-row>-->
<!--        <el-row style="margin-top: 20px"  type="flex" justify="center">-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template1.jpg"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template2.jpg"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template3.jpg"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--            <el-col :span="5" style="display: flex; justify-content: center;margin-right: 30px ">-->
<!--                <el-card style="height: 95%;padding: 12px;border-radius: 30px" >-->
<!--                    <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template4.jpg"  style="width: 100%; height: 100%; object-fit: cover;">-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--        </el-row>-->
<!--        <v-footer></v-footer>-->
<!--    </div>-->
<!--</template>-->
<template>
    <div class="product-page">
        <!-- 产品介绍标题 -->
        <div class="section-title">
            <h1>{{ lang.product.introudction }}</h1>
        </div>

        <!-- 产品介绍图片 -->
        <div class="introduction-section">
            <div class="introduction-container">
                <el-card class="intro-card">
                    <img
                        src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/introduction1.png"
                        alt="Product Introduction 1"
                        class="product-image"
                    >
                </el-card>
                <el-card class="intro-card">
                    <img
                        src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/introduction2.png"
                        alt="Product Introduction 2"
                        class="product-image"
                    >
                </el-card>
            </div>
        </div>

        <!-- 热门产品 -->
        <div class="section-title">
            <h1>{{ lang.homepage.hotProduct }}</h1>
        </div>

        <div class="products-section">
            <div class="products-container">
                <el-card
                    v-for="(product, index) in hotProducts"
                    :key="'hot-' + index"
                    class="product-card"
                >
                    <img
                        :src="product.image"
                        :alt="product.alt"
                        class="product-image"
                    >
                </el-card>
            </div>
        </div>

        <!-- 产品模板 -->
        <div class="section-title">
            <h1>{{ lang.product.template }}</h1>
        </div>

        <div class="templates-section">
            <div class="templates-container">
                <el-card
                    v-for="(template, index) in productTemplates"
                    :key="'template-' + index"
                    class="product-card"
                >
                    <img
                        :src="template.image"
                        :alt="template.alt"
                        class="product-image"
                    >
                </el-card>
            </div>
        </div>

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
<!--        console.log(a)-->
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
    name: 'ProductPage',

    components: {
        vFooter
    },

    data() {
        return {
            // 热门产品数据
            hotProducts: [
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product1.png",
                    alt: "Product 1"
                },
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product2.png",
                    alt: "Product 2"
                },
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product3.png",
                    alt: "Product 3"
                },
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/product5.png",
                    alt: "Product 5"
                }
            ],

            // 产品模板数据
            productTemplates: [
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template1.jpg",
                    alt: "Template 1"
                },
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template2.jpg",
                    alt: "Template 2"
                },
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template3.jpg",
                    alt: "Template 3"
                },
                {
                    image: "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template4.jpg",
                    alt: "Template 4"
                }
            ]
        }
    },

    computed: {
        lang() {
            return langpack[this.language] || {}
        },

        language() {
            return this.$store.state.language;
        }
    },

    created() {
        console.log('Current route:', this.$route.path);
    },

    methods: {
        // 可以添加产品点击事件等方法
        handleProductClick(product) {
            console.log('Product clicked:', product);
            // 这里可以添加产品详情页跳转逻辑
        }
    }
}
</script>
<style scoped>
/* CSS变量 */
:root {
    --section-padding: 30px;
    --card-border-radius: 30px;
    --card-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    --card-padding: 12px;
    --image-height: 300px;
}

.product-page {
    padding: 20px;
    max-width: 100%;
    overflow-x: hidden;
}

/* 标题样式 */
.section-title {
    text-align: center;
    margin: 30px 0;
}

.section-title h1 {
    font-size: 32px;
    color: #333;
    margin: 0;
    font-weight: bold;
}

/* 产品介绍区域 */
.introduction-section {
    padding: var(--section-padding) 0;
}

.introduction-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 0 20px;
}

.intro-card {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius) !important;
    box-shadow: var(--card-shadow) !important;
    border: none !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.intro-card:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2) !important;
}

/* 产品展示区域 */
.products-section,
.templates-section {
    padding: var(--section-padding) 0;
}

.products-container,
.templates-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 0 20px;
}

.product-card {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius) !important;
    box-shadow: var(--card-shadow) !important;
    border: none !important;
    transition: all 0.3s ease;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2) !important;
}

.product-image {
    width: 100%;
    height: var(--image-height);
    object-fit: cover;
    border-radius: calc(var(--card-border-radius) - 5px);
}

/* 平板端适配 */
@media (max-width: 1024px) {
    .section-title h1 {
        font-size: 28px;
    }

    .introduction-container {
        gap: 30px;
        padding: 0 15px;
    }

    .products-container,
    .templates-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 0 15px;
    }

    .product-image {
        height: 250px;
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .product-page {
        padding: 15px 10px;
    }

    .section-title {
        margin: 20px 0;
    }

    .section-title h1 {
        font-size: 24px;
    }

    .introduction-section,
    .products-section,
    .templates-section {
        padding: 20px 0;
    }

    .introduction-container {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 10px;
    }

    .products-container,
    .templates-container {
        grid-template-columns: 1fr;
        gap: 15px;
        max-width: 400px;
        padding: 0 10px;
    }

    .product-image {
        height: 200px;
    }

    .intro-card,
    .product-card {
        padding: 10px;
    }
}

/* 超小屏幕手机适配 */
@media (max-width: 480px) {
    .product-page {
        padding: 10px 5px;
    }

    .section-title h1 {
        font-size: 20px;
    }

    .section-title {
        margin: 15px 0;
    }

    .introduction-section,
    .products-section,
    .templates-section {
        padding: 15px 0;
    }

    .product-image {
        height: 180px;
    }

    .intro-card,
    .product-card {
        padding: 8px;
        border-radius: 20px !important;
    }

    .product-image {
        border-radius: 15px;
    }
}

/* 大屏幕适配 */
@media (min-width: 1600px) {
    .introduction-container {
        max-width: 1400px;
    }

    .products-container,
    .templates-container {
        max-width: 1600px;
        grid-template-columns: repeat(4, 1fr);
    }

    .product-image {
        height: 350px;
    }
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
