// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import publicName from '@/api/public.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import store from './store/index.js'
import Axios from 'axios'
import vuex from 'vuex'
//注册图片放大缩小组件
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//引入样式
// import 'common/stylus/index.styl'
Vue.use(Viewer, {
	name:'Viewer',
  defaultOptions: {
    zIndex: 9999
  }
})
//注册公共组件
Vue.use(publicName)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Axios,
  vuex,
  components: { App },
  template: '<App/>'
})
