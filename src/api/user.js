import request from '@/utils/request'

// 查询个人信息
export const ckeckuserinfo = (data) => {
    return request.get('/auction/auctioneer/info',data)
}

// 拍卖师登录
export const userloginservice = ({username, password}) => {
    return request.post('/auction/auctioneer/login',{username, password})
}

// 拍卖师退出登录，调用时前端删除token
export const removeusertoken = (data) => {
    return request.post('/auction/auctioneer/logout',data)
}

// 修改个人信息
export const changeuserinfo = (data) => {
    return request.post('/auction/auctioneer/update',data)
}

