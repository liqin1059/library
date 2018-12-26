// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import toastr from 'toastr';
import router from './router';
import 'toastr/toastr.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue2-animate/dist/vue2-animate.min.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
import {
  MessageBox,
  Message
} from 'element-ui';
import UserLogin from '@/utils/UserLogin';
Vue.prototype.$userLogin = UserLogin;
import Http from '@/utils/HttpUtils';
Vue.prototype.$http = new Http();
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
