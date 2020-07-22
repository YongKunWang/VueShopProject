// 入口文件
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter);

//导入 vue-resource
import VueResource from 'vue-resource'
//安装 vue-resource
Vue.use(VueResource);


// 导入 MUI 的样式
import '../lib/mui/css/mui.min.css'

// 导入拓展样式库
import '../lib/mui/css/icons-extra.css'

// 导入Mint-UI之前必须要要导入样式库，才可以正常使用的！
import '../node_modules/mint-ui/lib/style.min.css'
// 使用按需求导入Mint-UI中的组件
import { Header,Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入组件
import app from './App.vue'
// 导入路由
import router from "./router";



var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
});




