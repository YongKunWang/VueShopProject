<template>
    <div class="app-container">
        <!-- 顶部 Header 区域 -->
        <mt-header fixed title="Vue项目·商城"></mt-header>
        <!-- 中间的 路由 router-view 区域 -->
        <transition>
            <router-view></router-view>
        </transition>

        <!-- 底部 Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="shopCar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="css" scoped>
    /*采取的fix的方法，脱标了，所以采用padding-top 向下压显示距离*/
    .app-container {
        padding-top: 40px;
        background-color: #fff;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-enter-to {
        opacity: 1;
    }

    .v-leave {
        opacity: 1;

    }
    .v-leave-active,
    .v-enter-active {
        transition: all .5s ease;
    }

    .v-leave-to {
        opacity: 0;
        /*向左走，默认是向左走的*/
        transform: translateX(-100%);
        /*避免先在下面在上去*/
        position: absolute;
    }


</style>