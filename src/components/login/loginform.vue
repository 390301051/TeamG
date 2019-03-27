<template>
  <div>
    <form class="C-form" v-if="flag==1">
      <div class="title">
        <span @click="forchange1">账号登陆</span>
        <span @click="forchange2">账号注册</span>
      </div>
  <el-input v-model="login_username" placeholder="请输入账号" clearable></el-input>
 <el-input v-model="login_psw" placeholder="请输入密码" clearable show-password></el-input>
      <el-button  type="primary"  @click.prevent="login" class='login-form-loginbtn'>登录</el-button >
    </form>
    <form class="C-form" v-if="flag==2">
      <div class="title">
        <span @click="forchange1">账号登陆</span>
        <span @click="forchange2">账号注册</span>
      </div>
  <el-input v-model="reg_username" placeholder="账号" clearable></el-input>
   <el-input v-model="reg_psw" placeholder="密码" clearable show-password></el-input>
  <el-input v-model="reg_phonenum" placeholder="手机号" clearable></el-input>
      <el-button type="primary"  @click.prevent="register" class='login-form-registerbtn'>注册</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'lAndre',
  data () {
    return {
      flag: 1,
      login_username: '',
      login_psw: '',
      reg_username:'',
      reg_psw:'',
      reg_phonenum:'',
    }
  },
  methods: {
    forchange1 () {
      this.flag = 1
    },
    forchange2 () {
      this.flag = 2
    },
    register () {
      let url = 'www.baidu.com'
      this.$http.post(url, {
        username: this.username,
        psw: this.psw
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    login () {
      console.log(666)
    }
  }
}
</script>

<style scoped>
.login-form-loginbtn {
   margin-top: 20px;
}
.login-form-registerbtn {
  margin-top: 20px;
}
.C-form {
  /* border: 1px solid #666; */
  width: 350px;
  margin-right: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
}
.title {
  margin-right: 20px;
  font-size: 24px;
  color: #2196f3;
  margin-bottom: 20px;
}
.title:hover {
  cursor: pointer;
}
.psw {
  width: 280px;
}
.username {
  width: 280px;
}
.forlogin {
  background-color: #2196f3;
  display: block;
  margin: 0 auto;
}
</style>
