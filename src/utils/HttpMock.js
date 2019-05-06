/*
 * Created by MarvenGong on 2017/4/21.
 */
import Mock from 'mockjs';
import MockConfig from './mockData';
import Config from './Config';
class HttpMock {
  constructor() {
    Mock.setup({
      timeout: Config.HTTPMOCK_TIMEOUT
    });
    // 判断是否全局开启mock
    if (!Config.HTTPMOCK_ON) {
      return;
    }
    MockConfig.map(item => {
      // 判断是否单个mock的开启状态
      if (item.on) {
        /* eslint-disable */
        String.prototype.replaceAll = function(s1,s2){
          return this.replace(new RegExp(s1,"gm"),s2);
        };

        let rtype = item.type ? item.type : 'post';
        let url = '';
        let splicUrl = '';
        let _HTTPBASEURL = Config.HTTPBASEURL;
        let _itemUrl = item.url;
        if (/\/{1}$/.test(_HTTPBASEURL)) {
          _HTTPBASEURL = _HTTPBASEURL.substr(0, (_HTTPBASEURL.length - 1));
        }
        if (/^\/{1}/.test(_itemUrl)) {
          _itemUrl = _itemUrl.substr(1);
        }
        splicUrl = _HTTPBASEURL + '/' + _itemUrl;
        if (rtype === 'post') {
          url = splicUrl;
        } else {
          let urlTemp = splicUrl.replaceAll('\/', '\\/');
          urlTemp = urlTemp.replaceAll('\:', '\\:');
          urlTemp = urlTemp.replaceAll('\[\.]', '\\.');
          url = new RegExp('^' + urlTemp + '\\?{0,1}');
        }
        /* eslint-disable */
        Mock.mock(url, () => {
          return item.resp;
        });
      }
    });
  }
}
export default new HttpMock();
