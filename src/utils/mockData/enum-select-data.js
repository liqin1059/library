export default [
  {
    url: '/enum',
    on: true,
    resp: {
      'code': '0000',
      'data': [
        {
          'groupDesc': '公司类型枚举',
          'groupKey': 'CompanyTypeEnum',
          'items': [
            {
              'itemCode': '0',
              'itemName': '总公司'
            },
            {
              'itemCode': '1',
              'itemName': '子公司'
            },
            {
              'itemCode': '2',
              'itemName': '门店'
            }
          ]
        },
        {
          'groupDesc': '通用激活冻结枚举',
          'groupKey': 'ActiveStatusEnum',
          'items': [
            {
              'itemCode': 1,
              'itemName': '激活'
            },
            {
              'itemCode': 0,
              'itemName': '冻结'
            }
          ]
        },
        {
          'groupDesc': '证件类型',
          'groupKey': 'CertificateTypeEnum',
          'items': [
            {
              'itemCode': '0',
              'itemName': '居民身份证'
            },
            {
              'itemCode': '2',
              'itemName': '护照'
            },
            {
              'itemCode': '5',
              'itemName': '港澳居民来往内地通行证'
            },
            {
              'itemCode': '6',
              'itemName': '台湾同胞来往内地通行证'
            },
            {
              'itemCode': 'X',
              'itemName': '其他有效证件'
            }
          ]
        },
        {
          'groupDesc': '性别',
          'groupKey': 'SexEnum',
          'items': [
            {
              'itemCode': 1,
              'itemName': '男'
            },
            {
              'itemCode': 2,
              'itemName': '女'
            }
          ]
        }
      ]
    }
  }
];
