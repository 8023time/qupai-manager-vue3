<script setup>
import { userloginservice } from '@/api/user.js'
import { ref } from 'vue'
import router from '@/router'


const formdatainformation = ref() // 用来记录表单的一些数据
const fromdata = ref({
  username:'',
  password:''
})
const userlogin = async () => {
  const res = await userloginservice(fromdata.value)
  ElMessage.success('登录成功')
  console.log(res);
  router.push('/')
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

        <el-form
        :model="fromdata"
        class="demo-ruleForm"
        label-width="auto">
          <el-form-item class="el-form-item">
            <h2 class="login-title">登录</h2>
          </el-form-item>
          <el-form-item class="el-form-item" label="用户名:">
            <el-input 
            v-model="fromdata.username"
            size="large" 
            placeholder="请输入用户名" 
            prefix-icon="el-icon-user">
          </el-input>
          </el-form-item>
          <el-form-item class="el-form-item" label="密码:">
            <el-input
            v-model="fromdata.password"
              size="large"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
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
.demo-ruleForm
{
  align-items: center;
  justify-content: center;
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
  /* align-items: center;
  justify-content: center; */
  height: 60%;
  padding-left: 5%;
  padding-right: 5%;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.login-title {  
 margin-left: 39%;
 justify-content: center;
  font-size: 3.2rem;
  font-weight: bold;
  color: #409eff;
}

.el-form-item{
 display: flex;
 margin-top: 9%;
justify-content: center; 
}

.el-input {
  width: 100%;
  align-items: centers;
  height: 120%;
}

.login-button {
  width: 39%;
  height: 120%;
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
