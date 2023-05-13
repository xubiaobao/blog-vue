import request from './request.js'

// 获取留言列表
export function getMsg ($data) {
  return request({

    url: '/admin/getMsgList',

    method: 'get',

    params: $data

  })
}

// 添加留言
export function addMsg ($data) {
  return request({

    url: '/admin/addMsg',

    method: 'post',

    $data

  })
}
