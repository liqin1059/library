export default {
  setUserName({ commit }, username) {
    commit('setUserName', username);
  },
  setMenuList({ commit }, list) {
    commit('setMenuList', list);
  },
  setProvinceList({ commit }, list) {
    commit('setProvinceList', list);
  },
  setPermissions({ commit }, ary) {
    commit('setPermissions', ary);
  },
  updateEnumSelectData({ commit }, data) {
    commit('updateEnumSelectData', data);
  }
};
