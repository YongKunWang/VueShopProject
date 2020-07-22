# Vue App 项目

1. 关于模板的问题
> 这个模板还是稍微有点问题：
```json5
//package.json的问题
{
"dependencies": {
    "@babel/runtime": "^7.10.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1",
    "bootstrap": "^4.5.0",
    "jquery": "^3.5.1",
    "mint-ui": "^2.2.13",
    "vue": "^2.6.11",
    "vue-router": "^3.3.4"
  },
}
```
关于babel的东西是否在运行依赖中！

## 前端环境：

UI ：
- Mint-UI
- MUI
    
git命令：

移除 git add 后的文件：
``git reset HEAD filename``

相关问题：
1. Mint-UI 不显示样式：
- 需要在文件中引入样式 mint\lib\style.css

2. Mint-UI 显示变小：

需要设置适配：
```
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

3. idea的格式化代码：
```ctrl + alt + l```

4. 一种关于拓展名称的错误
``
import HomeContainer from "./components/tabbar/HomeContainer";

ERROR in ./src/router.js
Module not found: Error: Can't resolve './components/tabbar/ShopCarContainer' in 'D:\vue\webpack\smallProject\src'
 @ ./src/router.js 4:0-68 18:15-31
 @ ./src/main.js
``

需要添加拓展名称：
```javascript 1.5
import HomeContainer from "./components/tabbar/HomeContainer.vue";

```


