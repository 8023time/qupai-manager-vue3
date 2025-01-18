<script setup>
import { ElMessage } from 'element-plus'
import { onMounted } from 'vue'
import {ref} from 'vue'

// 加载动画
const loading = ref(false)

// const articlerootref = ref()

// 记录搜索内容
const articledatamessage = ref()

// 起止时间
const Start_End_Time = ref() // 用来记录起止时间

// 获取订单列表
const orderList = ref()// d订单列表
const getorderlist = async () => {
  loading.value = true
  try{
    // 模拟获取订单列表
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { orderNumber: '001', productName: '商品1', orderStatus: '待派发', orderTime: '2024-01-01' },
            { orderNumber: '002', productName: '商品2', orderStatus: '已派发', orderTime: '2024-02-01' },
            { orderNumber: '003', productName: '商品3', orderStatus: '完成', orderTime: '2024-03-01' },
            { orderNumber: '004', productName: '商品4', orderStatus: '待派发', orderTime: '2024-04-01' },
          ]
        })
      }, 100)
    })
    orderList.value = response.data
    ElMessage.success('获取订单列表成功')
  }catch(error){
    ElMessage.error('获取订单列表失败')
  }finally{
    loading.value = false
  }
}

// 搜索订单
const searchOrders = async () => {
  loading.value = true
  try {
    // 模拟搜索订单
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: orderList.value.filter(order => order.orderStatus === articledatamessage.value)
        })
      }, 1000)
    })
    orderList.value = response.data
  } catch (error) {
    ElMessage.error('搜索订单失败')
  } finally {
    loading.value = false
  }
}

// 重置搜索条件
const resetSearch = () => {
  articledatamessage.value = ''
  value1.value = null
  getOrderList()
}

// 刚开始加载的函数
onMounted(
  () => {
    getorderlist()
  }
)
</script>

<template>
  <SameCard title="订单管理">
    <template #extra>
      <div class="top_site">
        <el-badge :value="12" class="item">
          <el-button>全部订单</el-button>
        </el-badge>
        <el-badge :value="6" class="item">
          <el-button>待派发</el-button>
        </el-badge>
        <el-badge :value="4" class="item">
          <el-button>已派发</el-button>
        </el-badge>
        <el-badge :value="2" class="item">
          <el-button>完成</el-button>
        </el-badge>
      </div>
    </template>

    <el-form inline>
      <el-form-item label="订单分类:" style="width: 240px;">
        <el-select>
          <el-option label="全部订单" value="全部订单">全部订单</el-option>
          <el-option label="待派发" value="待派发">待派发</el-option>
          <el-option label="已发货" value="已发货">已发货</el-option>
          <el-option label="完成" value="完成">完成</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单号:">
        <el-input placeholder="请填写订单号"></el-input>
      </el-form-item>
      <el-form-item label="商品名:">
        <el-input placeholder="请输写商品名"></el-input>
      </el-form-item>
      <el-form-item label="下单时间:">
        <div class="demo-date-picker">
          <div class="block">
            <el-date-picker
              v-model="Start_End_Time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="终止时间"
              size="default"
            />
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchOrders">搜索</el-button>
        <el-button @click="resetSearch">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="orderList" style="width: 100%;  height: 100%;" empty-text="亲,目前没有订单信息" v-loading="loading">
      <el-table-column label="订单号" prop="">
      </el-table-column>
      <el-table-column label="订单状态" prop="">
      </el-table-column>
      <el-table-column label="用户名" prop="">
      </el-table-column>
      <el-table-column label="手机号" prop="">
      </el-table-column>
      <el-table-column label="下单时间" prop="">
      </el-table-column>
      <el-table-column label="实收积分" prop="">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" circle :icon="Edit"></el-button>
          <el-button type="primary" circle :icon="Edit"></el-button>
          <el-button type="danger" circle :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页逻辑-->
    <!--    <el-pagination-->
    <!--      v-model:current-page="articlerootref"-->
    <!--      v-model:page-size="articlerootref"-->
    <!--      :page-sizes="[5, 7, 9, 11]"-->
    <!--      :background="true"-->
    <!--      layout=" jumper, sizes, prev, pager, next, total"-->
    <!--      :total="tatalarticleinformation"-->
    <!--      @size-change="onSizeChange"-->
    <!--      @current-change="onCurrentChange"-->
    <!--      style="justify-content: flex-end"-->
    <!--    />-->
  </SameCard>
</template>

<style scoped>
.top_site {
  /* width: 100%; */
  /* height: 90px; */
  font-size: 24px;
  /* display: flex; */
  /* background-colo  r: #f5f5f5; */
  margin-right: 50px;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.el-form-item {
  align-items: center;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
