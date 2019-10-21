### cds-template

> 项目为vue-cli2的模板文件
>
> 使用方式和vue-cli一样，模板内部封装好了部分工具

项目地址： https://github.com/mengmeng-zhang/cds-template

喜欢的请给个star哦

#### 使用方法：

1. 安装vue-cli

```bash
# npm
npm install -g @vue/cli-init
# yarn
yarn global add @vue/cli-init
```

#### 使用模板

```
vue init mengmeng-zhang/cds-template project-name
```

整个流程和vue-cli的流程一样，一路配置下来，项目自动安装对应的包，
最后同样会出现 cd myapp /  npm run dev


#### 项目目录结构

- build/config目录为项目构建相关目录
- src 为项目源码存放处
  - assets 静态文件存放处
  - components 组件
  - http 为ajax相关
  - mixins 混入相关
  - pages 页面
  - router 路由
  - utils  工具相关
- theme  elementUI 主题
- element-variables.scss  elementUI 样式修改处



**模板内部封装了基本的ajax，并在main.js中定义了$api**

```js
Vue.prototype.$api = api
```

```js
// 定义接口
// http/api/index.js中定义接口，当然也可以自定义具体路径
import Http from './http';

export default class DempApi extends Http{
    DempApi(params){
        return this.instance.post(`/`, params);
    }
}
```

```js
// 定义完毕后在http/api.js中引入刚刚定义的接口
import DempApi from './api/index'

export default {
  DempApi: new DempApi()
}
```

```js
// ajax使用
this.$api.DempApi.DempApi(params).then(...)
```

具体ajax配置请自行下载模板查看

**utils目录中定义了基本的工具**

- config.js     # 公共变量
- eventVue.js    # bus vue
- index.js     # 工具集
- loading.js     #加载的模态层
- storage.js     # localStorage/sessionStorage 封装

**assets目录为静态文件目录**

- css     样式文件

  - common.scss    # 公共样式
  - func      #scss 公共方法
  - minix.scss    # scss混合宏
  - reset.scss   # 样式初始化
  - var.scss    # scss变量

- svg   存放svg图标，配合components目录下的icon组件一起使用

  - 使用方法

  - ```vue
    // 引入
    import Icon from './components/pubilc/icon'   // 引入路径参照自己的项目
    // 使用
    <Icon name="logo" :style="{width: '54px', height: '22px'}" />
    // name: svg的名称
    // style： 样式， 默认为width: 20px; height: 20px
    ```

模板默认使用scss编写css， 并且初始化时安装好了node-sass和sass-loader，并默认安装了elementUI，对于个性化定制elementUI样式的，可以在目录中找到theme文件夹和element-variables.scss自行修改定义样式