import Vue from 'vue';
import store from '@/store';
Vue.filter('dateFormat', time => {
  if (time === '') {
    return '暂无数据';
  } else {
    return time;
  }
});
Vue.filter('enumCode2Name', (code, enumType) => {
  let enumSelectData = store.getters.enumSelectData;
  let selects = enumSelectData.get(enumType);
  let name = '';
  selects.map(item => {
    if (item.itemCode === (code + '')) {
      name = item.itemName;
    }
  });
  return name;
});
