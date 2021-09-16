# 写代码的时候总是 设计先行

> 具体详细🔎见 design.drawio

# 先安装一些必要的依赖

```shell
    dependencies :
      {
      "axios": "^0.21.4",
      "dayjs": "^1.10.7",
      "mobx": "^6.3.3",
      "mobx-react": "^7.2.0",
      "ramda": "^0.27.1",
      "sass": "^1.41.0",
      "react-router": "^5.2.1",
      "react-router-dom": "^5.3.0",
      }

    devDependencies: 
      {
          "@types/ramda": "^0.27.44"
      }
```

# 接下来一点点的配置这些lib

## 1. 配置 路径别称

<https://blog.csdn.net/weixin_42054155/article/details/110356807?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-4.no_search_link&spm=1001.2101.3001.4242>

## 2. 看看如何做多入口

实际上非常的简单，不需要搞怎么复杂，只需要去搞一个插件就好了

```shell
      "customize-cra": "^1.0.0",
    "react-app-rewire-multiple-entry": "^2.2.1",
    "react-app-rewired": "^2.1.8"
```

## 3. 自定义webpack配置

## 4. 集成antd-mobile

> 这一步非常简单，官方给出了基础都CRA 脚手架的指南，它非常的简单 和我们的使用的react-app-rewired 是配套的，所以集成进来非常的简单

# 看看如何配置工程化 和 优化dev 和build的体验
