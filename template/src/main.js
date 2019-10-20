import 'babel-polyfill'
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

// 项目默认使用sass

import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'

{{#router}}
import router from './router'
{{/router}}

// 不使用自定义样式请qing注释下面的内容，并开启默认样式
import '../theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css'

// 引入自定义样式
import './assets/css/reset.scss'
import './assets/css/common.scss'

// 全局接口
import api from './http/api/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
