<template>
  <div style="width: 100%; background-color:#F56C6C;display: flex;align-content: center;justify-content: center;" class="dht-C">
    <div style="width: 4%; display: flex;align-content: center;justify-content: center;"><img
      src="../../assets/xwlogo.png"
      style="height: 60px;width:60px;margin-right: 335px;"/></div>
    <el-menu
      mode="horizontal"
      background-color="#F56C6C"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border-bottom: none;width: 1200px;"
    >
			<el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="1"><router-link to="/shehui">社会</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/woman">女人</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/guonei">国内</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/guoji">国际</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/yule">娱乐</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/tiyu">体育</router-link></el-menu-item>
      <el-menu-item index="7"><router-link to="/junshi">军事</router-link></el-menu-item>
      <el-menu-item index="9"><router-link to="/shangcheng">商城</router-link></el-menu-item>
			<el-menu-item index="9"><router-link to="/login">登录</router-link></el-menu-item>
    </el-menu>
  </div>
  <!-- <div class='dht-C'>
		<div classs>
			
		</div>
  </div>-->
</template>

<script>
export default {
  name: "dht",
}
// 	export default {
// 		name:"dht",
// 		props:{
// 			adswtushudata:{
// 				type:,
// 				require:true
// 			}
// 		}
// 		data(){
// 			return{
// 				
// 			};
// 		}
// 	}
</script>

<style scoped>
.dht-C {
  margin-bottom: 20px;
}
</style>
