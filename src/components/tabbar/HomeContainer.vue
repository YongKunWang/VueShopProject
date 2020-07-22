<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
<!--            <mt-swipe-item>2</mt-swipe-item>-->
<!--            <mt-swipe-item>3</mt-swipe-item>-->
        </mt-swipe>

        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>


    </div>
</template>

<script>

    import { Toast } from "mint-ui"

    export default {
        name: "HomeContainer",
        data() {
            return {
                swipeList: [],
            };
        },
        created() {
            this.getSwipeList();
        },
        methods: {
          getSwipeList() {
                //https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word&word=a
              this.$http.get('https://www.fastmock.site/mock/417655ecc61eaabf301506eb42102d3b/api/getswiptlist').then(resp => {
                  // console.log(resp);    // 返回的查询结果
                  if (resp.status == 200){
                      this.swipeList = resp.body;
                  }else {
                      Toast("加载轮播图失败...");
                  }
              });
          },
        },
    }
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        }
        &:nth-child(2) {
            background-color: blue;
        }
        &:nth-child(3) {
            background-color: green;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
}
.mui-table-view.mui-grid-view.mui-grid-9 {
    img {
        width: 60px;
        height: 60px;
    }
}
.mui-table-view {
    background-color: #fff;
}
</style>