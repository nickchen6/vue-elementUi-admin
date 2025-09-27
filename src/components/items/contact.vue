<!--<template>-->
<!--    <div >-->
<!--        <div style="padding: 15px;margin-top: 20px" >-->
<!--            <el-row   type="flex" justify="center">-->
<!--                <div  >-->
<!--                    <h1>{{lang.homepage.contact}} </h1>-->
<!--                </div>-->
<!--            </el-row>-->
<!--            <el-row type="flex" justify="center" style="margin-top: 20px">-->
<!--                <el-col :span="17">-->
<!--                    <el-card  style="padding: 10px;border-radius: 30px;" >-->

<!--                        <el-row style="padding: 15px">-->
<!--                            <el-col  style="margin-left: 50px;font-size: 20px;display: flex">-->
<!--                                <div >-->
<!--                                    <img src="static/img/picture/email.jpeg"  style="width: 20px; height: 20px; object-fit: cover;">-->

<!--                                </div>-->
<!--                                <div style="width: 100px">-->
<!--                                    Email-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                <span style="font-size: 20px;margin-left: 10px">-->
<!--                                antujiancaimaoyi@gmail.com-->
<!--                                </span>-->
<!--                                </div>-->
<!--                            </el-col>-->
<!--                        </el-row>-->
<!--                        <el-row style="padding: 15px">-->
<!--                            <el-col  style="margin-left: 50px;font-size: 20px;display: flex">-->
<!--                                <div >-->
<!--                                    <img src="static/img/picture/tiktok.png"  style="width: 20px; height: 20px; object-fit: cover;">-->

<!--                                </div>-->
<!--                                <div style="width: 100px">-->
<!--                                    Tiktok-->
<!--                                </div>-->
<!--                                <div>-->
<!--&lt;!&ndash;                                    <el-link href="https://www.tiktok.com/@cheweidiban?lang=zh-Hans" target="_blank" style="font-size: 20px;margin-left: 10px"> https://www.tiktok.com/@cheweidiban?lang=zh-Hans </el-link>&ndash;&gt;-->
<!--                                    <p><a href="https://www.tiktok.com/@cheweidiban?lang=zh-Hans" style="font-size: 20px;margin-left: 10px;color: black">https://www.tiktok.com/@cheweidiban?lang=zh-Hans</a> </p>-->
<!--                                </div>-->
<!--                            </el-col>-->
<!--                        </el-row>-->
<!--                        <el-row style="padding: 15px">-->
<!--                            <el-col  style="margin-left: 50px;font-size: 20px;display: flex">-->
<!--                                <div >-->
<!--                                    <img src="static/img/picture/ins.jpg"  style="width: 20px; height: 20px; object-fit: cover;">-->

<!--                                </div>-->
<!--                                <div style="width: 100px">-->
<!--                                    Instagram-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    &lt;!&ndash;                                    <el-link href="https://www.tiktok.com/@cheweidiban?lang=zh-Hans" target="_blank" style="font-size: 20px;margin-left: 10px"> https://www.tiktok.com/@cheweidiban?lang=zh-Hans </el-link>&ndash;&gt;-->
<!--                                    <p><a href="https://www.instagram.com/antuguomao/" style="font-size: 20px;margin-left: 10px;color: black">https://www.instagram.com/antuguomao/</a> </p>-->
<!--                                </div>-->
<!--                            </el-col>-->
<!--                        </el-row>-->
<!--                        <el-row style="padding: 15px">-->
<!--                            <el-col  style="margin-left: 50px;font-size: 20px;display: flex">-->
<!--                                <div >-->
<!--                                    <img src="static/img/picture/facebook.jpg"  style="width: 20px; height: 20px; object-fit: cover;">-->

<!--                                </div>-->
<!--                                <div style="width: 100px">-->
<!--                                    FaceBook-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    &lt;!&ndash;                                    <el-link href="https://www.tiktok.com/@cheweidiban?lang=zh-Hans" target="_blank" style="font-size: 20px;margin-left: 10px"> https://www.tiktok.com/@cheweidiban?lang=zh-Hans </el-link>&ndash;&gt;-->
<!--                                    <p><a href="https://www.facebook.com/profile.php?id=61578765958944" style="font-size: 20px;margin-left: 10px;color: black">https://www.facebook.com/profile.php?id=61578765958944</a> </p>-->
<!--                                </div>-->
<!--                            </el-col>-->
<!--                        </el-row>-->
<!--                    </el-card>-->
<!--                </el-col>-->

<!--            </el-row>-->
<!--            <el-row   type="flex" justify="center" >-->
<!--                <div style="margin-top: 15px" >-->
<!--                    <span>Copyright © 2025 {{lang.title}} </span>-->
<!--                </div>-->
<!--            </el-row>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<template>
    <div class="contact-page">
        <div class="contact-container">
            <!-- 标题 -->
            <div class="contact-title">
                <h1>{{ lang.homepage.contact }}</h1>
            </div>

            <!-- 联系信息卡片 -->
            <div class="contact-card-wrapper">
                <el-card class="contact-card">
                    <!-- 邮箱联系 -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img
                                src="static/img/picture/email_new.png"
                                alt="Email"
                                class="icon-img"
                            >
                        </div>
                        <div class="contact-info">
                            <div class="contact-platform">Email</div>
                            <div class="contact-detail">
                                <a
                                    href="mailto:antujiancaimaoyi@gmail.com"
                                    class="contact-link"
                                >
                                    antujiancaimaoyi@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- TikTok -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img
                                src="static/img/picture/tiktok.png"
                                alt="TikTok"
                                class="icon-img"
                            >
                        </div>
                        <div class="contact-info">
                            <div class="contact-platform">TikTok</div>
                            <div class="contact-detail">
                                <a
                                    href="https://www.tiktok.com/@cheweidiban?lang=zh-Hans"
                                    target="_blank"
                                    class="contact-link"
                                >
                                    https://www.tiktok.com/@cheweidiban
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Instagram -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img
                                src="static/img/picture/ins.jpg"
                                alt="Instagram"
                                class="icon-img"
                            >
                        </div>
                        <div class="contact-info">
                            <div class="contact-platform">Instagram</div>
                            <div class="contact-detail">
                                <a
                                    href="https://www.instagram.com/antuguomao/"
                                    target="_blank"
                                    class="contact-link"
                                >
                                    https://www.instagram.com/antuguomao/
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Facebook -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img
                                src="static/img/picture/facebook.jpg"
                                alt="Facebook"
                                class="icon-img"
                            >
                        </div>
                        <div class="contact-info">
                            <div class="contact-platform">FaceBook</div>
                            <div class="contact-detail">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61578765958944"
                                    target="_blank"
                                    class="contact-link"
                                >
                                    https://www.facebook.com/antuguomao
                                </a>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>

            <!-- 版权信息 -->
            <div class="copyright">
                <span>Copyright © 2025 {{ lang.title }}</span>
            </div>
        </div>
    </div>
</template>
<!--<script>-->

<!--import langpack from "../../lang";-->
<!--    export default {-->
<!--        components:{},-->
<!--        computed:{-->
<!--            lang(){-->
<!--                return langpack[this.language]-->
<!--            },-->
<!--            language(){-->
<!--                return this.$store.state.language;-->
<!--            },-->
<!--        },-->
<!--        created(){-->
<!--            var a = window.location.hash.replace('#/','');-->
<!--        },-->
<!--        data() {-->
<!--            return {-->

<!--            }-->
<!--        },-->
<!--        methods: {-->

<!--        }-->
<!--    }-->
<!--</script>-->
<script>
import langpack from "../../lang";

export default {
    name: 'ContactPage',

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
        // 可以添加联系方式的点击统计等功能
        handleContactClick(platform) {
            console.log('Contact platform clicked:', platform);
            // 这里可以添加统计逻辑
        }
    }
}
</script>
<style scoped>
/* CSS变量 */
:root {
    --page-padding: 20px;
    --card-border-radius: 30px;
    --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --primary-color: #ff9d02;
    --text-color: #333;
    --link-color: #409eff;
}

.contact-page {
    padding: var(--page-padding);
    min-height: 100vh;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
}

/* 标题样式 */
.contact-title {
    text-align: center;
    margin-bottom: 30px;
}

.contact-title h1 {
    font-size: 36px;
    color: var(--text-color);
    margin: 0;
    font-weight: 600;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 联系卡片 */
.contact-card-wrapper {
    margin-bottom: 30px;
}

.contact-card {
    padding: 30px;
    border-radius: var(--card-border-radius) !important;
    box-shadow: var(--card-shadow) !important;
    border: none !important;
    background: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(10px);
}

/* 联系项目 */
.contact-item {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease;
}

.contact-item:hover {
    background: rgba(255, 157, 2, 0.05);
    border-radius: 10px;
    padding: 20px 15px;
    margin: 0 -15px;
}

.contact-item:last-child {
    border-bottom: none;
}

.contact-icon {
    flex-shrink: 0;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;
}

.icon-img {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.contact-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.contact-platform {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-color);
    min-width: 100px;
}

.contact-detail {
    font-size: 16px;
}

.contact-link {
    color: var(--link-color);
    text-decoration: none;
    transition: all 0.3s ease;
    word-break: break-all;
    line-height: 1.4;
}

.contact-link:hover {
    color: #ff9d02;
    text-decoration: underline;
}

/* 版权信息 */
.copyright {
    text-align: center;
    padding: 20px 0;
    font-size: 14px;
    color: #666;
}

/* 平板端适配 */
@media (max-width: 1024px) {
    .contact-container {
        max-width: 90%;
    }

    .contact-title h1 {
        font-size: 32px;
    }

    .contact-card {
        padding: 25px;
    }

    .contact-item {
        padding: 18px 0;
    }

    .contact-platform {
        font-size: 17px;
    }

    .contact-link {
        font-size: 15px;
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .contact-page {
        padding: 15px 10px;
        align-items: flex-start;
        min-height: calc(100vh - 30px);
    }

    .contact-container {
        max-width: 100%;
    }

    .contact-title {
        margin-bottom: 20px;
    }

    .contact-title h1 {
        font-size: 28px;
    }

    .contact-card {
        padding: 20px;
        border-radius: 20px !important;
    }

    .contact-item {
        flex-direction: column;
        align-items: flex-start;
        padding: 15px 0;
        text-align: center;
    }

    .contact-item:hover {
        padding: 15px 10px;
        margin: 0 -10px;
    }

    .contact-icon {
        margin-right: 0;
        margin-bottom: 10px;
        align-self: center;
        width: 45px;
        height: 45px;
    }

    .icon-img {
        width: 22px;
        height: 22px;
    }

    .contact-info {
        align-items: center;
        width: 100%;
    }

    .contact-platform {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .contact-link {
        font-size: 14px;
        text-align: center;
        word-break: break-word;
    }

    .copyright {
        font-size: 13px;
        padding: 15px 0;
    }
}

/* 超小屏幕手机适配 */
@media (max-width: 480px) {
    .contact-page {
        padding: 10px 5px;
    }

    .contact-title h1 {
        font-size: 24px;
    }

    .contact-card {
        padding: 15px;
        border-radius: 15px !important;
    }

    .contact-item {
        padding: 12px 0;
    }

    .contact-item:hover {
        padding: 12px 8px;
        margin: 0 -8px;
    }

    .contact-icon {
        width: 40px;
        height: 40px;
    }

    .icon-img {
        width: 20px;
        height: 20px;
    }

    .contact-platform {
        font-size: 15px;
    }

    .contact-link {
        font-size: 13px;
    }

    .copyright {
        font-size: 12px;
    }
}

/* 大屏幕适配 */
@media (min-width: 1600px) {
    .contact-container {
        max-width: 1000px;
    }

    .contact-title h1 {
        font-size: 42px;
    }

    .contact-card {
        padding: 40px;
    }

    .contact-platform {
        font-size: 20px;
    }

    .contact-link {
        font-size: 18px;
    }
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
    .contact-page {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    }

    .contact-card {
        background: rgba(44, 62, 80, 0.95) !important;
        color: white;
    }

    .contact-title h1 {
        background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .contact-platform {
        color: #ecf0f1;
    }

    .contact-link {
        color: #3498db;
    }

    .contact-link:hover {
        color: #2ecc71;
    }

    .contact-item {
        border-bottom: 1px solid #34495e;
    }

    .contact-item:hover {
        background: rgba(52, 152, 219, 0.1);
    }

    .copyright {
        color: #bdc3c7;
    }
}

/* 链接点击效果 */
.contact-link:active {
    transform: scale(0.98);
}
</style>
