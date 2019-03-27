<template>
  <div class="C-personpage-info">
    <h3 class='personpage-info-title'>我的资料</h3>
    <!-- <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" :placeholder="username">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">个性签名</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" :placeholder="sign">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-primary" @click.prevent="givepersoninfo">确定</button>
        </div>
      </div>
    </form>-->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input v-model="sign"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="givepersoninfo" >立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script scoped>
export default {
  name: 'personpage-info',
  data() {
    return {
      username: 'joker',
      sign: '今天又是美好的一天'
    }
  },
  methods: {
    givepersoninfo() {
      console.log(666)
    }
  }
}
</script>

<style>
.C-personpage-info {

height: 285px;
width: 400px;
}
</style>
