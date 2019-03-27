<template>
	<div>
		<dht></dht>
  <div id="loginAndregister">
    <div class="logo">
      <a href="#">
        <img src="../assets/xwlogo.png" alt>
      </a>
    </div>
    <div class="C-login">
      <Loginform class="window"/>
    </div>
    <Footer class='logpage-footer'/>
  </div>
	</div>
</template>

<script>
import dht from "../components/public/dht.vue"
import Loginform from '../components/login/loginform.vue'
import Footer from '../components/public/foot.vue'
export default {
  name: 'loginAndregister',
  components: {
    Loginform,Footer,dht
  }
}
</script>

<style scoped>
.logpage-footer {
  margin-top: 100px;
}
.logo {
  width: 100%;
  height: 100px;
  position: relative;
}
.logo img {
  margin-left: 170px;
  margin-top: -20px;
  height: 140px;
}
.C-login {
  width: 100%;
  height: 365px;
  background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/553c5e503fc83138c76bd7c17c1434db.jpeg");
  background-position-x: -540px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
