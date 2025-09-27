<!--<template>-->
<!--    <div class="table">-->
<!--        <el-row type="flex" justify="center" style="margin-top: 30px" >-->
<!--            <el-col :span="17">-->
<!--                <el-card  style="padding: 10px;border-radius: 30px;" >-->
<!--                    <el-row   type="flex" justify="left">-->
<!--                        <div  >-->
<!--                            <h1>{{lang.measureAndInstall.measure}} </h1>-->
<!--                        </div>-->
<!--                    </el-row>-->
<!--                    <el-row>-->
<!--                        <video controls  style="border-radius: 30px;margin-top: 20px;width: 100%">-->
<!--                            <source src="https://anturesource.oss-accelerate.aliyuncs.com/video/measure.mp4" type="video/mp4">-->
<!--                            您的浏览器不支持 HTML5 视频标签。-->
<!--                        </video>-->
<!--                    </el-row>-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--        </el-row>-->

<!--        <el-row type="flex" justify="center" style="margin-top: 30px" >-->
<!--            <el-col :span="17">-->
<!--                <el-card  style="padding: 10px;border-radius: 30px;" >-->
<!--                    <el-row   type="flex" justify="left">-->
<!--                        <div  >-->
<!--                            <h1>{{lang.measureAndInstall.install}} </h1>-->
<!--                        </div>-->
<!--                    </el-row>-->
<!--                    <el-row>-->
<!--                        <video controls  style="border-radius: 30px;margin-top: 20px;width: 100%">-->
<!--                            <source src="https://anturesource.oss-accelerate.aliyuncs.com/video/install.mp4" type="video/mp4">-->
<!--                            您的浏览器不支持 HTML5 视频标签。-->
<!--                        </video>-->
<!--                    </el-row>-->
<!--                </el-card>-->
<!--            </el-col>-->
<!--        </el-row>-->
<!--        <v-footer></v-footer>-->
<!--    </div>-->
<!--</template>-->
<template>
    <div class="measure-install-page">
        <!-- 测量视频部分 -->
        <div class="video-section">
            <div class="video-container">
                <el-card class="video-card">
                    <div class="video-header">
                        <h1>{{ lang.measureAndInstall.measure }}</h1>
                    </div>
                    <div class="video-content">
                        <video
                            controls
                            class="video-player"
                            preload="metadata"
                            poster="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/video-poster-measure.jpg"
                        >
                            <source src="https://anturesource.oss-accelerate.aliyuncs.com/video/measure.mp4" type="video/mp4">
                            您的浏览器不支持 HTML5 视频标签
                        </video>
                    </div>
<!--                    <div class="video-description">-->
<!--                        <p>{{ lang.measureAndInstall.measureDesc }}</p>-->
<!--                    </div>-->
                </el-card>
            </div>
        </div>

        <!-- 安装视频部分 -->
        <div class="video-section">
            <div class="video-container">
                <el-card class="video-card">
                    <div class="video-header">
                        <h1>{{ lang.measureAndInstall.install }}</h1>
                    </div>
                    <div class="video-content">
                        <video
                            controls
                            class="video-player"
                            preload="metadata"
                            poster="https://anturesource.oss-accelerate.aliyuncs.com/img/picture/video-poster-install.jpg"
                        >
                            <source src="https://anturesource.oss-accelerate.aliyuncs.com/video/install.mp4" type="video/mp4">
                            您的浏览器不支持 HTML5 视频标签
                        </video>
                    </div>
<!--                    <div class="video-description">-->
<!--                        <p>{{ lang.measureAndInstall.installDesc }}</p>-->
<!--                    </div>-->
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

<!--    computed:{-->
<!--        lang(){-->
<!--            return langpack[this.language]-->
<!--        },-->
<!--        language(){-->
<!--            return this.$store.state.language;-->
<!--        },-->
<!--    },-->
<!--    components:{-->
<!--        vFooter-->
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
    name: 'MeasureInstallPage',

    components: {
        vFooter
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

    mounted() {
        // 可以添加视频加载优化
        this.optimizeVideoLoading();
    },

    methods: {
        optimizeVideoLoading() {
            // 延迟加载视频以提高页面加载速度
            const videos = document.querySelectorAll('video[preload="metadata"]');
            videos.forEach(video => {
                video.addEventListener('click', function() {
                    if (this.getAttribute('data-loaded') !== 'true') {
                        this.preload = 'auto';
                        this.setAttribute('data-loaded', 'true');
                    }
                }, { once: true });
            });
        },

        // 可以添加视频播放统计等方法
        handleVideoPlay(videoType) {
            console.log(`${videoType} video started playing`);
            // 这里可以添加视频播放统计逻辑
        }
    }
}
</script>
<style scoped>
/* CSS变量 */
:root {
    --section-padding: 30px;
    --card-border-radius: 30px;
    --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --card-padding: 20px;
    --video-max-width: 1000px;
}

.measure-install-page {
    padding: 20px;
    max-width: 100%;
    overflow-x: hidden;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
}

/* 视频区域 */
.video-section {
    padding: var(--section-padding) 0;
}

.video-container {
    max-width: var(--video-max-width);
    margin: 0 auto;
    padding: 0 20px;
}

.video-card {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius) !important;
    box-shadow: var(--card-shadow) !important;
    border: none !important;
    background: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15) !important;
}

/* 视频标题 */
.video-header {
    margin-bottom: 20px;
    text-align: center;
}

.video-header h1 {
    font-size: 28px;
    color: #333;
    margin: 0;
    font-weight: 600;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 视频内容 */
.video-content {
    width: 100%;
    margin-bottom: 15px;
}

.video-player {
    width: 100%;
    height: auto;
    border-radius: 20px;
    background: #000;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.video-player:focus {
    outline: 2px solid #409eff;
    outline-offset: 2px;
}

/* 视频描述 */
.video-description {
    text-align: center;
    padding: 0 10px;
}

.video-description p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin: 0;
}

/* 平板端适配 */
@media (max-width: 1024px) {
    .measure-install-page {
        padding: 15px;
    }

    .video-container {
        padding: 0 15px;
    }

    .video-header h1 {
        font-size: 24px;
    }

    .video-card {
        padding: 15px;
    }

    .video-description p {
        font-size: 15px;
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .measure-install-page {
        padding: 10px;
        background: linear-gradient(135deg, #f5f7fa 0%, #dde4f0 100%);
    }

    .video-section {
        padding: 20px 0;
    }

    .video-container {
        padding: 0 10px;
        max-width: 100%;
    }

    .video-card {
        padding: 15px;
        border-radius: 20px !important;
    }

    .video-header {
        margin-bottom: 15px;
    }

    .video-header h1 {
        font-size: 22px;
    }

    .video-player {
        border-radius: 15px;
    }

    .video-description p {
        font-size: 14px;
        padding: 0 5px;
    }
}

/* 超小屏幕手机适配 */
@media (max-width: 480px) {
    .measure-install-page {
        padding: 5px;
    }

    .video-section {
        padding: 15px 0;
    }

    .video-container {
        padding: 0 5px;
    }

    .video-card {
        padding: 12px;
        border-radius: 15px !important;
    }

    .video-header h1 {
        font-size: 20px;
    }

    .video-player {
        border-radius: 10px;
    }

    .video-description p {
        font-size: 13px;
    }
}

/* 大屏幕适配 */
@media (min-width: 1600px) {
    .video-container {
        max-width: 1200px;
    }

    .video-header h1 {
        font-size: 32px;
    }

    .video-description p {
        font-size: 18px;
    }
}

/* 视频播放器自定义样式 */
.video-player::-webkit-media-controls-panel {
    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
}

.video-player::-webkit-media-controls-play-button {
    background-color: #409eff;
    border-radius: 50%;
}

.video-player::-webkit-media-controls-current-time-display,
.video-player::-webkit-media-controls-time-remaining-display {
    color: white;
    font-weight: bold;
}

/* 加载状态 */
.video-loading {
    position: relative;
    background: #f0f0f0;
    border-radius: 20px;
    overflow: hidden;
}

.video-loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
    .measure-install-page {
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    }

    .video-card {
        background: rgba(44, 62, 80, 0.95) !important;
        color: white;
    }

    .video-header h1 {
        background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .video-description p {
        color: #bdc3c7;
    }
}
</style>
