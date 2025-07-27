<template>
    <div id="app">
        <div class="wrapper">
            <v-head></v-head>
            <div >
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
<!--            <v-footer></v-footer>-->
        </div>
    </div>
</template>
<script>
import vHead from "./components/common/Header.vue";
import vFooter from "./components/common/Footer.vue"
export default {
    components:{
        vHead,
        vFooter
    }
}
</script>
<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   !*浅绿色主题*!*/
</style>
