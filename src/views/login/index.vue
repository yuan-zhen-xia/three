<template>
  <div class="container">
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 表单提交区域 -->
      <el-form :ref="loginForm" :rules="loginRules" status-icon :model="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:200px" v-model="loginForm.code" placeholder="请输入验证码"></el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value=true>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // 自定义校验规则

  data () {
    const changeMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) { return callback(new Error('手机号格式不正确')) }
      callback()
    }
    return {
      // 表单对象数据
      loginForm: {
        mobile: '',
        code: ''
      },
      // 表单校验规则数据
      loginRules: {
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },

        {
          validator: changeMobile,
          trigger: 'blur'
        }

        ],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        {
          len: 6,
          message: '请输入6位数',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log('提交成功')
        }
      }
      )
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;

    .my-card {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -60%);
      width: 400px;
      height: 350px;

      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
