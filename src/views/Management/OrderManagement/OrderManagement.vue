<script setup>
import { ref } from 'vue'

const loading = ref(false)
const articledatamessage = ref()
const articlerootref =ref()
const value1 =ref()
</script>

<template>
  <SameCard title="订单管理">
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
        <el-button type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>

    <el-table style="width: 100%; height: 100%;" v-loading="loading">
      <el-table-column label="订单号">
        12
      </el-table-column>
      <el-table-column label="订单状态">
        12
      </el-table-column>
      <el-table-column label="用户名">
        12
      </el-table-column>
      <el-table-column label="手机号">
      </el-table-column>
      <el-table-column label="下单时间">
      </el-table-column>
      <el-table-column label="实收积分">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" circle :icon="Edit"></el-button>
          <el-button type="primary" circle :icon="Edit"></el-button>
          <el-button type="danger" circle :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="articlerootref"
      v-model:page-size="articlerootref"
      :page-sizes="[5, 7, 9, 11]"
      :background="true"
      layout=" jumper, sizes, prev, pager, next, total"
      :total="tatalarticleinformation"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      style="justify-content: flex-end"
    />
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
