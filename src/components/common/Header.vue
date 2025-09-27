<!--<template>-->
<!--    <div class="header"style="border-radius: 8px; padding: 5px" >-->
<!--       <div class=" status"  >-->
<!--           <el-row>-->
<!--               <el-col :span="8">-->
<!--                   <div class="logoimg"></div>-->
<!--                   <div class="logo">{{lang.title}}</div>-->
<!--               </el-col>-->
<!--               <el-col :span="10" style="display: flex; justify-content: center; align-items: center">-->
<!--                   <el-menu :default-active="onRoutes"-->
<!--                            mode="horizontal"-->
<!--                            style="background: transparent;margin-left: -140px;"-->
<!--                            @select="handleSelect"-->
<!--                            router-->
<!--                   >-->
<!--                       <el-menu-item v-for="(value, key) in lang.nav"-->
<!--                                     :key="key"-->
<!--                                     :index="key" style="font-size: 20px;text-align: center;margin-top: 7px">-->
<!--                           &lt;!&ndash;               <template slot="title"><i class="el-icon-date"></i>{{key}}</template>&ndash;&gt;-->
<!--                           &lt;!&ndash;               <el-menu-item v-for="(detail,item) in value" :index="item">{{detail}}</el-menu-item>&ndash;&gt;-->
<!--                           {{value}}-->
<!--                       </el-menu-item>-->
<!--                   </el-menu>-->
<!--               </el-col>-->
<!--               <el-col :span="6">-->
<!--                   <div class="switch">-->
<!--                       <a @click="switchzh">中文</a>/-->
<!--                       <a @click="switchen">English</a>/-->
<!--                       <a @click="switchkr">한국어</a>-->
<!--                   </div>-->
<!--               </el-col>-->
<!--           </el-row>-->
<!--       </div>-->
<!--    </div>-->
<!--</template>-->
<template>
    <div
        class="header"
        :style="{
      borderRadius: '8px',
      padding: '5px'
    }"
    >
        <div class="status">
            <div class="header-content">
                <!-- 左侧Logo区域 -->
                <div class="header-left">
                    <div
                        class="logoimg"
                        :style="{
              backgroundImage: 'url(https://anturesource.oss-accelerate.aliyuncs.com/img/antuLogo1.jpg)'
            }"
                    ></div>
                    <div class="logo">{{ lang.title }}</div>
                </div>

                <!-- 移动端汉堡菜单 -->
                <el-button
                    v-if="isMobile"
                    class="hamburger"
                    type="text"
                    @click="toggleMobileMenu"
                >
                    <i class="el-icon-menu"></i>
                </el-button>

                <!-- 导航菜单区域 -->
                <transition name="slide-down">
                    <div
                        v-show="!isMobile || mobileMenuActive"
                        class="header-center"
                    >
                        <el-menu
                            :default-active="activeRoute"
                            mode="horizontal"
                            class="nav-menu"
                            :class="{ 'mobile-menu': isMobile }"
                            @select="handleSelect"
                            router
                        >
                            <el-menu-item
                                v-for="(value, key) in lang.nav"
                                :key="key"
                                :index="key"
                                class="nav-item"
                            >
                                {{ value }}
                            </el-menu-item>
                        </el-menu>
                    </div>
                </transition>

                <!-- 语言切换区域 -->
                <div
                    v-show="!isMobile || mobileMenuActive"
                    class="header-right"
                >
                    <div class="switch">
                        <a
                            v-for="langItem in languageOptions"
                            :key="langItem.key"
                            @click="switchLanguage(langItem.key)"
                            :class="{ active: language === langItem.key }"
                        >
                            {{ langItem.label }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!--<script>-->
<!--    import langpack from '../../lang/index.js';-->
<!--    export default {-->
<!--        created(){-->
<!--            // this.$store.state.language-->
<!--            // $store代表的是vuex的实例，-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                name: 'linxin',-->
<!--                index:3,-->
<!--            }-->
<!--        },-->
<!--        computed:{-->
<!--            onRoutes(){-->
<!--                console.log(this.$route.path);-->
<!--                // var a = this.$route.path.replace('/','');-->
<!--                // console.log(a);-->
<!--                // return a-->
<!--                return this.$route.path;-->
<!--            },-->
<!--            lang(){-->
<!--                return langpack[this.language]-->
<!--            },-->
<!--            language(){-->
<!--                return this.$store.state.language;-->
<!--            },-->
<!--        },-->
<!--        methods:{-->
<!--            switchzh(){-->
<!--                this.$store.commit('switchzh');-->
<!--            },-->
<!--            switchen(){-->
<!--                this.$store.commit('switchen');-->
<!--            },-->
<!--            switchkr(){-->
<!--                this.$store.commit('switchkr');-->
<!--            },-->
<!--            handleCommand(command) {-->
<!--                if(command == 'loginout'){-->
<!--                    localStorage.removeItem('ms_username')-->
<!--                    this.$router.push('/login');-->
<!--                }-->

<!--            },-->
<!--            handleSelect(key, keyPath) {-->
<!--                console.log(key,keyPath)-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<script>
import langpack from '../../lang/index.js'

export default {
    name: 'AppHeader',

    data() {
        return {
            mobileMenuActive: false,
            isMobile: false,
            languageOptions: [
                { key: 'zh', label: '中文' },
                { key: 'en', label: 'English' },
                { key: 'kr', label: '한국어' }
            ]
        }
    },

    computed: {
        activeRoute() {
            return this.$route.path
        },

        language() {
            return this.$store.state.language
        },

        lang() {
            return langpack[this.language] || langpack.zh
        }
    },

    mounted() {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile)
    },

    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768
            if (!this.isMobile) {
                this.mobileMenuActive = false
            }
        },

        toggleMobileMenu() {
            this.mobileMenuActive = !this.mobileMenuActive
        },

        switchLanguage(langKey) {
            this.$store.commit(`switch${langKey}`)
            if (this.isMobile) {
                this.mobileMenuActive = false
            }
        },

        handleSelect(key, keyPath) {
            console.log('菜单选择:', key, keyPath)
            if (this.isMobile) {
                this.mobileMenuActive = false
            }
        },

        handleLoginOut() {
            localStorage.removeItem('ms_username')
            this.$router.push('/login')
        }
    }
}
</script>
<!--<style scoped>-->
<!--    .header {-->
<!--        box-sizing: border-box;-->
<!--        width: 100%;-->
<!--        font-size: 22px;-->
<!--        line-height: 70px;-->
<!--        color: #fff;-->
<!--        background: #ff9d02;-->
<!--    }-->
<!--    .switch {-->
<!--        float: right;-->
<!--        line-height: 70px;-->
<!--        font-size: 22px;-->
<!--        padding-right:100px;-->
<!--        color: #fff;-->
<!--    }-->
<!--    .switch>a {-->
<!--        cursor: pointer;-->
<!--    }-->
<!--    .switch>a:hover {-->
<!--        color: #58B7FF;-->
<!--    }-->
<!--    .status {-->
<!--        padding-left: 30px;-->
<!--    }-->

<!--    .header .logoimg{-->
<!--        float: left;-->
<!--        width: 70px;-->
<!--        height: 70px;-->
<!--        background-image: url(https://anturesource.oss-accelerate.aliyuncs.com/img/antuLogo1.jpg);-->
<!--        background-size: cover;-->
<!--        border-radius: 34px;-->
<!--    }-->
<!--    .header .logo{-->
<!--        padding-left: 30px;-->
<!--        float: left;-->
<!--        text-align: center;-->
<!--    }-->
<!--</style>-->
<style scoped>
/* CSS变量，便于统一管理 */
:root {
    --header-height: 70px;
    --header-bg-color: #8c939d;
    --text-color: #fff;
    --hover-color: #58B7FF;
    --mobile-breakpoint: 768px;
    --border-radius: 8px;
}

.header {
    box-sizing: border-box;
    width: 100%;
    font-size: 22px;
    line-height: var(--header-height);
    color: var(--text-color);
    background: var(--header-bg-color);
    position: relative;
    background: #ff9d02;
}

/* 主要布局容器 */
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    min-height: var(--header-height);
}

/* 左侧Logo区域 */
.header-left {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 15px;
}

.logoimg {
    width: 50px;
    height: 50px;
    background-size: cover;
    border-radius: 50%;
    flex-shrink: 0;
}

.logo {
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
}

/* 中间导航菜单 */
.header-center {
    display: flex;
    justify-content: center;
    flex: 1;
}

.nav-menu {
    background: transparent !important;
    border: none !important;
}

.nav-item {
    font-size: 18px !important;
    margin: 0 10px !important;
    transition: all 0.3s ease;
}

.nav-item:hover {
    color: var(--hover-color) !important;
}

/* 移动端菜单样式 */
.nav-menu.mobile-menu {
    flex-direction: column;
    width: 100%;
}

.nav-menu.mobile-menu .nav-item {
    width: 100% !important;
    margin: 0 !important;
    text-align: center;
}

/* 右侧语言切换 */
.header-right {
    flex-shrink: 0;
}

.switch {
    display: flex;
    gap: 5px;
    font-size: 16px;
}

.switch a {
    cursor: pointer;
    padding: 5px 8px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.switch a:hover,
.switch a.active {
    background: rgba(255, 255, 255, 0.2);
    color: var(--hover-color);
}

/* 汉堡菜单按钮 */
.hamburger {
    color: var(--text-color) !important;
    font-size: 24px !important;
    padding: 8px !important;
}

/* 动画效果 */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* 移动端响应式样式 */
@media (max-width: 768px) {
    .header-content {
        padding: 0 15px;
        flex-wrap: wrap;
        position: relative;
    }

    .header-left {
        flex: 1;
    }

    .header-center {
        order: 3;
        flex-basis: 100%;
        background: #ff9d02;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header-right {
        order: 3;
        flex-basis: 100%;
        text-align: center;
        padding: 10px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .switch {
        justify-content: center;
    }

    .logo {
        font-size: 18px;
    }

    .logoimg {
        width: 40px;
        height: 40px;
    }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
    .header-content {
        padding: 0 10px;
    }

    .logo {
        font-size: 16px;
    }

    .switch {
        font-size: 14px;
    }

    .switch a {
        padding: 4px 6px;
    }
}

.status {
    padding-left: 0;
}
</style>
