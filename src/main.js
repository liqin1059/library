// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue2-animate/dist/vue2-animate.min.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

import Http from '@/utils/HttpUtils';
Vue.prototype.$http = new Http();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
