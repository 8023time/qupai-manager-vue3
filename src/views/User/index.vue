<script setup>
import { ref } from 'vue'

const ischangeinformation = ref(true)
const changeinformation = () => {
  ischangeinformation.value = false
}
const blackinformation = () => {
  ischangeinformation.value = true
}
</script>

<template>
  <SameCard title="个人信息">
    <template #extra>
      <el-button
      v-if="ischangeinformation"
      plain
      size="large"
      type="success"
      @click="changeinformation"
      >
      修改信息</el-button>

      <el-button
      v-else
      plain
      size="large"
      type="success"
      @click="blackinformation"
      >
      取消修改</el-button>
    </template>
    <!-- 下面的可以添加一些div -->
     <div class="user-main-body">
      <div v-if="ischangeinformation">
        个人信息展示
      </div>
        
      <el-form
        class="demo-ruleForm"
        label-width="auto"
        v-else
        >
        <ul>
          <!-- 拍卖师名字 -->
          <li>
            <el-form-item label="名字:">
              <el-input placeholder="高哥"></el-input>
            </el-form-item>
          </li>
          <!-- 用户名 -->
          <li>
            <el-form-item label="用户名:">
              <el-input></el-input>
            </el-form-item>
          </li>
          <!-- 电话 -->
          <li>
            <el-form-item label="电话:">
              <el-input></el-input>
            </el-form-item>
          </li>
          <!-- 联系邮箱 -->
          <li>
            <el-form-item label="联系邮箱:">
              <el-input></el-input>
            </el-form-item>
          </li>
          <!-- 举办拍卖会次数 -->
          <li>
            <el-form-item label="举办拍卖会次数:">
              <el-input></el-input>
            </el-form-item>
          </li>
          <!-- 请输入旧密码 -->
          <li>
            <el-form-item label="请输入旧密码:">
              <el-input></el-input>
            </el-form-item>
          </li>
          <!-- 请输入新密码 -->
          <li>
            <el-form-item label="请输入新密码:">
              <el-input></el-input>
            </el-form-item>
          </li>
        </ul>
      </el-form>
     </div>
  </SameCard>
</template>

<style scoped>
.user-main-body
{
  display: flex;
  justify-content: center;
  align-items: center;
  ul
  {
    margin-top: 30px;
  }
}
</style>
