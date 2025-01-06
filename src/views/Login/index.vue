<script setup>
import { userloginservice } from '@/api/user.js'
import { UseUserStore } from '@/stores'
import router from '@/router'
import { ref } from 'vue'

const userstore = UseUserStore()
const formdatainformation = ref() // 用来记录表单收集的表单数据
const fromdata = ref({ // 用来收集用来与后端交流的数据
  username: '',
  password: ''
})

// 执行登录操作的代码
const userlogin = async () => {
  try {
    await formdatainformation.value.validate()
    const response = await userloginservice(fromdata.value)
    userstore.settoken(response.data.data.token) // 持久化存储用户数据
    ElMessage.success('登录成功')
    router.push('/')
  } catch (error) {
    ElMessage.error("登录失败,请检查您的用户名和密码")
  }
}

// 用户登录规范校验
const formrules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'change' },
    { min: 2, max: 8, message: '用户名必须为2-8为字符', trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入你的密码', trigger: 'change' },
    { min: 6, max: 15, message: '密码必须为6-15位字符', trigger: 'change' },
  ]
}
</script>

<template>
  <div class="login-container">
    <el-row justify="center" class="row-bg">
      <!-- 左侧 Logo 区域 -->
      <el-col :span="7" class="login-left">
        <div class="logo"></div>
      </el-col>
      <!-- 右侧表单区域 -->
      <el-col :span="7" class="login-right">
        <el-form ref="formdatainformation" :rules="formrules" :model="fromdata" class="demo-ruleForm"
          label-width="auto">
          <el-form-item class="el-form-item lin-juzhong">
            <h2 class="login-title">拍卖师登录</h2>
          </el-form-item>
          <el-form-item class="el-form-item" label="用户名:" prop="username">
            <el-input v-model="fromdata.username" size="large" placeholder="请输入用户名" prefix-icon="el-icon-user">
            </el-input>
          </el-form-item>
          <el-form-item class="el-form-item" label="密码:" prop="password">
            <el-input v-model="fromdata.password" size="large" placeholder="请输入密码" prefix-icon="el-icon-lock"
              show-password></el-input>
          </el-form-item>
          <el-form-item class="el-form-item" style="margin-top: 15%;">
            <el-button @click="userlogin" type="primary" class="login-button">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.demo-ruleForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.login-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/background.jpg') no-repeat center center / cover;
  font-family: Arial, sans-serif;
}

.row-bg {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-left {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  height: 60%;
}

.logo {
  width: 300px;
  height: 300px;
  background: url('@/assets/logo.jpg') no-repeat center center / cover;
  border: 5px solid #fff;
  border-radius: 50%;
}

.login-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.login-title {
  width: 100%;
  text-align: center;
  font-size: 3.2rem;
  font-weight: bold;
  color: #409eff;
  margin-bottom: 30px;
}

.el-form-item {
  width: 100%;
}

.lin-juzhong {
  text-align: center;
}

.el-input {
  width: 100%;
  align-items: center;
}

.login-button {
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  color: white;
  border-radius: 30px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.login-button:hover {
  background-color: #66b1ff;
}

@media (max-width: 768px) {
  .row-bg {
    flex-direction: column;
  }

  .login-left {
    display: none;
  }

  .login-right {
    width: 90%;
    padding: 20px;
  }
}
</style>
