<script setup lang="ts">
import { ref } from 'vue'
import UserInformation from './conponent/UserInformation.vue';
import { ElMessage } from 'element-plus';

const ischangeinformation = ref(true)
const changeinformation = () => {
  ischangeinformation.value = false
}
const blackinformation = () => {
  ischangeinformation.value = true
  ElMessage.warning("已取消修改!")
}

const onchangeinfor = () => {
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
        <el-form class="edit-form" label-width="auto" v-if="!ischangeinformation">
          <div class="form-grid">
            <!-- 表单项 -->

            <el-form-item style="text-align: center;margin: 20px auto;display: flex;flex-grow: 10;">
                <img  class="profile-avatar" src="@/assets/avatar.jpg" alt="">
            </el-form-item>
            <br>
            <el-form-item label="名字:">
              <el-input placeholder="请输入名字"></el-input>
            </el-form-item>
            <el-form-item label="用户名:">
              <el-input placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="电话:">
              <el-input placeholder="请输入电话"></el-input>
            </el-form-item>
            <el-form-item label="联系邮箱:">
              <el-input placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="旧密码:">
              <el-input placeholder="请输入旧密码" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码:">
              <el-input placeholder="请输入新密码" type="password"></el-input>
            </el-form-item>
          </div>
          <!-- 提交按钮 -->
          <div class="form-actions">
            <el-button type="primary" @click="onchangeinfor">确认提交</el-button>
          </div>
        </el-form>
        <div v-else>
          这里的话就是用来表示的就是历史拍卖的一些记录的地方
        </div>
      </el-card>
    </div>
  </div>
</template>



<style scoped>
/* 整体布局 */
.big-main {
  display: flex;
  height: 100%; /* 使用原始高度 */
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

/* 左侧卡片样式 */
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

/* 右侧编辑区域样式 */
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
  height: 100%; /* 保持高度一致 */
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
</style>
