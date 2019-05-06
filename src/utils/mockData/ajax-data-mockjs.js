import Mock from 'mockjs';
export default [
  // 查询征信失败原因列表
  /* eslint-disable */
  {
    url: '/bmcDealer/selectBmcDealer',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {
        'pageNum': 1,
        'totalRecord': 24,
        'dataList|10': [
          {
            'name': /经销商名称[A-Z0-9]{2,4}/,
            'uniteCreditCode': /[A-Za-z0-9]{12,18}/,
            'contractsTel': /1[0-9]{10}/,
            'contractsPerson': '@cname()',
            'id': /1[0-9]{1}/,
            'address': /经销商地址(mockjs)--[0-9]{8}/
          }
        ]
      }
    })
  },
  // 新增经销商
  {
    url: '/bmcDealer/addBmcDealer',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {}
    })
  },
  // 修改经销商
  {
    url: '/bmcDealer/updateBmcDealer',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {}
    })
  },
  // 删除经销商
  {
    url: '/bmcDealer/deleteBmcDealer',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {}
    })
  },
  // 新增业务人员
  {
    url: '/bmcDealer/addBmcDealerPerson',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {}
    })
  },
  // 修改业务人员
  {
    url: '/bmcDealer/updateBmcDealerPerson',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {}
    })
  },
  // 删除业务人员
  {
    url: '/bmcDealer/deleteBmcDealerPerson',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {}
    })
  },
  {
    url: '/bmcDealer/selectBmcDealerPerson',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {
        'pageNum': 1,
        'totalRecord': 24,
        'dataList|10': [
          {
            'dealerName': /经销商名称[A-Z0-9]{2,4}/,
            'personName': /业务人员名称[A-Z0-9]{2,4}/,
            'idCardNo': /[A-Za-z0-9]{12,18}/,
            'contractsTel': /1[0-9]{10}/,
            'id': /1[0-9]{1}/,
            'dealerId': /1[0-9]{3}/,
            'address': /经销商地址(mockjs)--[0-9]{8}/,
            'roleId': '3'
          }
        ]
      }
    })
  },
  {
    url: '/order/getBmcOrder',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': {
        'pageNum': 1,
        'totalRecord': 24,
        'dataList|10': [
          {
            'appId': /bizNo[A-Z0-9]{10}/,
            'cusName': '@cname()',
            'appName': /项目名称[A-Za-z0-9]{4,8}/,
            'pactNo': /[A-Za-z0-9]{12,18}/,
            'appAmt': /1[0-9]{4,6}/,
            'busStage': /1[0-9]{4,6}/,
            'term|1-36': 1,
            'regTime': '@DATETIME("yyyy-MM-dd HH:mm:ss")',
            'fileDataButton|1': ['0', '1'],
            'downPactButton|1': ['0', '1'],
            'pactDataButton|1': ['0', '1'],
            'gpsButton|1': ['0', '1'],
            'pledgeButton|1': ['0', '1']
          }
        ]
      }
    })
  },
  // 补件
  {
    url: '/order/file/getFileList',
    on: true,
    resp: Mock.mock({
      'code': '0000',
      'desc': 'ok',
      'success': true,
      'data': [
        {
          'fileDesc': '需正反两面',
          'fileList': [
            {
              // 'bizNo': '20181122092636726031000057',
              // 'createTime': '2019-04-01',
              // 'fileCustphone': '430603198309194527',
              // 'fileId': '8e0f466a77fba81c9d1fce5d5a94092ec420fe641e91894b6011bb7abedbe05dad389a4211e7dd7846e0a40e6dbaafecaa787eb4c1cc0e25ae3e17c7867c071c',
              'fileName': 'wzry (17).jpg',
              // 'fileStatus': 1,
              // 'fileSubfix': 'jpg',
              // 'fileType': 'PI01',
              // 'fileUploaduser': '430603198309194527',
              'id': 82799,
              // 'updateTime': '2019-04-01',
              // 'uploadUsername': '张大大03',
              'deleteable': '0',
              'url': 'https://oaimage.haiermoney.com/20190307g3app3lacompress.jpg'
            }
          ],
          'fileName': '身份证(正反面）/护照',
          'fileType': 'PI01',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 1,
          'relationShipVOS': [
            {
              'familyCustName': '张大大03',
              'paperId': '430603198309194527',
              'paperKind': '0'
            },
            {
              'familyCustName': '石改玲',
              'paperId': '610527199102024946',
              'paperKind': '0'
            }
          ]
        },
        {
          'fileDesc': '提供户口簿全本',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'f49c7bb700d3c4a2450759e45ecd8a038bac13d107f5b84b15925a4913243ec79f2e92429bfdc791ed7716eb5de0a971f4454b88cc7a4bb61f353496ab38aa6a',
              'fileName': 'timg (4).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'PI03',
              'fileUploaduser': '430603198309194527',
              'id': 78753,
              'deleteable':'1',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=f49c7bb700d3c4a2450759e45ecd8a038bac13d107f5b84b15925a4913243ec79f2e92429bfdc791ed7716eb5de0a971f4454b88cc7a4bb61f353496ab38aa6a'
            }
          ],
          'fileName': '户口本',
          'fileType': 'PI03',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 1,
          'relationShipVOS': [
            {
              'familyCustName': '张大大03',
              'paperId': '430603198309194527',
              'paperKind': '0'
            },
            {
              'familyCustName': '石改玲',
              'paperId': '610527199102024946',
              'paperKind': '0'
            }
          ]
        },
        {
          'fileDesc': '需正反两面',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '44dc9fd3cacc190cef4e4d20bd136b783d91651a5d846aab0e56a27da643c60599b2b094528e71ccf7b40ba677603027c6ea25ecaf3fec240d5a1b6c7ac06072',
              'fileName': 'timg (1).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'PI04',
              'deleteable': '1',
              'fileUploaduser': '430603198309194527',
              'id': 78765,
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=44dc9fd3cacc190cef4e4d20bd136b783d91651a5d846aab0e56a27da643c60599b2b094528e71ccf7b40ba677603027c6ea25ecaf3fec240d5a1b6c7ac06072'
            }
          ],
          'fileName': '配偶身份证/护照',
          'fileType': 'PI04',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '需正反两面',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '93e61e844f554f822b7375432f7fd3a4407569e401961aaca532f2c8aa32e3f38dcbb4322d811f2025de2cc379ea11edd539a7fd0278af0364896314f38b0cbd',
              'fileName': 'timg (2).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'PM01',
              'deleteable': '1',
              'fileUploaduser': '430603198309194527',
              'id': 78766,
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=93e61e844f554f822b7375432f7fd3a4407569e401961aaca532f2c8aa32e3f38dcbb4322d811f2025de2cc379ea11edd539a7fd0278af0364896314f38b0cbd'
            }
          ],
          'fileName': '结婚证',
          'fileType': 'PM01',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '华夏助贷业务必须上传',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '010a8c63af2758ce8b41bf3a1d555212c6694b2e5804af7b445cea11831712d4d7d79403317c212556c50f5265f76f8228fc5426ded24ab65e86db9ffc2096f3',
              'fileName': '大白.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'PE01',
              'fileUploaduser': '430603198309194527',
              'id': 78755,
              'deleteable': '1',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=010a8c63af2758ce8b41bf3a1d555212c6694b2e5804af7b445cea11831712d4d7d79403317c212556c50f5265f76f8228fc5426ded24ab65e86db9ffc2096f3'
            }
          ],
          'fileName': '银行流水（个人）',
          'fileType': 'PE01',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '提供借款人及其配偶的征信授权书（若需要查询则提供清晰完整授权书手持拍照），如有自查征信报告亦需要提供（有效期30天）',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2019-04-01',
              'fileCustphone': '430603198309194527',
              'fileId': '1010e39eca33cc727a5fc8646365c94bc889a4b40aaf8725a3c7d00ca9e74f3fb44b8bfac906233f9232ad72bb63f153cb57ec1e7c7a180fad2fc47e5bc0cdca',
              'fileName': 'wzry (15).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'PC01',
              'fileUploaduser': '430603198309194527',
              'id': 82798,
              'deleteable': '1',
              'updateTime': '2019-04-01',
              'uploadUsername': '张大大03',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=1010e39eca33cc727a5fc8646365c94bc889a4b40aaf8725a3c7d00ca9e74f3fb44b8bfac906233f9232ad72bb63f153cb57ec1e7c7a180fad2fc47e5bc0cdca'
            }
          ],
          'fileName': '个人征信授权书（资方）',
          'fileType': 'PC01',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 1,
          'relationShipVOS': [
            {
              'familyCustName': '张大大03',
              'paperId': '430603198309194527',
              'paperKind': '0'
            },
            {
              'familyCustName': '石改玲',
              'paperId': '610527199102024946',
              'paperKind': '0'
            }
          ]
        },
        {
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'ec7ff017946a4bcce3c2a0a5fa2c2a49a5ae17820517a239b490e3898a59324b2c4eca2ae9324412e009474b550cbbd0f6e3d4e53987808daa4787624cc2b236',
              'fileName': 'business.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78769,
              'deleteable': '1',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=ec7ff017946a4bcce3c2a0a5fa2c2a49a5ae17820517a239b490e3898a59324b2c4eca2ae9324412e009474b550cbbd0f6e3d4e53987808daa4787624cc2b236'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-26',
              'fileCustphone': '430603198309194527',
              'fileId': 'e5cf6b1d970356dd2e5a1daa007e37841ebe51c948fafb035642498601ffdd203093eae2f9cc00daabc1c719cf5d818f29e575040eb942f517112eba6e515099',
              'fileName': 'business.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 79421,
              'deleteable': '1',
              'updateTime': '2018-11-26',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=e5cf6b1d970356dd2e5a1daa007e37841ebe51c948fafb035642498601ffdd203093eae2f9cc00daabc1c719cf5d818f29e575040eb942f517112eba6e515099'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '24d47edb7f95d29cfc490afb054156f3902630668ecb186e4c4d45d659a347629fb3bba3b8d1859085bf764087bd1bcaacc537e4a332ddd5eda8cc1dba6fe022',
              'fileName': 'timg (1).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78785,
              'deleteable': '1',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=24d47edb7f95d29cfc490afb054156f3902630668ecb186e4c4d45d659a347629fb3bba3b8d1859085bf764087bd1bcaacc537e4a332ddd5eda8cc1dba6fe022'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'd7725ca5a3f0c2a4040d73a0edc71efecd95a3a98ba77eeeb2a6a7d853d9da40456aa121cd88cb490692c6439e10efab1284c613ef19b61003a7eb3fb05d3b5b',
              'fileName': '华夏申请书.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78786,
              'deleteable': '1',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=d7725ca5a3f0c2a4040d73a0edc71efecd95a3a98ba77eeeb2a6a7d853d9da40456aa121cd88cb490692c6439e10efab1284c613ef19b61003a7eb3fb05d3b5b'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '9fe8bf0c07311aaf271413c8f506a1a5d0f586bf045c64a61c619073b9ba4071db1cfbd10217d05d4e113b801ea2a6f8cd53587bb04169f9d00454d4f85e475a',
              'fileName': '营业执照图片.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78794,
              'deleteable': '1',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=9fe8bf0c07311aaf271413c8f506a1a5d0f586bf045c64a61c619073b9ba4071db1cfbd10217d05d4e113b801ea2a6f8cd53587bb04169f9d00454d4f85e475a'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '4b9cb1424ba131d2044731e3f3f5ca8373a331d3a4161c8752c1cb37b1adb07ac1f5ab0d625aa69aee5db8a3ad0e533c6cec1d87a78619b70b1d47d0b711076f',
              'fileName': '营业执照图片.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78796,
              'deleteable': '1',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=4b9cb1424ba131d2044731e3f3f5ca8373a331d3a4161c8752c1cb37b1adb07ac1f5ab0d625aa69aee5db8a3ad0e533c6cec1d87a78619b70b1d47d0b711076f'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-26',
              'fileCustphone': '430603198309194527',
              'fileId': 'e0a236d7dbd83f7612b5b60725f8bd634dfae60e6c64d90ab64d803a8d187d8a2f0d4cea03f594964569cd9d08f4856aa7f2e2939e538882e8dc13e0b0bf351d',
              'fileName': '营业执照图片.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 79405,
              'deleteable': '0',
              'updateTime': '2018-11-26',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=e0a236d7dbd83f7612b5b60725f8bd634dfae60e6c64d90ab64d803a8d187d8a2f0d4cea03f594964569cd9d08f4856aa7f2e2939e538882e8dc13e0b0bf351d'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-12-13',
              'fileCustphone': '430603198309194527',
              'fileId': '722597d116310ef67d9069dde13d18a9a3c535f8f4f086ab762f386c186eca101367cd38b8c736c24ff541bff599c885eff21a491647aed9d45c13db03436c67',
              'fileName': '营业执照图片.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 81039,
              'deleteable': '0',
              'updateTime': '2018-12-13',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=722597d116310ef67d9069dde13d18a9a3c535f8f4f086ab762f386c186eca101367cd38b8c736c24ff541bff599c885eff21a491647aed9d45c13db03436c67'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '205939294a1394e5e298bb309f6aecf4b01906dbc17fc902540e942ca7943c75d89310109d8533014a749d17c62f1eff38a790cbe120ed298f510ba04526231b',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78768,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=205939294a1394e5e298bb309f6aecf4b01906dbc17fc902540e942ca7943c75d89310109d8533014a749d17c62f1eff38a790cbe120ed298f510ba04526231b'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'c45075bc6b1dfbf470e10910e6b25fd433aa252d366e09567df6ae76a9eb3a37129a8605677e34cd7a8c4a88ddedaddc38a92a863da318b373696c60d319acf7',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78787,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=c45075bc6b1dfbf470e10910e6b25fd433aa252d366e09567df6ae76a9eb3a37129a8605677e34cd7a8c4a88ddedaddc38a92a863da318b373696c60d319acf7'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '46a9e245378b2d0712015501d133d0a9e42425703f2966f4ecb78ced7956f43d24bddb7c2e102f2a3355e9f04ae4cae3ac53c111c74f628e7ca5c280ce9b2388',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78788,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=46a9e245378b2d0712015501d133d0a9e42425703f2966f4ecb78ced7956f43d24bddb7c2e102f2a3355e9f04ae4cae3ac53c111c74f628e7ca5c280ce9b2388'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '238510192352b10e53a27f10fcb5e81a079585bcc4350113d6f03452fdd355546f6bf31493504e2a2bfaa492c105a4f76c1a4d6434b116afd386194c6ea6ce2b',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78789,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=238510192352b10e53a27f10fcb5e81a079585bcc4350113d6f03452fdd355546f6bf31493504e2a2bfaa492c105a4f76c1a4d6434b116afd386194c6ea6ce2b'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '7e04f3d862b8ad12d11d5975acd33e7716f7684fecff170bfdd82831e12c61ff28732de81c459ddda767d2ef7e590961097418b7718f15b362fefa84214343e4',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78790,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=7e04f3d862b8ad12d11d5975acd33e7716f7684fecff170bfdd82831e12c61ff28732de81c459ddda767d2ef7e590961097418b7718f15b362fefa84214343e4'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'd4b1092c9b3a7b9e1987db21d77ff09caeec764bda6928266db2faaa01bc3bdc5d93b08f5612823645c54d13172f2c347ca635aaf48c6e4f162623f5a5126a33',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78791,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=d4b1092c9b3a7b9e1987db21d77ff09caeec764bda6928266db2faaa01bc3bdc5d93b08f5612823645c54d13172f2c347ca635aaf48c6e4f162623f5a5126a33'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'cdaedb7b3691563681f509fa9d8e118ab1a8956aea0047c0859391dd42a45131a37a9ac2d278259a5b9224e192a1a0db9feae6728fe5016444c58e20aa66c0aa',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78792,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=cdaedb7b3691563681f509fa9d8e118ab1a8956aea0047c0859391dd42a45131a37a9ac2d278259a5b9224e192a1a0db9feae6728fe5016444c58e20aa66c0aa'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'f2238ea7152b6118a5034c140c700c737e3387a95bfc69aabe0300036b359d85f35f5e1c93bf00de43c7ca4eb3531eae208d11fd56cf842850c29b050f34d327',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78797,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=f2238ea7152b6118a5034c140c700c737e3387a95bfc69aabe0300036b359d85f35f5e1c93bf00de43c7ca4eb3531eae208d11fd56cf842850c29b050f34d327'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'e92a8fb66459af5c5efe7a05f433274c0f4d7b0a5a3621a88efe9fc17ef688b6cb91ffe43a3345b4006ac97fd7a669f2c4f01eb2875cc4890b4d65114d8e2174',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78901,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=e92a8fb66459af5c5efe7a05f433274c0f4d7b0a5a3621a88efe9fc17ef688b6cb91ffe43a3345b4006ac97fd7a669f2c4f01eb2875cc4890b4d65114d8e2174'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-26',
              'fileCustphone': '430603198309194527',
              'fileId': '9d417279e24a5a1dc013b5ed84c44d479eb17a2760d7e221ff93890b82943f2aa765b53e9ce76ea2c4af933a1aefeb4ffe1f01b4882252bbd1d55fbfec2ddb2a',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 79385,
              'deleteable': '0',
              'updateTime': '2018-11-26',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=9d417279e24a5a1dc013b5ed84c44d479eb17a2760d7e221ff93890b82943f2aa765b53e9ce76ea2c4af933a1aefeb4ffe1f01b4882252bbd1d55fbfec2ddb2a'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-26',
              'fileCustphone': '430603198309194527',
              'fileId': '53e7addc5e6f1cc5ad38076d622af1fe3a1b1704452f71ba2170f9f5034917f1f671758d6df57692e8d64e7c5e57f375c72300ea61b2d2497a21d410cefe1460',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 79386,
              'deleteable': '0',
              'updateTime': '2018-11-26',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=53e7addc5e6f1cc5ad38076d622af1fe3a1b1704452f71ba2170f9f5034917f1f671758d6df57692e8d64e7c5e57f375c72300ea61b2d2497a21d410cefe1460'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-26',
              'fileCustphone': '430603198309194527',
              'fileId': '361de54fcf2adad495f9cae28d26fb14291ff45614c40a126b149164bf7349e0920ebe9bd9deb5641752b66c3a804a22ed86c3e1efd4fc65143bcef8c5a82632',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 79402,
              'deleteable': '0',
              'updateTime': '2018-11-26',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=361de54fcf2adad495f9cae28d26fb14291ff45614c40a126b149164bf7349e0920ebe9bd9deb5641752b66c3a804a22ed86c3e1efd4fc65143bcef8c5a82632'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-26',
              'fileCustphone': '430603198309194527',
              'fileId': '923c728799d74bade87330c1042117849c635848ff23ca049a87aa0c1768d1a164436f3964c23dd440c5c8dacbf6b6af9a4d60ba41c0ff4047120639fa979568',
              'fileName': '111.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 79406,
              'deleteable': '0',
              'updateTime': '2018-11-26',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=923c728799d74bade87330c1042117849c635848ff23ca049a87aa0c1768d1a164436f3964c23dd440c5c8dacbf6b6af9a4d60ba41c0ff4047120639fa979568'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'cb5e6a764d7fd37ef2dfec23ec7828779d0ad27b21faeeef806ff8abdb3235edf10439ca097dbf0e20914e67d44b48f677eded56e6e93ae00fe9dca4ffc9d458',
              'fileName': '321g.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78793,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=cb5e6a764d7fd37ef2dfec23ec7828779d0ad27b21faeeef806ff8abdb3235edf10439ca097dbf0e20914e67d44b48f677eded56e6e93ae00fe9dca4ffc9d458'
            },
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'ed18d7bdecc363f44fd86e19816626c0fc013f772a7c6841ccfe3af93848b67a2de53bc30e404ddffdef0e0481acade417e2e3d4017e7882800c8f2a908849c0',
              'fileName': '321g.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CI01',
              'fileUploaduser': '430603198309194527',
              'id': 78795,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=ed18d7bdecc363f44fd86e19816626c0fc013f772a7c6841ccfe3af93848b67a2de53bc30e404ddffdef0e0481acade417e2e3d4017e7882800c8f2a908849c0'
            }
          ],
          'fileName': '营业执照',
          'fileType': 'CI01',
          'groupId': 3,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '华夏助贷业务必须上传',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': 'f48ebe9c15d61157fee08dc07fe91ece71cc42857b8651c7d21f96d7948f2ebe34056381dde45ca18505ec242e0e69f32921faa18edba081b1c845bcc3494bc3',
              'fileName': '机器猫.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'CE02',
              'fileUploaduser': '430603198309194527',
              'id': 78757,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=f48ebe9c15d61157fee08dc07fe91ece71cc42857b8651c7d21f96d7948f2ebe34056381dde45ca18505ec242e0e69f32921faa18edba081b1c845bcc3494bc3'
            }
          ],
          'fileName': '经营类合同',
          'fileType': 'CE02',
          'groupId': 3,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2019-04-12',
              'fileCustphone': '430603198309194527',
              'fileId': '4f59b181841399bf4e20d126482b94be26c5862d12bc14c0d17b1133da1185c74ccd92a5346141a78d6615646d87017b9f9fc610e1c3c41164cb2e7a2433d1da',
              'fileName': 'wzry (15).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'D001',
              'fileUploaduser': '430603198309194527',
              'id': 83786,
              'deleteable': '0',
              'updateTime': '2019-04-12',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=4f59b181841399bf4e20d126482b94be26c5862d12bc14c0d17b1133da1185c74ccd92a5346141a78d6615646d87017b9f9fc610e1c3c41164cb2e7a2433d1da'
            }
          ],
          'fileName': '资方授信申请书',
          'fileType': 'D001',
          'groupId': 1,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '81300ecd1492417d220f852f76a42d613e34dd779789bf67b1b43d26f8cc58e499283291d8a9390ba783ecb8a97251e3c1b4ee17fbab831be75bbe7678a1d2e9',
              'fileName': '大白.jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'SH02',
              'fileUploaduser': '430603198309194527',
              'id': 78759,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=81300ecd1492417d220f852f76a42d613e34dd779789bf67b1b43d26f8cc58e499283291d8a9390ba783ecb8a97251e3c1b4ee17fbab831be75bbe7678a1d2e9'
            }
          ],
          'fileName': '抵押房产证复印件',
          'fileType': 'SH02',
          'groupId': 4,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '非必输，仅房产出租状态提供',
          'fileList': [

          ],
          'fileName': '抵押房出租合同',
          'fileType': 'SH05',
          'groupId': 4,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '需正反两面',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '471989fad025ea02dc720305b3e1c7296554d139e1b28817f969b98106d83e3e31764b61b8218d0eaafb3e832e88c84c068da703966f2c9105eeaa90225b9dc2',
              'fileName': 'timg (4).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'SI01',
              'fileUploaduser': '430603198309194527',
              'id': 78760,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=471989fad025ea02dc720305b3e1c7296554d139e1b28817f969b98106d83e3e31764b61b8218d0eaafb3e832e88c84c068da703966f2c9105eeaa90225b9dc2'
            }
          ],
          'fileName': '抵押人本人身份证',
          'fileType': 'SI01',
          'groupId': 4,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '531789f172d9575134b97657ddf1d21e173af5b5a199dcd14592e9b4021acad347beecf63c734a4b30ed1bd580154a53e126638653f46b47fabd9e99258a28f7',
              'fileName': 'timg (3).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'SI02',
              'fileUploaduser': '430603198309194527',
              'id': 78767,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=531789f172d9575134b97657ddf1d21e173af5b5a199dcd14592e9b4021acad347beecf63c734a4b30ed1bd580154a53e126638653f46b47fabd9e99258a28f7'
            }
          ],
          'fileName': '抵押人配偶身份证',
          'fileType': 'SI02',
          'groupId': 4,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '提供户口簿全本',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '1f6c800ec2a16311c0e32bce6ce9eae65d480d0035b01b5cb0219e4d86fdb7c63f8aaf4b45322b80fd193bc9f425a7376db3694e35cb55a7c2a73b096018d297',
              'fileName': 'timg (3).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'SI03',
              'fileUploaduser': '430603198309194527',
              'id': 78761,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=1f6c800ec2a16311c0e32bce6ce9eae65d480d0035b01b5cb0219e4d86fdb7c63f8aaf4b45322b80fd193bc9f425a7376db3694e35cb55a7c2a73b096018d297'
            }
          ],
          'fileName': '抵押人户口薄',
          'fileType': 'SI03',
          'groupId': 4,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '9dd10e89d90bee9eac06f6bde9431d816302a3370435421e4e484b830cd4c1d9592caa0794070712db51dbc01e4be9cc42437049d408d14f642d77607bce9aac',
              'fileName': 'timg (3).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'SI04',
              'fileUploaduser': '430603198309194527',
              'id': 78764,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=9dd10e89d90bee9eac06f6bde9431d816302a3370435421e4e484b830cd4c1d9592caa0794070712db51dbc01e4be9cc42437049d408d14f642d77607bce9aac'
            }
          ],
          'fileName': '抵押人婚姻证明',
          'fileType': 'SI04',
          'groupId': 4,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '当营业执照类型为非个体工商户，且借款人姓名不等于法定代表人姓名，则经营资格说明为必传，其他情况非必传',
          'fileList': [

          ],
          'fileName': '经营资格说明',
          'fileType': 'CC03',
          'groupId': 3,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '非必输，仅房产出租状态提供',
          'fileList': [

          ],
          'fileName': '承租人声明',
          'fileType': 'LC10',
          'groupId': 4,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '身份证(反面)',
          'fileType': 'PI02',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 1,
          'relationShipVOS': [
            {
              'familyCustName': '张大大03',
              'paperId': '430603198309194527',
              'paperKind': '0'
            },
            {
              'familyCustName': '石改玲',
              'paperId': '610527199102024946',
              'paperKind': '0'
            }
          ]
        },
        {
          'fileList': [

          ],
          'fileName': '活体照片/手持照片',
          'fileType': 'PI99',
          'groupId': 2,
          'isBlank|1': [0, 1],
          'isClassify': 1,
          'relationShipVOS': [
            {
              'familyCustName': '张大大03',
              'paperId': '430603198309194527',
              'paperKind': '0'
            },
            {
              'familyCustName': '石改玲',
              'paperId': '610527199102024946',
              'paperKind': '0'
            }
          ]
        },
        {
          'fileDesc': '',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '79d4e532491059fe1f7729128245c2adfb8d25adb468661447f71ba7274be5f83257d9a43393e412892cb1c83e22611c229258b3f3c86ec78f11a80ce38a1085',
              'fileName': 'timg (3).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'D002',
              'fileUploaduser': '430603198309194527',
              'id': 78762,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=79d4e532491059fe1f7729128245c2adfb8d25adb468661447f71ba7274be5f83257d9a43393e412892cb1c83e22611c229258b3f3c86ec78f11a80ce38a1085'
            }
          ],
          'fileName': '云贷授信申请书',
          'fileType': 'D002',
          'groupId': 1,
          'isBlank|1': [0, 1],
          'isClassify': 0
        },
        {
          'fileDesc': '',
          'fileList': [
            {
              'bizNo': '20181122092636726031000057',
              'createTime': '2018-11-22',
              'fileCustphone': '430603198309194527',
              'fileId': '05e8d6884cac8bcc6da3524a5d5106cba37505067ccdea20a4c842e5ae4d94ca21e79ebd76666f55550cd55be748420a41c2acfd0094fc92fbb5d2a5b2d3c6a2',
              'fileName': 'timg (2).jpg',
              'fileStatus': 1,
              'fileSubfix': 'jpg',
              'fileType': 'PC03',
              'fileUploaduser': '430603198309194527',
              'id': 78763,
              'deleteable': '0',
              'updateTime': '2018-11-22',
              'url': 'https://opentest.haiermoney.com:18980/resources/index.php/home/index/down_mod?id=05e8d6884cac8bcc6da3524a5d5106cba37505067ccdea20a4c842e5ae4d94ca21e79ebd76666f55550cd55be748420a41c2acfd0094fc92fbb5d2a5b2d3c6a2'
            }
          ],
          'fileName': '征信授权书（云贷版）',
          'fileType': 'PC03',
          'groupId': 2,
          'isBlank': 1,
          'isClassify': 1,
          'relationShipVOS': [
            {
              'familyCustName': '张大大03',
              'paperId': '430603198309194527',
              'paperKind': '0'
            },
            {
              'familyCustName': '石改玲',
              'paperId': '610527199102024946',
              'paperKind': '0'
            }
          ]
        },
        {
          'fileList': [

          ],
          'fileName': 'CA单位数字证书申请及授权委托书（海融易）',
          'fileType': 'PC04',
          'groupId': 2,
          'isBlank': 0,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '公司征信信息查询及采集授权书（海融易）',
          'fileType': 'PC05',
          'groupId': 2,
          'isBlank': 0,
          'isClassify': 0
        },
        {
          'fileDesc': '30天内央行征信',
          'fileList': [

          ],
          'fileName': '个人征信报告',
          'fileType': 'PC02',
          'groupId': 2,
          'isBlank': 0,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '其他资料',
          'fileType': 'P999',
          'groupId': 2,
          'isBlank': 0,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '抵押房下户照片及调查报告',
          'fileType': 'SH03',
          'groupId': 4,
          'isBlank': 1,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '购房合同',
          'fileType': 'SH01',
          'groupId': 4,
          'isBlank': 0,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '抵押房进件产调',
          'fileType': 'SH04',
          'groupId': 4,
          'isBlank': 1,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '备用房产证复印件',
          'fileType': 'SH06',
          'groupId': 4,
          'isBlank': 0,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '备用房下户照片',
          'fileType': 'SH07',
          'groupId': 4,
          'isBlank': 0,
          'isClassify': 0
        },
        {
          'fileList': [

          ],
          'fileName': '备用房产调',
          'fileType': 'SH08',
          'groupId': 4,
          'isBlank': 0,
          'isClassify': 0
        }
      ]
    })
  }
];
