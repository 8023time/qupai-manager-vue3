<script setup>
import { ref } from 'vue'

const loading = ref(false)
const articledatamessage = ref()
const articlerootref =ref()
const value1 =ref()
</script>

<template>
  <SameCard title="商品管理">
    <template #extra>
      <el-button type="danger">批量删除</el-button>
      <el-button type="primary">添加商品</el-button>
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
              <el-date-picker
                v-model="value1"
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

    <!-- 在下面的这里就是用来存储相关数据的地方 -->
    <el-table :data="articledatamessage" style="width: 100%; height: 100%;" v-loading="loading">
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

      </el-table-column>
      <el-table-column label="关联场次">

      </el-table-column>
      <el-table-column label="发布时间">

      </el-table-column>
      <!-- 在这里的话就用到的就是插槽 -->
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" circle :icon="Edit"></el-button>
          <el-button type="primary" circle :icon="Edit"></el-button>
          <el-button type="danger" circle :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 下面就是放的是一些表格的数据的切换的东西小组件 -->
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
