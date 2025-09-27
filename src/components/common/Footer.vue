
<template>
    <footer class="footer">
        <div class="footer-content">
            <!-- 标题部分 -->
            <div class="footer-title">
                <h1>{{ lang.homepage.contact }}</h1>
            </div>

            <!-- 联系信息卡片 -->
            <div class="contact-card">
                <el-card class="card-content">
                    <!-- 地址信息 -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img
                                src="static/img/picture/location.png"
                                alt="address"
                                class="icon-img"
                            >
                        </div>
                        <div class="contact-label">{{ lang.homepage.address }}</div>
                        <div class="contact-value">{{ lang.footer.address }}</div>
                    </div>

                    <!-- 邮箱信息 -->
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img
                                src="static/img/picture/email.png"
                                alt="email"
                                class="icon-img"
                            >
                        </div>
                        <div class="contact-label">{{ lang.homepage.email }}</div>
                        <div class="contact-value">antujiancaimaoyi@gmail.com</div>
                    </div>
                </el-card>
            </div>

            <!-- 版权信息 -->
            <div class="copyright">
                <span>Copyright © 2025 {{ lang.title }}</span>
            </div>
        </div>
    </footer>
</template>
<!--<script>-->
<!--import langpack from '../../lang/index.js';-->
<!--export default {-->
<!--    created(){-->
<!--    },-->
<!--    data() {-->
<!--        return {-->
<!--        }-->
<!--    },-->
<!--    computed:{-->
<!--        onRoutes(){-->
<!--            console.log(this.$route.path);-->
<!--            return this.$route.path;-->
<!--        },-->
<!--        lang(){-->
<!--            return langpack[this.language]-->
<!--        },-->
<!--        language(){-->
<!--            return this.$store.state.language;-->
<!--        },-->
<!--    },-->
<!--    methods:{-->
<!--        switchzh(){-->
<!--            this.$store.commit('switchzh');-->
<!--        },-->
<!--        switchen(){-->
<!--            this.$store.commit('switchen');-->
<!--        },-->
<!--        handleCommand(command) {-->
<!--            if(command == 'loginout'){-->
<!--                localStorage.removeItem('ms_username')-->
<!--                this.$router.push('/login');-->
<!--            }-->
<!--        },-->
<!--    }-->
<!--}-->
<!--</script>-->
<script>
import langpack from '../../lang/index.js';

export default {
    name: 'AppFooter',

    data() {
        return {}
    },

    computed: {
        lang() {
            return langpack[this.language] || langpack.zh
        },

        language() {
            return this.$store.state.language
        }
    },

    methods: {
        switchLanguage(langKey) {
            this.$store.commit(`switch${langKey}`)
        },

        handleLoginOut() {
            localStorage.removeItem('ms_username')
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
/* CSS变量统一管理 - 调整图标大小 */
:root {
    --footer-padding: 20px;
    --card-border-radius: 30px;
    --icon-size: 24px; /* 桌面端图标大小 */
    --icon-size-tablet: 20px; /* 平板端图标大小 */
    --icon-size-mobile: 18px; /* 移动端图标大小 */
    --text-color: #333;
    --card-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.footer {
    padding: var(--footer-padding);
    margin-top: 20px;
    width: 100%;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

/* 标题样式 */
.footer-title {
    text-align: center;
    margin-bottom: 20px;
}

.footer-title h1 {
    font-size: 28px;
    font-weight: bold;
    color: var(--text-color);
    margin: 0;
}

/* 联系卡片容器 */
.contact-card {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.card-content {
    width: 100%;
    max-width: 800px;
    padding: 20px;
    border-radius: var(--card-border-radius) !important;
    box-shadow: var(--card-shadow) !important;
}

/* 联系项目样式 */
.contact-item {
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
}

.contact-item:last-child {
    border-bottom: none;
}

.contact-icon {
    flex-shrink: 0;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-img {
    width: var(--icon-size);
    height: var(--icon-size);
    object-fit: cover;
}

.contact-label {
    flex-shrink: 0;
    width: 100px;
    font-size: 18px;
    font-weight: 500;
    color: var(--text-color);
}

.contact-value {
    flex: 1;
    font-size: 18px;
    color: var(--text-color);
    margin-left: 15px;
    word-break: break-word;
}

/* 版权信息 */
.copyright {
    text-align: center;
    margin-top: 15px;
    font-size: 16px;
    color: #666;
}

/* 平板端适配 - 调整图标大小 */
@media (max-width: 1024px) {
    .footer {
        padding: 15px;
    }

    .footer-title h1 {
        font-size: 24px;
    }

    .contact-label,
    .contact-value {
        font-size: 16px;
    }

    .contact-label {
        width: 80px;
    }

    .icon-img {
        width: var(--icon-size-tablet);
        height: var(--icon-size-tablet);
    }
}

/* 移动端适配 - 进一步缩小图标 */
@media (max-width: 768px) {
    .footer {
        padding: 15px 10px;
        margin-top: 15px;
    }

    .footer-title h1 {
        font-size: 20px;
    }

    .card-content {
        padding: 15px;
        border-radius: 20px !important;
    }

    .contact-item {
        flex-direction: row; /* 保持水平布局，只调整图标大小 */
        align-items: center;
        padding: 12px 0;
        text-align: left;
    }

    .contact-icon {
        margin-right: 12px;
        margin-bottom: 0;
    }

    .icon-img {
        width: var(--icon-size-mobile);
        height: var(--icon-size-mobile);
    }

    .contact-label {
        width: 70px;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 0;
    }

    .contact-value {
        margin-left: 10px;
        font-size: 14px;
        width: 100%;
    }

    .copyright {
        font-size: 14px;
    }
}

/* 超小屏幕手机适配 - 最小图标 */
@media (max-width: 480px) {
    .footer {
        padding: 10px 5px;
    }

    .footer-title h1 {
        font-size: 18px;
    }

    .card-content {
        padding: 12px;
    }

    .contact-item {
        padding: 10px 0;
    }

    .contact-icon {
        margin-right: 10px;
    }

    .icon-img {
        width: 16px; /* 超小屏幕使用固定值 */
        height: 16px;
    }

    .contact-label {
        width: 60px;
        font-size: 13px;
    }

    .contact-value {
        font-size: 12px;
        margin-left: 8px;
    }

    .copyright {
        font-size: 12px;
    }
}

/* 大屏幕适配 */
@media (min-width: 1200px) {
    .footer-content {
        max-width: 1400px;
    }

    .card-content {
        max-width: 1000px;
    }
}
</style>
