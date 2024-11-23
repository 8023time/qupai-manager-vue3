<script setup>
// 图片列表
import { ref } from 'vue'
import { UseUserStore } from '@/stores';
import { onMounted } from 'vue'

const userstore = UseUserStore()
const userdatalist = ref()
userdatalist.value = userstore.user
onMounted(
    ()=>userstore.getuserinfor()
)
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
                    <li>
                        <el-form-item label="姓名:">
                        {{userdatalist.name || "未留名"}}
                        </el-form-item>
                    </li>
                    <li>
                        <el-form-item label="用户名:">
                        {{userdatalist.username || userdatalist.nickName || "未知用户"}}
                        </el-form-item>
                    </li>
                    <li>
                        <el-form-item label="电话:">
                        {{userdatalist.phone || "还未添加联系电话"}}
                        </el-form-item>
                    </li>
                    <!-- 未开发 -->
                    <li>
                        <el-form-item label="联系邮箱:">
                        {{"还未添加联系邮箱"}}
                        </el-form-item>
                    </li>
                    <li>
                        <el-form-item label="举办拍卖会次数:">
                        {{userdatalist.chance || "还未举办过拍卖会"}}
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