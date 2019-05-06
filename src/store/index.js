import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import mutations from './mutations';
import usercenter from './modules/usercenter';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    elTableModalWidth: '1200px', // 对element-ui中“el-dialog”（对话框）组件内是table的宽度设定
    elFormModalWidth: '480px', // 对element-ui中“el-dialog”（对话框）组件内是form表单的宽度设定
    global: {
      username: '',
      menuList: [],
      provinceList: [], // 获取省份的数据
      permissions: [],
      enumSelectData: null
    },
    // 渠道录单系统的录单类型(订单管理)
    busCustType: {
      personal: 1, // 个人录单
      enterprise: 2 // 企业录单
    }
  },
  getters: {
    menuList(state) {
      return state.global.menuList;
    },
    provinceList(state) {
      return state.global.provinceList;
    },
    permissions(state) {
      return state.global.permissions;
    },
    enumSelectData(state) {
      return state.global.enumSelectData;
    },
    viewWidth() {
      /* window.onresize = () => {
        _winWidth = document.documentElement.clientWidth;
      };*/
      return document.documentElement.clientWidth;
    }
  },
  modules: {
    usercenter
  },
  actions,
  mutations
});
