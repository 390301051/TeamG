<template>
	<div class="info">
		<a><img :src="item.thumbnail_pic_s" /></a>
		<div>
			<a class="h3">
				{{item.title}}
			</a>
			<div>发布时间：{{item.date}}</div>
		</div>
	</div>
</template>

<script>
	export default {
	 name: 'info',
	 props: ["item","list2", "list", "num"],
	 data:function (){
		return {}
	},
	methods:{
		
	}
		
	}
</script>

<style>
.info {
		width: 800px;
		height: auto;
		padding: 20px 0px;
		border-bottom: 1px solid #ccc;
		display: flex;
	}
	.info img {
		margin: 0px 20px;
		width: 200px;
		height: 120px;
		border-radius: 2%;
	}
	.info img:hover {
		transform: scale(1.1,1.1);
		transition: transform 0.5s;
	}
	.info .h3 {
		font-size: 22px;
		margin: 30px 10px;
		font-weight: 400;
	}
	.info .h3:hover {
		color: crimson;
		font-weight: 500;
		text-decoration: underline;
	}
</style>
