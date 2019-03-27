<template>
	<div class="gouwuche">
		<el-card class="box-card">
			<div class="clearfix">
				<span>购物车</span>
				<el-button style="float: right; padding: 0px 3px" type="text" @click="mydelall">清空购物车</el-button>
			</div>
			<table>
				<tr v-for="items in gouwuche" class="text item">
					<td>{{items.title}}</td>
					<td>{{items.price}}</td>
					<td>{{items.number}}</td>
					<td>删除</td>
				</tr>
	
			</table>
			<div class="clearfix">
				<span>提交</span>
			</div>
		</el-card>
	</div>
</template>

<script>
		export default {
	 name: 'gouwuche',
	 props: ["gouwuche"],
	 data:function (){
		return {
			
		}
	},
		methods: {
		mydelall: function() {
			
			this.$emit("mydelall")
		}
	}
		
	}
</script>

<style>
	.gouwuche {
		  width: 450px;
		  position: fixed;
		  bottom: 5px;
		  right: 150px;
		  z-index: 999;
		  border-radius: 3%;
	 }
 .gouwuche .el-card {
		  background-color: rgba(234,231,134,0.5);
	 }
	  .gouwuche .clearfix {
		  font-weight: 700;
		  color: coral;
		  font-size: 20px;
		  margin: 10px 0px;
		  text-align: center;
	 }
	 .gouwuche .text{
		  width: 400px;
		 display: flex;
		 
	 }
	 .gouwuche .text td {
		  width: 25%;
		  text-align: center;
	 }
</style>
