// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import VueResource from 'vue-resource'//导入vue-resource
Vue.use(VueResource)//安装vue-resource
// Vue.http.options.root='/http://vue.studyit.io';//设置请求的根路径
// mint-ui
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import moment from 'moment'//导入格式化时间插件
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})
Vue.use(require('vue-moment'))

//缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
