<script setup lang="ts">
import UserInformation from './conponent/UserInformation.vue'
import { changeuserinfo } from '@/api/user'
import { ElMessage } from 'element-plus'
import { UseUserStore } from '@/stores'
import { onMounted } from 'vue'
import { ref } from 'vue'

// 从持久化存储处拿到个人信息
const userstore = UseUserStore()
const userlist = userstore.user
const { id, username, name, nickName } = userlist

// 将个人信息填充到个人信息一栏中
const userformdata = ref({
  id: id || '',
  username: username || '',
  name: name || '',
  nickName: nickName || '',
})

// 修改个人信息的规范代码
const userformrules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'change' },
    { min: 1, max: 10, message: '用户名必须为1-10位字符', trigger: 'change' },
  ],
  name: [
    { required: true, message: '请输入你的名字', trigger: 'change' },
    { min: 1, max: 10, message: '用户名必须为1-10位字符', trigger: 'change' },
  ],
  nickName: [
    { required: true, message: '请输入你的昵称', trigger: 'change' },
    { min: 1, max: 10, message: '用户名必须为1-10位字符', trigger: 'change' },
  ]
}

// 修改个人信息切换的页面
const isChangeInfor = ref(true)

const StartChangeInfor = () => {
  isChangeInfor.value = false
}
const CancelChangeInfor = () => {
  isChangeInfor.value = true
  ElMessage.warning("已取消修改")
}

//这里的作用就是用来修改个人信息的地方
const SaveChangedInfor = async () => {
  try {
    await changeuserinfo(userformdata.value)
    userstore.getuserinfor()
    isChangeInfor.value = true
    ElMessage.success("修改个人信息成功")

  } catch (error) {
    ElMessage.error("修改个人信息失败，请重试")
  }
}

onMounted(() => {
  // 组件挂载时的逻辑
})

// 这里展示的是历史拍卖信息
const historylist = ref([
  {
    startTime: '2024-11-22',
    endTime: '2024-12-29',
    status: '已开展',
    name: '近些年，随着人工智能（AI）技术的迅速发展，尤其是大模型的兴起，传统行业迎来了新的变革动力。大模型不仅具备强大的自然语言处理和图像识别能力，还在不同领域展现出灵活的自适应性。',
    auctioneerId: '真卷'
  },
  {
    startTime: '2024-11-22',
    endTime: '2024-12-27',
    status: '已开展',
    name: '大模型在传统行业中面临的挑战',
    auctioneerId: '太卷'
  },
  {
    startTime: '2024-11-22',
    endTime: '2024-12-24',
    status: '已结束',
    name: '大模型未来将不仅限于质量检测、风险控制等具体任务，还将进一步渗透到业务决策、客户体验优化等场景。企业可以借助大模型实时调整运营策略，提高业务的敏捷性和市场反应速度。',
    auctioneerId: '真真卷'
  },
  {
    startTime: '2024-11-24',
    endTime: '2024-12-20',
    status: '已结束',
    name: '科技问题回答',
    auctioneerId: '太卷'
  },
  {
    startTime: '2024-11-29',
    endTime: '2024-12-20',
    status: '已取消',
    name: '制造业是最早应用大模型的传统行业之一。',
    auctioneerId: '太卷'
  }
])
</script>

<template>
  <div class="big-main">
    <!-- 左侧个人信息卡片 -->
    <div class="profile-card">
      <SameCard title="个人信息">
        <template #extra>
          <!-- 切换按钮 -->
          <el-button v-if="isChangeInfor" plain size="large" type="success" @click="StartChangeInfor">
            修改信息
          </el-button>
          <el-button v-else plain size="large" type="danger" @click="CancelChangeInfor">
            取消修改
          </el-button>
        </template>
        <!-- 头像与信息 -->
        <UserInformation></UserInformation>
      </SameCard>
    </div>
    <!-- 右侧修改信息区域 -->
    <div class="edit-section">
      <el-card class="edit-card">
        <template #header>
          <h3>{{ isChangeInfor ? '历史拍卖记录' : '编辑您的信息' }}</h3>
        </template>
        <el-form class="edit-form" label-width="auto" :rules="userformrules" :module="userformdata"
          v-if="!isChangeInfor">
          <div class="form-grid">
            <!-- 表单项 -->
            <el-form-item style="text-align: center;margin: 20px auto;display: flex;flex-grow: 10;">
              <img class="profile-avatar" src="@/assets/avatar.jpg" alt="">
            </el-form-item>
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="userformdata.name" placeholder="请输入名字"></el-input>
            </el-form-item>
            <el-form-item label="用户名:" prop="username">
              <el-input v-model="userformdata.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="昵称:" prop="nickName">
              <el-input v-model="userformdata.nickName" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <!-- 未开发 -->
            <!-- <el-form-item label="旧密码:" prop="password">
              <el-input v-model="userformdata.password" placeholder="请输入旧密码" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码:">
              <el-input placeholder="请输入新密码" type="password"></el-input>
            </el-form-item> -->
          </div>
          <!-- 提交按钮 -->
          <div class="form-actions">
            <el-button type="primary" @click="SaveChangedInfor">确认提交</el-button>
          </div>
        </el-form>
        <div class="data-show" v-else>
          <el-table :data="historylist" style=" width: 95%" size="large" empty-text="你还没有举办过拍卖会" max-height="700">
            <el-table-column fixed prop="startTime" label="开始时间" width="200" />
            <el-table-column fixed prop="endTime" label="结束时间" width="200" />
            <el-table-column prop="auctioneerId" label="拍卖师" width="160" />
            <el-table-column prop="name" label="拍卖会名" width="500" />
            <el-table-column prop="status" label="拍卖状态" width="120" />
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.big-main {
  display: flex;
  height: 100%;
  gap: 20px;
  background-color: #f9f9f9;
  padding: 20px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid #f0f0f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.profile-card {
  flex: 0 0 400px;
  background-color: #ffffff;
  /* border-radius: 8px; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.edit-section {
  flex: 1;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 20px;
}

.edit-card {
  width: 100%;
  height: 100%;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-grid {
  padding: 0 200px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.el-button {
  transition: all 0.3s ease;
}

.el-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.data-show {
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
