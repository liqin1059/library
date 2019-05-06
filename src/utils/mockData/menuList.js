export default [
  {
    url: '/menu/list',
    on: true,
    resp: {
      code: '0000',
      desc: 'ok',
      data: {
        'name': '根节点',
        'icon': '',
        'menuId': 1,
        'sort': 1,
        'type': '1',
        'parentId': 0,
        'childMenus': [
          {
            'name': '首页',
            'icon': 'icon-ziyuan',
            'url': '/index',
            'childMenus': [],
            'menuId': 2,
            'sort': 1,
            'type': '1',
            'parentId': 1
          },
          {
            'name': '经销商管理',
            'icon': 'icon-gongsiqiye',
            'url': '/dealer',
            'childMenus': [],
            'menuId': 5,
            'sort': 2,
            'type': '1',
            'parentId': 1
          },
          {
            'name': '业务人员管理',
            'icon': 'icon-user',
            'url': '/salesperson',
            'childMenus': [],
            'menuId': 2,
            'sort': 3,
            'type': '1',
            'parentId': 1
          },
          {
            'name': '订单管理',
            'icon': 'el-icon-tickets',
            'url': '/orderlist',
            'childMenus': [],
            'menuId': 2,
            'sort': 4,
            'type': '1',
            'parentId': 1
          },
          {
            'name': 'GPS订单',
            'icon': 'el-icon-location-outline',
            'url': '/gpsorder',
            'childMenus': [],
            'menuId': 2,
            'sort': 4,
            'type': '1',
            'parentId': 1
          }
        ]
      }
    }
  }
];
