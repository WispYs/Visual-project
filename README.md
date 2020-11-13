## 简介 ##
工业数据可视化项目，采用Webpack + Vue开发，响应式布局支持多平台浏览

### 项目技术栈 ###

1. Webpack
2. Vue
3. ElementUI
4. Vue-router
5. axios
6. sass
7. rem
8. ...

## 安装依赖 ##
- 安装 node@14.15.0: 
  - 前往 [官方地址](https://nodejs.org/en/download/) 下载最新版本并安装。
- 安装 yarn@1.12.3: 
	- 前往 [官方地址](https://www.yarnpkg.com/zh-Hans/docs/install#mac-stable)

- 运行 `npm install` 命令，安装 package.json 里指定的依赖项。
   

## 本地开发 ##
运行 `npm run dev` 会启动一个本地服务器，浏览器能访问到 http://localhost:8080, 说明本地开发环境运行成功。

## 构建生产 ##
运行 `npm run build` 构建命令即会生成或更新 dist 文件夹。


## 目录结构 ##
    |---build                                // webpack相关配置和脚本
    |---config                               // 开发/线上环境配置文件
    |---dist                                 // 打包文件，用于生产部署
    |---docs                                 // 文档(代码规范、git提交规范...)
    |---src 				                 // 存放项目源码及需要引用的资源文件
    |   |---api                              // 后台接口
    |   |---assets                           // 模块资源文件(会经过 webpack 处理)
    |   |   |---images                       // 图片
    |   |   |---styles                       // 样式
    |   |---components                       // 通用组件
    |   |---mock-data                        // 本地测试数据
    |   |---pages                            // 页面组件
    |   |---router                           // 路由
    |   |---services                         // 公共服务
    |   |---store                            // vuex 状态管理
    |   |---App.vue                          // 页面入口文件
    |   |---main.js                          // 应用入口文件
    |---static                               // 纯静态资源
    |---.babelrc                             // bable 转译配置文件
    |---.editorconfig                        // 编辑器配置文件
    |---.gitignore                           // git 忽略的文件
    |---.postcssrc.js                        // postcss 配置文件
    |---index.html                           // 项目模板页
    |---package.json                         // 依赖配置文件
    |---README.md                            // 说明文件  
    |---yarn.lock                            // 依赖锁定文件
  

## Element UI库 ##
element-ui@2.4 是一套基于 vue 2.0 的PC端组件库，有助于方便快捷的实现页面结构与交互。使用方法请查阅[官方文档](http://element.eleme.io/#/zh-CN)。


## 规范文档 ##
docs 文件夹制定了js, css, html等的编码规范，git 的使用规范。为了保证项目编码风格一致，git 使用流程一致，请按照规范文档执行。

