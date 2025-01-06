<script setup>
import { addgoodsinfo } from '@/api/goods'
import { deletegoods } from '@/api/goods'
import { checkgoodsinfo } from '@/api/goods'
import { checkgoodscollect } from '@/api/goods'
import { changegoodsinfo } from '@/api/goods'
import { ref } from 'vue'

const loading = ref(false)
const articledatamessage = ref()
const articlerootref = ref()
const value1 = ref()

// 获取商品列表
const getGoodsList = () => {

}

// 添加商品
const addGoods = () => {

}

// 删除商品
const deleteSelectedGoods = () => {

}

// 搜索商品
const searchGoods = () => {

}

// 重置搜索条件
const resetSearch = () => {

}

// onMounted(() => {

// })
</script>

<template>
  <SameCard title="商品管理">
    <template #extra>
      <el-button type="danger" @click="deleteSelectedGoods">批量删除</el-button>
      <el-button type="primary" @click="addGoods">添加商品</el-button>
    </template>

    <el-form inline>
      <el-form-item label="全部商品:" style="width: 240px;">
        <el-select v-model="articledatamessage">
          <el-option label="未上架" value="未上架">未上架</el-option>
          <el-option label="未拍" value="未拍">未拍</el-option>
          <el-option label="拍卖中" value="拍卖中">拍卖中</el-option>
          <el-option label="已拍" value="已拍">已拍</el-option>
          <el-option label="逾期未拍" value="逾期未拍">逾期未拍</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属拍卖会:">
        <el-input placeholder="请输入拍卖会名字"></el-input>
      </el-form-item>
      <el-form-item label="商品名:">
        <el-input placeholder="请输入商品名"></el-input>
      </el-form-item>
      <el-form-item label="发布时间:">

        <div class="demo-date-picker">
          <div class="block">
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始时间"
              end-placeholder="终止时间" size="default" />
          </div>
        </div>

      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchGoods">搜索</el-button>
        <el-button @click="resetSearch">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 在下面的这里就是用来存储相关数据的地方 -->
    <el-table :data="articledatamessage" empty-text="亲,目前没有商品信息" style="width: 100%; height: 100%;" v-loading="loading">
      <!-- 在这里也是用到的是插槽 -->
      <el-table-column label="商品名">
        12
      </el-table-column>
      <el-table-column label="商品状态">
        12
      </el-table-column>
      <el-table-column label="起拍积分">
        12
      </el-table-column>
      <el-table-column label="保底加价">
        123
      </el-table-column>
      <el-table-column label="关联场次">
        141
      </el-table-column>
      <el-table-column label="发布时间">

      </el-table-column>

      <!-- 在这里的话就用到的就是插槽 -->
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button size="mini" type="primary" circle :icon="Edit"></el-button>
          <el-button size="mini" type="danger" circle :icon="Delete" @click="deleteSelectedGoods"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 下面就是放的是一些表格的数据的切换的东西小组件 -->
    <el-pagination v-model:current-page="articlerootref" v-model:page-size="articlerootref" :page-sizes="[5, 7, 9, 11]"
      :background="true" layout=" jumper, sizes, prev, pager, next, total" :total="tatalarticleinformation"
      @size-change="onSizeChange" @current-change="onCurrentChange" style="justify-content: flex-end" />

  </SameCard>
</template>

<style scoped>
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
