<script setup>
// 图片列表
import { ref } from 'vue'

const imagenumber = ref(0)
const changeimage = (data) => {
    imagenumber.value = data
}
</script>


<template>
    <div class="profile-content">
        <img
            class="profile-avatar"
            src="@/assets/avatar.jpg"
            alt="头像"
          />
          <div class="profile-info">
                <el-form
                class="demo-ruleForm"
                label-width="auto"
                >
                    <ul>
                    <!-- 拍卖师名字 -->
                    <li>
                        <el-form-item label="名字:">
                        林黛玉
                        </el-form-item>
                    </li>
                    <!-- 用户名 -->
                    <li>
                        <el-form-item label="用户名:">
                        鸡你太美
                        </el-form-item>
                    </li>
                    <!-- 电话 -->
                    <li>
                        <el-form-item label="电话:">
                        12345678901
                        </el-form-item>
                    </li>
                    <!-- 联系邮箱 -->
                    <li>
                        <el-form-item label="联系邮箱:">
                        1234567890@qq.com
                        </el-form-item>
                    </li>
                    <!-- 举办拍卖会次数 -->
                    <li>
                        <el-form-item label="举办拍卖会次数:">
                        88
                        </el-form-item>
                    </li>
                    </ul>
                </el-form>
            </div>
    </div>
</template>

<style scoped lang="scss">
.el-form-item
{
justify-content:  flex-start;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
//   padding: 20px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid #f0f0f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.profile-info {
  width: 100%;
  text-align: left;
  line-height: 1.8;
  font-size: 16px;
  color: #666;
}
</style>