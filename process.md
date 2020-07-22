# 实现流程

1.构建基本模板

2.分区 header main tabbar

3.处理 header 区域
- 注意设置自动缩放 meta 
- 使用的是Mint-UI
  > Mint-ui 需要引入样式文件

4.处理Tabbar 区域
- 使用的MUI
- 需要引入额外的拓展标签样式

5.处理Tabbar的路由部分
- 修改a标签为 router-link
- 创建组件 src\components\tabbar
- 创建路由 router.js
- 在Vue中引入路由，实现路由跳转
- 出现没有显示的问题，这是因为fix脱标，盖住了显示区域，需要处理
- 高亮显示

6.增加切换的动画效果
- 从右边进来
- 从左边出去
- 解决页面内容从下面跳到上面

7.模拟后端数据
- fastmock
8.轮播图的后端数据响应：
```json5
[
    {
        "url": "https://homewyk.com",
        "img": "https://gitee.com/homewyk/cloudimg/raw/master/20200403173316.png"
    },
    {
        "url": "https://homewyk.com",
        "img": "https://gitee.com/homewyk/cloudimg/raw/master/landscape-nature-sky-sunset-51373.jpg"
    },
    {
        "url": "https://homewyk.com",
        "img": "https://gitee.com/homewyk/cloudimg/raw/master/technology-computer-display-text-330771.jpg"
    }
]
```
- 数据要适配！

9.```<img data-v-1159cb34="" src="[object Module]" alt="">```

最后是要使用url-loader ，并且需要在webpack.config.js中加上配置：esModule: false
[出现这种问题](https://www.jianshu.com/p/e344fa5f0c7c)

10.设置主体的颜色！










