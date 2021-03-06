import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopCarContainer from "./components/tabbar/ShopCarContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopCar', component: ShopCarContainer},
        {path: '/search', component: SearchContainer},
    ],
    linkActiveClass: 'mui-active', //覆盖默认的路由高亮的类
    // 默认的类叫做router-link-active
});

export default router;





