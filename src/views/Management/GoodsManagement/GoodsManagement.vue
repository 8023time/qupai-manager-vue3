<script setup>
import { addgoodsinfo } from '@/api/goods'
import { deletegoods } from '@/api/goods'
import { checkgoodsinfo } from '@/api/goods'
import { checkgoodscollect } from '@/api/goods'
import { changegoodsinfo } from '@/api/goods'
import { checkallgoodsinformation } from '@/api/goods'
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { onMounted } from 'vue'
import { ref } from 'vue'

// 暂时的数据
const mockGoodsList = [
  {
    itemName: "古董花瓶",
    GoodsStatus: "未上架",
    startingPrice: 200,
    Minimumpriceincrease: 20,
    Relatedsessions: "2025春节拍卖会",
    createTime: "2025-01-01",
  },
  {
    itemName: "翡翠项链",
    GoodsStatus: "未拍",
    startingPrice: 500,
    Minimumpriceincrease: 50,
    Relatedsessions: "2025新年拍卖会",
    createTime: "2025-01-05",
  },
  {
    itemName: "名家书法",
    GoodsStatus: "拍卖中",
    startingPrice: 1000,
    Minimumpriceincrease: 100,
    Relatedsessions: "2025艺术品专场",
    createTime: "2025-01-10",
  },
  {
    itemName: "珍藏邮票",
    GoodsStatus: "已拍",
    startingPrice: 300,
    Minimumpriceincrease: 30,
    Relatedsessions: "2024秋季拍卖会",
    createTime: "2024-12-20",
  },
  {
    itemName: "限量版手表",
    GoodsStatus: "逾期未拍",
    startingPrice: 800,
    Minimumpriceincrease: 80,
    Relatedsessions: "2024冬季拍卖会",
    createTime: "2024-11-15",
  },
];

// 是否加载
const loading = ref(false)

// 商品状态 --- 在下拉菜单中可以选择,这个是记录选择哪一个
const articledatamessage = ref()

// 表格下的页面数目
const articlerootref = ref()

// 起止时间
const Start_End_Time = ref() // 用来记录起止时间

// 获取商品列表
const allgoodslist = ref( // 获取商品的

mockGoodsList // 暂时的数据

  // {
  //   itemName: '', // 商品名字
  //   GoodsStatus:'', // 商品状态
  //   startingPrice: '', // 起拍积分
  //   Minimumpriceincrease: '', // 保底加价
  //   Relatedsessions: '', // 关联场次
  //   createTime:'', // 发布时间
  // }
)
const getGoodsList = async () => {
 loading.value=true
 try{
  const respomse = await checkallgoodsinformation()
  allgoodslist.value=respomse.data
 }catch(error){
  ElMessage.error('获取商品信息失败')
 }finally{
  loading.value = false
 }
}

// 添加商品
const addgoodsinformation = ref(
  {
    id: '',
    auctionId: '',
    itemName: '',
    provider: '',
    itemDescription: '',
    startingPrice: 0,
    minimumPriceIncrease: 0,
    relatedSessions: '',
    goodsStatus: ''
  }
) // 用来收集添加商品的信息
const Slow_Dialog = ref(false)// 添加商品时跳出来的弹弹窗口
const addGoods = () => {
  Slow_Dialog.value = true
}
const and_Goods_infor = async () => { // 添加商品
   // 表单校验
   if (!addgoodsinformation.value.itemName) {
    ElMessage.error('商品名称不能为空');
    return
  }
  if (addgoodsinformation.value.startingPrice <= 0) {
    ElMessage.error('起拍价格必须大于0');
    return
  }
  if (addgoodsinformation.value.minimumPriceIncrease <= 0) {
    ElMessage.error('最低加价必须大于0');
    return
  }
  try{
  await addGoodsInfo(addgoodsinformation.value)
  ElMessage.success('添加商品成功')
  getGoodsList()
  // 清空表单
  addgoodsinformation.value = {
      id: '',
      auctionId: '',
      itemName: '',
      provider: '',
      itemDescription: '',
      startingPrice: 0,
      minimumPriceIncrease: 0,
      relatedSessions: '',
      goodsStatus: ''
    }
}catch(error){
  ElMessage.error('添加商品失败')
}finally{
  Slow_Dialog.value = false
}
}

// 删除商品
const deleteSelectedGoods = async () => {
  try{
    await ElMessageBox.confirm( // 用来提示是不是确定要删除指定的商品
    '确定要删除选定的商品吗?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      center: true
    }
  )
    await deletegoods()
    ElMessage.success('删除商品成功')
    getGoodsList() // 重新获取商品的一些信息
  }catch(error){
    ElMessage.error('删除商品失败')
  }
}

// 搜索商品
const searchGoods = async () => {
loading.value = true
try{
  const response =  await checkgoodscollect() // ----------这里需要进行修改
  allgoodslist.value = response.data
}catch(error){
  ElMessage.error('查询失败')
}finally{
  loading.value = false
}
}

// 重置搜索条件
const resetSearch = () => {
  articledatamessage.value = ''
  Start_End_Time.value = null
  getGoodsList()
}

onMounted(() => {
  getGoodsList()
})
</script>

<template>
  <SameCard title="商品管理">
    <template #extra>
      <el-button type="danger" @click="deleteSelectedGoods">批量删除</el-button>
      <el-button type="primary" @click="addGoods">添加商品</el-button>
    </template>

    <!-- 添加商品时跳出来的弹窗口 -->
    <el-dialog v-model="Slow_Dialog" title="添加商品" width="500px">
  <el-form :model="addgoodsinformation" label-width="100px">
    <el-form-item label="商品名称">
      <el-input
        v-model="addgoodsinformation.itemName"
        placeholder="请输入商品名称"
        clearable />
    </el-form-item>
    <el-form-item label="提供者">
      <el-input
        v-model="addgoodsinformation.provider"
        placeholder="请输入提供者名称"
        clearable />
    </el-form-item>
    <el-form-item label="商品描述">
      <el-input
        v-model="addgoodsinformation.itemDescription"
        placeholder="请输入商品描述"
        type="textarea"
        rows="3"
        clearable />
    </el-form-item>
    <el-form-item label="起拍价格">
      <el-input-number
        v-model="addgoodsinformation.startingPrice"
        placeholder="请输入起拍价格"
        :min="0"
        controls-position="right" />
    </el-form-item>
    <el-form-item label="最低加价">
      <el-input-number
        v-model="addgoodsinformation.minimumPriceIncrease"
        placeholder="请输入最低加价"
        :min="0"
        controls-position="right" />
    </el-form-item>
    <el-form-item label="关联场次">
      <el-input
        v-model="addgoodsinformation.relatedSessions"
        placeholder="请输入关联场次"
        clearable />
    </el-form-item>
    <el-form-item label="商品状态">
      <el-select v-model="addgoodsinformation.goodsStatus" placeholder="请选择商品状态">
        <el-option label="未上架" value="未上架" />
        <el-option label="未拍" value="未拍" />
        <el-option label="拍卖中" value="拍卖中" />
        <el-option label="已拍" value="已拍" />
        <el-option label="逾期未拍" value="逾期未拍" />
      </el-select>
    </el-form-item>
  </el-form>

  <template #footer>
    <el-button @click="Slow_Dialog = false">取消</el-button>
    <el-button type="primary" @click="and_Goods_infor">确定</el-button>
  </template>
</el-dialog>


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
            <el-date-picker v-model="Start_End_Time" type="daterange" range-separator="至" start-placeholder="开始时间"
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
    <el-table :data="allgoodslist" empty-text="亲,目前没有商品信息" style="width: 100%; height: 100%;" v-loading="loading">
      <!-- 在这里也是用到的是插槽 -->
      <el-table-column label="商品名" prop="itemName">
      </el-table-column>
      <el-table-column label="商品状态" prop="GoodsStatus">
      </el-table-column>
      <el-table-column label="起拍积分" prop="startingPrice">
      </el-table-column>
      <el-table-column label="保底加价" prop="Minimumpriceincrease">
      </el-table-column>
      <el-table-column label="关联场次" prop="Relatedsessions">
      </el-table-column>
      <el-table-column label="发布时间" prop="createTime">
      </el-table-column>

      <!-- 在这里的话就用到的就是插槽 -->
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button size="mini" type="primary" circle :icon="Edit">修改</el-button>
          <el-button size="mini" type="danger" circle :icon="Delete" @click="deleteSelectedGoods">删除</el-button>
          <el-button size="mini" type="primary" circle :icon="Edit">查看</el-button>
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
