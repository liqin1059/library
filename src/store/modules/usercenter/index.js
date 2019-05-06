export default {
  state: {
    phone: '15696544221'
  },
  actions: {
    setPhone({ commit }, phoneNumber) {
      commit('setPhone', phoneNumber);
    }
  },
  mutations: {
    setPhone({ state }, phone) {
      state.phone = phone;
    }
  }
};
