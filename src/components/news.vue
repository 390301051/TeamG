<template>
	<div class="news">
		<a>
			<img :src="items.thumbnail_pic_s"/>
			<h4>{{items.title}}</h4>
		</a>

	</div>
</template>

<script>
	
	export default {
	 name: 'news',
	 props: ["items"],
	 data:function (){
		return {}
	},
	methods:{
		myfun:function(){
			this.$emit("myfun",item.uniquekey)
		}
	}
		
		
	}
</script>

<style>
	.news {
		margin: 10px 0px;
	}
	.news a {
		display: flex;
	}
	 .news img {
		width: 120px;
		height: 100px;
		border-radius: 3%;
		margin-right: 10px;
	}
	.news img:hover {
		transform: scale(1.1,1.1);
		transition: transform 0.5s;
	}
	.news h4 {
		font-weight: 400;
		margin: 20px 0px;
	}
	.news h4:hover {
		color: crimson;
		font-weight: 500;
		text-decoration: underline;
	}
</style>
