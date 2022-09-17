<template>
  <div id="login">
    <div class="login-wrapper">
      <el-form
        ref="loginRef"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
      >
        <h3 class="title">{{ $t(`main.请登录`) }}</h3>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            auto-complete="off"
            :placeholder="$t(`main.账号`)"
          >
            <template #prefix>
              <user class="el-input__icon input-icon"></user>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            :placeholder="$t(`main.密码`)"
            @keyup.enter="handleLogin"
            show-password
          >
            <template #prefix>
              <lock class="el-input__icon input-icon"></lock>
            </template>
          </el-input>
        </el-form-item>

        <div class="operate-area">
          <el-checkbox v-model="loginForm.rememberMe" class="remember-me">{{
            $t(`main.记住用户名`)
          }}</el-checkbox>
        </div>

        <el-form-item style="width: 100%">
          <el-button
            :loading="loading"
            size="default"
            type="primary"
            style="width: 100%"
            @click.prevent="handleLogin"
          >
            <span v-if="!loading">{{ $t(`main.登录`) }}</span>
            <span v-else>{{ $t(`main.登录`) }}...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import i18n from '@/language/i18n'
import { User, Lock, CaretBottom } from '@element-plus/icons-vue'
import { ElForm } from 'element-plus'
import localCache from '@/common/utils/cache'

const loginForm = ref({
  username: localCache.getCache('username') ?? '',
  password: localCache.getCache('password') ?? '',
  rememberMe: localCache.getCache('rememberMe') ?? false,
})

let loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.global.t('main.请输入您的账号'),
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.global.t('main.请输入您的密码'),
    },
  ],
})

const loading = ref(false)

/*
  class C {}
  type T = InstanceType<typeof C>
  type T = C
  ref 定义的属性暴漏出去后，标签上的ref会自动索引到暴漏的属性
*/
const loginRef = ref<InstanceType<typeof ElForm>>()

function handleLogin() {
  loginRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否需要记住密码(此次仅需要记住用户名)
      localCache.setCache('rememberMe', loginForm.value.rememberMe)
      if (loginForm.value.rememberMe) {
        localCache.setCache('name', loginForm.value.username)
        // localCache.setCache('password', loginForm.value.password)
      } else {
        localCache.deleteCache('name')
        // localCache.deleteCache('password')
      }
      // 2.开始登录
      // store.dispatch('login/accountLoginAction', {
      //   name: loginForm.value.username,
      //   password: loginForm.value.password
      // })
    }
  })
}
watchEffect(() => {
  loginForm.value.username = loginForm.value.username.replaceAll(' ', '')
  loginForm.value.password = loginForm.value.password.replaceAll(' ', '')
})
</script>

<style lang="less" scoped>
#login {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/img/common/login-back.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .operate-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem /* 20/80 */;
    .el-dropdown-link {
      color: #000;
    }
    .remember-me {
      color: #000;
    }
  }
  .login-form {
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.5);
    width: 400px;
    padding: 25px 25px 5px 25px;
    color: #000;
    .el-input {
      height: 38px;
    }
    input {
      height: 38px !important;
    }
    .input-icon {
      height: 32px;
      width: 16px;
      margin-right: 2px;
    }
  }
  .change-language {
    cursor: pointer;
  }
}
</style>
