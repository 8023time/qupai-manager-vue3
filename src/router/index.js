import { createRouter, createWebHistory } from 'vue-router'
import { UseUserStore } from '@/stores'
import Layout from '@/views/Layout/index.vue'
import User from '@/views/User/index.vue'
import Login from '@/views/Login/index.vue'
import ReleaseAuction from '@/views/Auction/ReleaseAuction/ReleaseAuction.vue'
import HostingAuction from '@/views/Auction/HostingAuction/HostingAuction.vue'
import AuctionList from '@/views/Auction/AuctionList/AuctionList.vue'
import GoodsManagement from '@/views/Management/GoodsManagement/GoodsManagement.vue'
import OrderManagement from '@/views/Management/OrderManagement/OrderManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'auction/release',
      component: Layout,
      children: [
        {
          path: 'auction/release',
          component: ReleaseAuction,
        },
        {
          path: 'auction/hosting',
          component: HostingAuction,
        },
        {
          path: 'auction/list',
          component: AuctionList,
        },
        {
          path: 'management/goods',
          component: GoodsManagement,
        },
        {
          path: 'management/order',
          component: OrderManagement,
        },
        {
          path:'/user',
          component:User
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
  scrollBehavior () {
    return {
      top: 0 ,
    }
  }
})

// 全局拦截器
router.beforeEach((to) => {
  // canUserAccess() 返回 `true` 或 `false`
  const userstore = UseUserStore()
  if (!userstore.token && to.path !== '/login') return '/login'
})

export default router
