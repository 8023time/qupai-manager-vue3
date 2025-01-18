import request from '@/utils/request'

// 根据拍卖会id查详细信息
export const checkauctioninfo = (data) => {
    return request.get('/auction/auction/{id}',data)
}

// 查询自己举办的拍卖会
export const checkuserauctioninfo = (data) => {
    return request.get('/auction/auction/find',data)
}

// 举办拍卖会
export const startuserauction = (data) => {
    return request.post('/auction/auction/hold',data)
}

// 修改拍卖会信息
export const changeuserauctioninfo = (data) => {
    return request.put('/auction/auction/update',data)
}
