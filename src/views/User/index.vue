<script setup lang="ts">
import { ref } from 'vue'
import UserInformation from './conponent/UserInformation.vue';
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue'
import { UseUserStore } from '@/stores';
import { changeuserinfo } from '@/api/user';

const userstore = UseUserStore()
const userformdata = ref({ //这个的作用就是用来收集修改后的个人信息
  id:'',
  username:'',
  name:'',
  nickName:'',
  password:'',
  phone:'',
})
const historylist = ref([
  {
  startTime: '2024-11-22',
  endTime: '2024-12-20',
  status: '12',
  name: '你的名字,你的名字你的名字你的名字你的名字你的名字你的名字你的名字你的名字你的名字',
  auctioneerId: '拍卖师'
  },
  {
  startTime: '2024-11-22',
  endTime: '2024-12-20',
  status: '12',
  name: '你的名字',
  auctioneerId: '拍卖师'
  },
  {
  startTime: '2024-11-22',
  endTime: '2024-12-20',
  status: '12',
  name: '你的名字',
  auctioneerId: '拍卖师'
  },
  {
  startTime: '2024-11-22',
  endTime: '2024-12-20',
  status: '12',
  name: '你的名字',
  auctioneerId: '拍卖师'
  },
  {
  startTime: '2024-11-22',
  endTime: '2024-12-20',
  status: '12',
  name: '你的名字',
  auctioneerId: '拍卖师'
  }
])
onMounted(
  ()=>{return userstore.getuserinfor()}
  // ()=>{return userformdata.value = userstore.user}
)
const ischangeinformation = ref(true)
const changeinformation = () => {
  ischangeinformation.value = false
}
const blackinformation = () => {
  ischangeinformation.value = true
  ElMessage.warning("已取消修改!")
}

const onchangeinfor = async () => { //这里的作用就是用来修改个人信息的地方

  await changeuserinfo(userformdata.value)
  userstore.getuserinfor()
  ischangeinformation.value = true 
  ElMessage.success("修改个人信息成功!")
}
</script>

<template>
  <div class="big-main">
    <!-- 左侧个人信息卡片 -->
    <div class="profile-card">
      <SameCard title="个人信息">
        <template #extra>
          <!-- 切换按钮 -->
          <el-button
            v-if="ischangeinformation"
            plain
            size="large"
            type="success"
            @click="changeinformation"
          >
            修改信息
          </el-button>
          <el-button
            v-else
            plain
            size="large"
            type="danger"
            @click="blackinformation"
          >
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
          <h3>{{ ischangeinformation ? '历史拍卖记录' : '编辑您的信息' }}</h3>
        </template>
        <el-form
          class="edit-form"
          label-width="auto"
          :module="userformdata"
           v-if="!ischangeinformation">
          <div class="form-grid">
            <!-- 表单项 -->

            <el-form-item style="text-align: center;margin: 20px auto;display: flex;flex-grow: 10;">
                <img  class="profile-avatar" src="@/assets/avatar.jpg" alt="">
            </el-form-item>
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="userformdata.name" placeholder="请输入名字"></el-input>
            </el-form-item>
            <el-form-item label="用户名:" prop="username">
              <el-input v-model="userformdata.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <!-- 未开发 -->
            <el-form-item label="旧密码:" prop="password">
              <el-input v-model="userformdata.password" placeholder="请输入旧密码" type="password"></el-input>
            </el-form-item>
            <!-- 未开发 -->
            <el-form-item label="新密码:">
              <el-input placeholder="请输入新密码" type="password"></el-input>
            </el-form-item>
          </div>
          <!-- 提交按钮 -->
          <div class="form-actions">
            <el-button type="primary" @click="onchangeinfor">确认提交</el-button>
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
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
.data-show
{
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
