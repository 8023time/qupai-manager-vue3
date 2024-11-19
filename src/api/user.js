import request from '@/utils/request'

export const userloginservice = ({username, password}) => {
    return request.post('/auction/auctioneer/login',{username, password})
}