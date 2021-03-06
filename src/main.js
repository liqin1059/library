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

// 导入vue-echarts插件
import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/line';
Vue.component('chart', ECharts);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$toastr = toastr;

import UserLogin from '@/utils/UserLogin';
Vue.prototype.$userLogin = UserLogin;
import Http from '@/utils/HttpUtils';
Vue.prototype.$http = new Http();
import Config from '@/utils/Config';
Vue.prototype.$config = Config;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Http().post('/stl/config/commons', {}, false).then(res => {
//   let code = res.code.substr(res.code.length - 4);
//   $('.page-loading').hide();
//   if (code === '0000') {
//     let data = res.data;
//     let storeData = new Map();
//     for ( var obj in data) {
//       storeData[obj] = data[obj];
//     }
//   // data.map(item => {
//   //   storeData.set(item.groupKey + '', item.items);
//   // });
//     store.dispatch('updateEnumSelectData', storeData);
//     new Vue({
//       el: '#app',
//       router,
//       store,
//       components: { App },
//       template: '<App/>'
//     });
//   } else {
//     toastr.error(res.desc, '错误提示：');
//   }
// });
