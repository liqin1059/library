import Mock from 'mockjs';
import menuList from './menuList';
import enumSelectData from './enum-select-data';
import dataMockjs from './ajax-data-mockjs';
let ary = [
  {
    url: '/ajaxLogin',
    on: true,
    resp: Mock.mock({
      code: '0000',
      success: true,
      data: {
        loginRespVo: {
          token: 'XCSDCSXSDSDS',
          loginName: 'lihuiyang',
          userId: '001'
        }
      },
      desc: 'ok'
    })
  },
  {
    url: '/logout',
    on: true,
    resp: {
      code: '0000',
      success: true,
      desc: 'ok'
    }
  },
  // 文件上传
  {
    url: '/common/down/file',
    on: true,
    resp: Mock.mock({
      code: '0000',
      success: true,
      data: {
        'fileName': '照片',
        'fileSize': 100,
        'suffix': 'jpg',
        'contentType|1': ['身份证正面', '身份证反面', '户口本'],
        'url|1': [
          '@image(\'160x120\', \'#333\', \'#fff\', \'001.jpg\')',
          '@image(\'160x120\', \'#666\', \'#fff\', \'002.jpg\')',
          '@image(\'160x120\', \'#999\', \'#fff\', \'003.jpg\')',
          '@image(\'160x120\', \'red\', \'#fff\', \'004.jpg\')',
          '@image(\'160x120\', \'#2f74c1\', \'#fff\', \'005.jpg\')'
        ]
      },
      desc: 'ok'
    })
  },
  // 地址获取
  {
    url: '/common/region/list',
    on: false,
    resp: Mock.mock({
      code: '0000',
      success: true,
      'body': [
        {
          regionCode: '1',
          regionName: '@province'
        },
        {
          regionCode: '2',
          regionName: '@province'
        },
        {
          regionCode: '3',
          regionName: '@province'
        }
      ]
    })
  },
  // 银行下拉
  {
    url: '/common/support/bank/list',
    on: false,
    resp: Mock.mock({
      code: '0000',
      success: true,
      'body|10': [
        {
          bankCode: '1',
          bankName: '@name'
        }
      ]
    })
  }
];
let result = [
  ...ary,
  ...menuList,
  ...enumSelectData,
  ...dataMockjs
];
export default result;
