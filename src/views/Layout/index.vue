<script setup>
import LayoutHeader from './components/LayoutHeader.vue';
import { CirclePlus, List, Management, User, Goods, ShoppingCartFull } from '@element-plus/icons-vue';
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header height="80px" style="background: #ebfffa;">

          <LayoutHeader></LayoutHeader>
    
        </el-header>
        <el-container>
          <el-aside width="200px" style="background-color: #75bdf0;">
           <el-menu
           class="aside"
           :default-active="$route.path"
           router
           >
              <el-menu-item index="/auction/release">
                <el-icon><CirclePlus></CirclePlus></el-icon>
                <span>发布拍卖会</span>
              </el-menu-item>
              <el-menu-item index="/auction/list">
                <el-icon><List></List></el-icon>
                <span>拍卖会列表</span>
              </el-menu-item>
              <el-menu-item index="/auction/hosting">
                <el-icon><Management></Management></el-icon>
                <span>主持拍卖会</span>
              </el-menu-item>
              <el-menu-item index="/management/order">
                <el-icon><Goods></Goods></el-icon>
                <span>订单管理</span>
              </el-menu-item>
              <el-menu-item index="/management/goods">
                <el-icon><ShoppingCartFull></ShoppingCartFull></el-icon>
                <span>商品管理</span>
              </el-menu-item>
              <el-menu-item index="/user">
                <el-icon><User></User></el-icon>
                <span>个人信息</span>
              </el-menu-item>
           </el-menu>

          </el-aside>
          <el-main class="mainbody">
            <div class="main-body">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>

</template>

<style>
.common-layout
{
  background-color: #e3e3e3;
}
.mainbody
{
  background-color:#f0f0f4;
}
.main-body
{
  border-radius: 30px;
  height: 80vh;
  /* padding: 20px; */
  margin: 10px;
  background-color: #ffffff;
}
.aside
{
  height: 100%;
}

</style>