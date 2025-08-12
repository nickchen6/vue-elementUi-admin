import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/page/Login.vue';
import home from '../components/common/Home.vue';
import homepage from '../components/items/homepage.vue';
import product from '../components/items/product.vue';
import measure from '../components/items/measure.vue';
import Buy from '../components/items/buy.vue';
import contact from '../components/items/contact.vue';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/homepage' // 默认重定向到第一个菜单项
        },
        {
            path: '/homepage',
            component: homepage // 独立页面组件
        },
        {
            path: '/product',
            component: product // 独立页面组件
        },
        {
            path: '/measure',
            component: measure // 独立页面组件
        },
        {
            path: '/bugaddress',
            component: Buy // 独立页面组件
        },
        {
            path: '/contact',
            component: contact // 独立页面组件
        },
    ]
})



