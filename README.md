#Marine

>本项目模版是前后端一体化
>（[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)）
>单页面应用（SPA）基础框架，它基于 Facebook
>[React](https://facebook.github.io/react/)组件库
>和 [Flux](http://facebook.github.io/flux/) 架构。

### 目标

* 解决SPA（单页面应用）SEO问题
* 前后端工程一体化

### TODO

* 开发环境webpack改成增量打包
* 编译时支持打成多个包，运行时支持异步加载
* 使用ES6的继承方式修改代码

### 关键字
node, react, webpack, director, grunt, ejs, koa, koa-router, JSX, ECMAScript 6


### 系统架构

本项目采用 [Flux](facebook.github.io/flux/) 原生的单向数据绑定实现数据流。

<img src="https://github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png" style="width: 100%;" />

Flux架构相关阅读：

 * [Flux for Stupid People](http://blog.andrewray.me/flux-for-stupid-people/) by [Andrew Ray](https://github.com/DelvarWorld)
 * [What is Flux?](http://fluxxor.com/what-is-flux.html) by [Brandon Tilley](https://github.com/BinaryMuse/)
 * [Rethinking Web App Development at Facebook](http://www.youtube.com/watch?v=nYkdrAPrdcw) by [Pete Hunt](https://github.com/petehunt)
 * [The State of Flux](https://reactjsnews.com/the-state-of-flux/) by [David Chang](http://davidandsuzi.com/)

### 目录结构

```
.
├── /app/                       # 项目原代码目录
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React组件
│   ├── /constants/             # Actions和stores所需的枚举类型定义
│   ├── /core/                  # 核心组件(Flux dispatcher, base classes, utilities)
│   ├── /css/                   # CSS样式
│   ├── /data/                  # 接口模拟数据
│   ├── /stores/                # Stores（包含应用程序的状态和业务逻辑）
│   ├── /templates/             # HTML模版
│   └── /main.js                # 客户端入口脚本
├── /config/                    # 项目配置文件目录
│   ├── /grunt/                 # grunt配置文件
│   ├── /marine.js              # 项目通用配置文件
│   ├── /mock.js                # 接口模拟数据URL配置
│   └── /router.js              # 项目URL路由规则配置
├── /lib/                       # 基础库目录
│   ├── /queryStringParse.js    # URL query解析函数
│   └── /serverRender.js        # grunt服务器渲染中间件
├── /dist/                      # 编译后输出目录
├── /docs/                      # 项目文档目录
├── /node_modules/              # 第三方依赖包
│── .eslintrc                   # eslint配置
│── Gruntfile.js                # Grunt入口程序配置
└── package.json                # package.json
```

### 开始

[clone](github-windows://openRepo/https://github.com/zhongzhi107/marine-client) 或者 [fork](https://github.com/zhongzhi107/marine-client/fork) marine 仓库:

```shell
$ git clone -o upstream https://github.com/zhongzhi107/marine-client MyApp
$ cd MyApp
$ npm install -g grunt-cli      # Install grunt-cli task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```

### 如何编译

```shell
$ grunt build                   # or, `grunt build --deploy-type=beta`
```

编译默认使用 debug 模式，你可以使用 `--deploy-type` 指定你当前的编译环境，支持四种环境

* 空 － 本地环境
* dev - 开发机环境
* beta － beta测试环境
* prod － 线上生产环境

### 如何运行

```shell
$ grunt                         # or, `grunt server`
```

该命令会启动一个具有LiveReload功能的本地web服务器，便于开发、调试。

### 如何和后端工程关联

前后端代码在开发过程中是在同一个工程中，部署时，需要部署到不同的server上。

使用maven作为前后端工程关联的工具和桥梁，将前端工程中需要copy到后端工程的文件放在 `dist/refs` 目录，在后端工程编译时，maven会讲refs拷贝到后端工程。

<img src="http://simg4.qunarzz.com/site/images/zhuanti/huodong/maven-zhongzhi.png" style="width:100%" alt="maven" />

### 扩展阅读

 * [Getting Started with React.js](http://facebook.github.io/react/)
 * [React.js Wiki on GitHub](https://github.com/facebook/react/wiki)
 * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
 * [React.js Discussion Board](https://groups.google.com/forum/#!forum/reactjs)
 * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
 * [Jest - Painless Unit Testing](http://facebook.github.io/jest/)
 * [Flow - A static type checker for JavaScript](http://flowtype.org/)
 * [The Future of React](https://github.com/reactjs/react-future)
