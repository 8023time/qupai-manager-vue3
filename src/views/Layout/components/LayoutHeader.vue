<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom
} from '@element-plus/icons-vue'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { UseUserStore } from '@/stores'
import { removeusertoken } from '@/api/user'

const userstore = UseUserStore()
const onconfirm = async () => {
  await removeusertoken()
  userstore.removetoken()
  userstore.user = {}
  router.push('/login')
  ElMessage.success('退出登录成功!')
}
</script>

<template>
    <div class="container">
        <div class="title">趣拍助手</div>
        <div>
            <ul>
                <li>你好,拍卖师!<a @click="router.push('/user')"><el-icon><User /></el-icon>{{userstore.user.name || userstore.user.nickName || "未知用户"}}</a></li>
                <li>
                    <el-popconfirm title="确认要退出吗?" 
                    confirm-button-text="确认" 
                    cancel-button-text="取消" 
                    @confirm="onconfirm"
                    >
                    <template #reference>
                        <a href="javascript:;">退出登录</a>
                    </template>
                    </el-popconfirm>
                </li>
            </ul>
      </div>
    </div>
</template>


<style scoped lang="scss">
.container{
  height: 100%;
  line-height: 80px;
  font-family: 'Courier New', monospace;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  width: 100%;
  .title
  {
    font-size: 26px;
    margin-left: 40px;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
        align-items: center;
        img
    {
        border-radius: 50%;
        height: 10%;
        width: 10%;
    }
      a {
        padding: 0 15px;
        color: #0b0a0a;
        line-height: 1;
        display: inline-block;

        i {
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>