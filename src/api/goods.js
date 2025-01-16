import request from '@/utils/request'

// 新增拍卖品
export const addgoodsinfo = (data) => {
  return request.post('/auction/auction-item/add', data)
}

// 删除指定id拍卖品
export const deletegoods = (itemId) => {
  return request.delete(`/auction/auction-item/delete/${itemId}`)
}

// 查询指定拍卖品id查询指定拍卖品的详细信息
export const checkgoodsinfo = (auctionItemId) => {
  return request.get(`/auction/auction-item/getByAuctionItemId/${auctionItemId}`)
}

// ------ 这里需要进行修改操作处理,将这里的查找条件改为和之前的原理图基本就可以
// 根据拍卖会id查询拍卖品集合
export const checkgoodscollect = (auctionId) => {
  return request.get(`/auction/auction-item/getItemByAuctionId/${auctionId}`)
}

// 修改拍卖品
export const changegoodsinfo = (data) => {
  return request.post('/auction/auction-item/updateItem', data)
}

// 新增加一个:
// 查看所有的商品的信息
export const checkallgoodsinformation = () => {
  return // 新增加一些商品的所有信息
}
