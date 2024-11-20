<script setup lang="ts">
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
      <el-card style="max-width: 600px;" v-if="ischangeinformation">
        <template #header>你好,拍卖师</template>
        <el-form
        class="demo-ruleForm"
        label-width="auto"
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
              <el-input placeholder="太卷"></el-input>
            </el-form-item>
          </li>
          <!-- 电话 -->
          <li>
            <el-form-item label="电话:">
              <el-input placeholder="1212121212"></el-input>
            </el-form-item>
          </li>
          <!-- 联系邮箱 -->
          <li>
            <el-form-item label="联系邮箱:">
              <el-input placeholder="145364543@1425.uyh"></el-input>
            </el-form-item>
          </li>
          <!-- 举办拍卖会次数 -->
          <li>
            <el-form-item label="举办拍卖会次数:">
              <el-input placeholder="145"></el-input>
            </el-form-item>
          </li>
        </ul>
        </el-form>
      </el-card>

      <el-card style="max-width: 600px;" v-else>
        <template #header>你好,拍卖师</template>
        <el-form
        class="demo-ruleForm"
        label-width="auto"
        >
        <div>
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
              <el-input placeholder="太卷"></el-input>
            </el-form-item>
          </li>
          <!-- 电话 -->
          <li>
            <el-form-item label="电话:">
              <el-input placeholder="1212121212"></el-input>
            </el-form-item>
          </li>
          <!-- 联系邮箱 -->
          <li>
            <el-form-item label="联系邮箱:">
              <el-input placeholder="145364543@1425.uyh"></el-input>
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
        </div>
      </el-form>
      </el-card>

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
