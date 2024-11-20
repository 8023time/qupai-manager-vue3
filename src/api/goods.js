import request from '@/utils/request'

// 新增拍卖品
export const addgoodsinfo = (data) => {
    return request.post('/auction/auction-item/add',data)
}

// 删除指定id拍卖品
export const deletegoods = (data) => {
    return request.delete('/auction/auction-item/delete/{itemId}',data)
}

// 查询指定拍卖品id查询指定拍卖品的详细信息
export const checkgoodsinfo = (data) => {
    return request.get('/auction/auction-item/getByAuctionItemId/{auctionItemId}',data)
}

// 根据拍卖会id查询拍卖品集合
export const checkgoodscollect = (data) => {
    return request.get('/auction/auction-item/getItemByAuctionId/{auctionId}',data)
}

// 修改拍卖品
export const changegoodsinfo = (data) => {
    return request.post('/auction/auction-item/updateItem',data)
}