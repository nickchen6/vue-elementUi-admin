<!--<template>-->
<!--    <div >-->
<!--        <el-row>-->
<!--            <el-col :span="12" style="display: flex; justify-content: flex-end;">-->
<!--                <el-carousel height="370px"  style="border-radius: 20px;width: 90%;margin-top: 30px">-->
<!--                    <el-carousel-item >-->
<!--                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template1.jpg"  style="width: 100%; height: 100%;">-->
<!--                    </el-carousel-item>-->
<!--                    <el-carousel-item >-->
<!--                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template2.jpg"  style="width: 100%; height: 100%;">-->
<!--                    </el-carousel-item>-->
<!--                    <el-carousel-item >-->
<!--                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template3.jpg"  style="width: 100%; height: 100%;">-->
<!--                    </el-carousel-item>-->
<!--                    <el-carousel-item >-->
<!--                        <img src="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template4.jpg"  style="width: 100%; height: 100%;">-->
<!--                    </el-carousel-item>-->
<!--                </el-carousel>-->
<!--            </el-col>-->
<!--            <el-col :span="12" >-->
<!--                <el-row style="padding: 15px;display: flex; justify-content: center;margin-top: 100px">-->
<!--                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex;margin-top: -70px">-->
<!--                        <div style="width: 100px">-->
<!--                            {{lang.buy.nametitle}}:-->
<!--                        </div>-->
<!--                        <div>-->
<!--                                <span style="font-size: 20px;margin-left: 10px">-->
<!--                                {{ lang.buy.name}}-->
<!--                                </span>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                </el-row>-->
<!--                <el-row style="padding: 15px;display: flex; justify-content: center;margin-top: -60px">-->
<!--                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex">-->
<!--                        <div style="width: 100px">-->
<!--                            {{ lang.buy.description }}:-->
<!--                        </div>-->

<!--                    </el-col>-->
<!--                </el-row>-->
<!--                <el-row style="display: flex; justify-content: center">-->
<!--                    <div style="margin-left:  25px">-->
<!--                                <span style="font-size: 20px;width: 90%">-->
<!--                                {{ lang.buy.detail}}-->
<!--                                </span>-->
<!--                    </div>-->
<!--                </el-row>-->
<!--                <el-row style="padding: 15px;display: flex; justify-content: center">-->
<!--                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex">-->
<!--                        <div style="width: 100px">-->
<!--                            {{lang.buy.price}}:-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <span>320000 ₩/m²</span>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                </el-row>-->
<!--                <el-row style="padding: 15px;display: flex; justify-content: center;margin-top: -10px">-->
<!--                    <el-col  style="margin-left: 10px;font-size: 20px;display: flex">-->
<!--                        <div style="">-->
<!--                            {{lang.buy.remind}}:-->
<!--                        </div>-->
<!--                        <div style="margin-left: 10px">-->
<!--                            <el-input-number :precision="2" :step="0.1" v-model="size" :min="1" :max="20" style="width: 150px;margin-top: -8px" label="描述文字"></el-input-number>-->
<!--                            m²-->
<!--                        </div>-->
<!--                        <div style="margin-left: 10px">-->
<!--                            <span>{{ lang.buy.totalCost}}:</span>-->
<!--                            <span>{{size*320000}}₩</span>-->
<!--                        </div>-->
<!--                        <div style="margin-left: 10px;margin-top: -6px">-->
<!--                            <el-button @click="open" style="background :#ff9d02">{{lang.buy.buy}}</el-button>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                </el-row>-->
<!--            </el-col>-->
<!--        </el-row>-->
<!--        <v-footer></v-footer>-->
<!--    </div>-->
<!--</template>-->

<template>
    <div class="product-buy-page">
        <div class="product-container">
            <!-- 商品图片轮播 -->
            <div class="product-gallery">
                <el-carousel
                    :height="carouselHeight"
                    class="product-carousel"
                    :autoplay="false"
                    indicator-position="outside"
                >
                    <el-carousel-item v-for="(image, index) in productImages" :key="index">
                        <div class="image-container">
                            <img
                                :src="image"
                                :alt="`Product Image ${index + 1}`"
                                class="product-image"
                                @click="openImagePreview(image)"
                            >
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <!-- 商品信息区域 - 包含购买功能 -->
            <div class="product-info-main">
                <!-- 商品基本信息 -->
                <div class="basic-info-section">
                    <!-- 商品名称 -->
                    <div class="info-section">
                        <div class="info-label">{{ lang.buy.nametitle }}:</div>
                        <div class="info-value product-name">{{ lang.buy.name }}</div>
                    </div>

                    <!-- 商品描述 -->
                    <div class="info-section">
                        <div class="info-label">{{ lang.buy.description }}:</div>
                        <div class="info-value product-description">{{ lang.buy.detail }}</div>
                    </div>

                    <!-- 价格信息 -->
                    <div class="info-section">
                        <div class="info-label">{{ lang.buy.price }}:</div>
                        <div class="info-value price">320,000 ₩/m²</div>
                    </div>
                </div>

                <!-- 购买区域 - 在Web端和移动端都显示 -->
                <div class="purchase-section-main">
                    <div class="quantity-selector">
                        <div class="info-label">{{ lang.buy.remind }}:</div>
                        <div class="quantity-controls">
                            <el-input-number
                                :precision="2"
                                :step="0.1"
                                v-model="size"
                                :min="1"
                                :max="20"
                                class="size-input"
                                :label="lang.buy.area"
                            ></el-input-number>
                            <span class="unit">m²</span>
                        </div>
                    </div>

                    <div class="total-price">
                        <span class="total-label">{{ lang.buy.totalCost }}:</span>
                        <span class="total-value">{{ formattedTotalPrice }}₩</span>
                    </div>

                    <el-button
                        @click="handleBuy"
                        class="buy-button"
                        type="primary"
                    >
                        {{ lang.buy.buy }}
                    </el-button>
                </div>
            </div>
        </div>

        <v-footer></v-footer>
    </div>
</template>
<!--<script>-->

<!--    import vFooter from "../common/Footer.vue";-->
<!--    import langpack from "../../lang";-->
<!--    export default {-->
<!--        components:{vFooter},-->
<!--        created(){-->
<!--            var a = window.location.hash.replace('#/','');-->
<!--        },-->
<!--        computed:{-->
<!--            lang(){-->
<!--                return langpack[this.language]-->
<!--            },-->
<!--            language(){-->
<!--                return this.$store.state.language;-->
<!--            },-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                form: {-->
<!--                    name: '',-->
<!--                    region: '',-->
<!--                    date1: '',-->
<!--                    date2: '',-->
<!--                },-->
<!--                size:1.00,-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            open() {-->
<!--                this.$alert(this.lang.buy.contact, '', {-->
<!--                    confirmButtonText: 'OK!',-->
<!--                });-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<script>
import vFooter from "../common/Footer.vue";
import langpack from "../../lang";

export default {
    name: 'ProductBuyPage',

    components: {
        vFooter
    },

    data() {
        return {
            size: 1.00,
            productImages: [
                "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template1.jpg",
                "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template2.jpg",
                "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template3.jpg",
                "https://anturesource.oss-accelerate.aliyuncs.com/img/picture/product/template4.jpg"
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

        // 计算总价
        formattedTotalPrice() {
            const total = this.size * 320000;
            return total.toLocaleString('ko-KR'); // 韩国数字格式
        },

        // 响应式轮播图高度
        carouselHeight() {
            if (window.innerWidth <= 768) {
                return '300px';
            } else {
                return '400px';
            }
        }
    },

    created() {
        console.log('Current route:', this.$route.path);
    },

    mounted() {
        // 监听窗口大小变化
        window.addEventListener('resize', this.handleResize);
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        handleResize() {
            this.$forceUpdate(); // 触发carouselHeight重新计算
        },

        handleBuy() {
            this.$alert(this.lang.buy.contact, this.lang.buy.purchaseInfo, {
                confirmButtonText: 'OK',
                callback: action => {
                    // 这里可以添加购买逻辑
                    console.log('购买面积:', this.size, 'm²');
                    console.log('总价:', this.formattedTotalPrice, '₩');
                }
            });
        },

        openImagePreview(imageUrl) {
            // 可以添加图片预览功能
            this.$message.info('点击图片可以查看大图功能待开发');
        }
    }
}
</script>
<style scoped>
/* CSS变量 */
:root {
    --page-padding: 20px;
    --card-border-radius: 20px;
    --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --primary-color: #ff9d02;
    --secondary-color: #409eff;
}

.product-buy-page {
    padding: var(--page-padding);
    min-height: 100vh;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.product-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr; /* 默认单列布局 */
    gap: 30px;
    align-items: start;
}

/* 商品图片区域 */
.product-gallery {
    width: 100%;
    order: 1;
}

.product-carousel {
    border-radius: var(--card-border-radius);
    overflow: hidden;
    box-shadow: var(--card-shadow);
    max-width: 800px;
    margin: 0 auto;
}

.image-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.product-image:hover {
    transform: scale(1.02);
}

/* 主要商品信息区域 - 包含购买功能 */
.product-info-main {
    order: 2;
    background: white;
    padding: 30px;
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
    max-width: 800px;
    margin: 0 auto;
}

.basic-info-section {
    margin-bottom: 30px;
}

/* 基本信息样式 */
.info-section {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.info-label {
    font-size: 16px;
    font-weight: 600;
    color: #666;
    min-width: 120px;
}

.info-value {
    font-size: 18px;
    color: #333;
    line-height: 1.5;
}

.product-name {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
}

.product-description {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
    border-left: 4px solid var(--primary-color);
}

.price {
    font-size: 28px;
    font-weight: bold;
    color: #e74c3c;
}

/* 购买区域样式 */
.purchase-section-main {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 15px;
    border: 2px solid var(--primary-color);
}

.quantity-selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.size-input {
    width: 150px;
}

.unit {
    font-size: 16px;
    color: #666;
    min-width: 40px;
}

.total-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    background: white;
    border-radius: 10px;
    border: 2px solid var(--primary-color);
}

.total-label {
    font-size: 18px;
    font-weight: 600;
    color: #333;
}

.total-value {
    font-size: 24px;
    font-weight: bold;
    color: #e74c3c;
}

.buy-button {
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    background: #ff9d02;
    border: none;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.buy-button:hover {
    background: #ff8c00 !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 157, 2, 0.3);
}

/* Web端布局（桌面端） */
@media (min-width: 1025px) {
    .product-container {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .product-info-main {
        display: block; /* 确保Web端显示 */
        width: 100%;
    }

    /* Web端可以调整布局为左右并排（可选） */
    /*
    .product-container {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: start;
    }

    .product-gallery {
      order: 1;
    }

    .product-info-main {
      order: 2;
      position: sticky;
      top: 20px;
    }
    */
}

/* 平板端适配 */
@media (max-width: 1024px) and (min-width: 769px) {
    .product-container {
        grid-template-columns: 1fr;
    }

    .product-carousel {
        max-width: 600px;
    }

    .product-info-main {
        max-width: 600px;
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .product-buy-page {
        padding: 10px;
    }

    .product-container {
        gap: 20px;
        padding: 0;
    }

    .product-info-main {
        padding: 20px;
        border-radius: 15px;
    }

    .info-section {
        margin-bottom: 20px;
    }

    .info-label {
        font-size: 14px;
        min-width: 100px;
    }

    .info-value {
        font-size: 15px;
    }

    .product-name {
        font-size: 20px;
    }

    .price {
        font-size: 22px;
    }

    .purchase-section-main {
        padding: 20px;
    }

    .quantity-selector {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
    }

    .quantity-controls {
        justify-content: space-between;
    }

    .size-input {
        width: 120px;
    }

    .total-price {
        padding: 12px;
    }

    .total-label {
        font-size: 16px;
    }

    .total-value {
        font-size: 20px;
    }

    .buy-button {
        height: 45px;
        font-size: 16px;
    }
}

/* 超小屏幕手机适配 */
@media (max-width: 480px) {
    .product-buy-page {
        padding: 5px;
    }

    .product-info-main {
        padding: 15px;
    }

    .info-label {
        font-size: 13px;
    }

    .info-value {
        font-size: 14px;
    }

    .product-name {
        font-size: 18px;
    }

    .price {
        font-size: 20px;
    }

    .purchase-section-main {
        padding: 15px;
    }

    .size-input {
        width: 100px;
    }

    .total-label {
        font-size: 14px;
    }

    .total-value {
        font-size: 18px;
    }

    .buy-button {
        height: 40px;
        font-size: 15px;
    }
}

/* 大屏幕适配 */
@media (min-width: 1600px) {
    .product-container {
        max-width: 1400px;
    }

    .product-carousel {
        max-width: 1000px;
    }

    .product-info-main {
        max-width: 1000px;
        padding: 40px;
    }

    .info-value {
        font-size: 20px;
    }

    .product-name {
        font-size: 28px;
    }

    .price {
        font-size: 32px;
    }
}

/* Element UI 组件样式覆盖 */
:deep(.el-carousel__indicators) {
    bottom: -40px;
}

:deep(.el-input-number) {
    width: 100%;
}

:deep(.el-input-number .el-input__inner) {
    text-align: center;
    font-weight: bold;
}
</style>
