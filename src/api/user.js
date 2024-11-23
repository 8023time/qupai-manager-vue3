import request from '@/utils/request'

// 拍卖师登录
export const userloginservice = ({username, password}) => {
    return request.post('/auction/auctioneer/login',{username, password})
}

// 查询个人信息
export const ckeckuserinfo = () => {
    return request.get('/auction/auctioneer/info')
}

// 拍卖师退出登录，调用时前端删除token
export const removeusertoken = () => {
    return request.post('/auction/auctioneer/logout')
}

// 修改个人信息
export const changeuserinfo = ({id,username,name,nickName}) => {
    return request.post('/auction/auctioneer/update',{id,username,name,nickName})
}