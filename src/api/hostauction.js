import request from '@/utils/request'

// 根据拍卖会id结束拍卖会
export const startauction = (data) => {
    return request.post('/auction/host/end/{auctionId}',data)
}

// 根据拍卖会id开始拍卖会
export const stopauction = (data) => {
    return request.post('/auction/host/start/{auctionId}',data)
}