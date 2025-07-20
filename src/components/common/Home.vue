<template>
<!--    <div class="wrapper">-->
<!--        <div >-->
<!--            <transition name="move" mode="out-in">-->
<!--                <router-view></router-view>-->
<!--            </transition>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    import vHead from './Header.vue';
    export default {
        components:{
            vHead
        }
    }
</script>
<style scoped>
    .wrapper .content {
        top: 100px;
    }
</style>
