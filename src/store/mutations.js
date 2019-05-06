export default {
  setUserName({ state }, username) {
    state.global.username = username;
  },
  setMenuList(state, list) {
    state.global.menuList = list;
  },
  setProvinceList(state, list) {
    state.global.provinceList = list;
  },
  setPermissions(state, ary) {
    state.global.permissions = ary;
  },
  updateEnumSelectData(state, data) {
    state.global.enumSelectData = data;
  }
};
