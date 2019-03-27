<template>
	<div class="daninfo">
		<el-row>
			<el-col :span="24">
				<div class="heng2" :id="num-1" v-for="(item,index) in list" v-if="index==num-1">
					<h3>{{item.catalog}}</h3>
					<div class="active">查看更多<span class="el-icon-d-arrow-right"></span></div>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="4" v-for="(item,index) in list2"  v-if="(num+1)<=index & index<(num+13)">
				<div class="booklist" >
					<img :src="item.img" />
					<h4>{{item.title}}</h4>
					<h4>价格：￥  {{item.price}}</h4>
				</div>
			
			</el-col>
	
		</el-row>
	</div>
	
</template>

<script>
	export default {
	 name: 'dan',
	 props: ["list","list2","num"],
	 data:function (){
		return {
			
		}
	}
	
		
	}
</script>

<style>
	.daninfo {
		  background-color: #f5f5f5;
	}
	.daninfo  .booklist img{
		 height: 260px;
		 width: 180px;
	}
	.daninfo  .booklist:hover{
		  transform: translateY(-5%);
		  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		  transition: transform 0.8s, box-shadow 0.8s;
	}
	.daninfo  .booklist h4 {
		 color: #c78729; 
		 text-align: center;
		 margin-bottom: 30px;
	}
	.daninfo  .heng2 {
		  width: 100%;
		  display: flex;
		  justify-content: space-between;
		  margin-top: 30px;
	}
	.daninfo  .heng2 h3 {
		  margin-left: 10px;
	}
	
	.daninfo  .heng2 .active:hover {
		  color: coral;
		  font-weight: 700;
		  font-size: 18px;
	}
</style>
