<template>
	<div>
		<myheader></myheader>
		<div id="xiangqingapp">
			<div>
				<h1>{{list.title}}</h1>
				<span>{{list.date}}</span> <span>来源：{{list.author_name}}</span>
				<p>{{p1}}</p>
				<img :src="list.thumbnail_pic_s" />
				<p>{{p2}}</p>
				<img :src="list.thumbnail_pic_s02" />
				<p>{{p3}}</p>
				<img :src="list.thumbnail_pic_s03" />
				<p>{{p4}}</p>
			</div>
		</div>
		<myfoot></myfoot>
	</div>
</template>

<script>
	// import datas from '../data/guojidata.js'
	import myheader from '../src/components/public/dht.vue'
	import myfoot from '../src/components/public/foot.vue'
	export default {
	 name: 'info',
	 props: ["item"],
	 data:function (){
		return {
			list: {},
				num: "2", //数据请求过来的uniquekey
				p1: "世界之大无奇不有，所以在经济发展的今天，很多小伙伴都选择走出国门去看一看外面的世界。在很多地方都存在着一些原始部落，他们的生活观念和生活习俗与我们有很大的差别，甚至有些习俗令人简直难以置信。",
				p2: "在北极圈里就有这一个原始部落，我们称他们为爱斯基摩人，爱斯基摩人的日常生活是我们普通人难以忍受的。他们生活在非常寒冷的北极圈，生活环境经常达到零下七八十度，但是他们依旧住在冰块做成的房子里。",
				p3: "这个部落的人口非常稀少，所以就有了孩子归集体所有的习俗。为了使部落的人口增加，他们有一个习俗更是超级尴尬，那就是这个部落的男人会让自己的妻子和来到这里旅游的游客一起过夜。",
				p4: "这样不但能够更好的为部落传宗接代，还能避免因为近亲结婚而出现孩子畸形的情况。对于他们的这种习俗，你有什么想说的呢？图片来自网络，如有侵权联系删除。"
			
		}
	},
	components:{
		myheader,
		myfoot
	},
	mounted:function(){
		var _this=this;
			var url=window.location.href
			// http://localhost:8080/#/newsabout?id=11
			var arr=url.split("?");
			var id=arr[1].split("=")[0]
			var value=arr[1].split("=")[1]
			// 发送ajax请求，请求详情页的数据
			var xhr;
			if(window.XMLHttpRequest){
				xhr=new XMLHttpRequest()
			}else{
				xhr=new ActiveXObject("Microsoft XMLHTTP")
			}
			xhr.open("get",`http://192.168.2.103:81/xwxiangqing?uniquekey=${value}`,true)
			xhr.send()
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					// console.log(xhr.responseText)
					_this.list=JSON.parse(xhr.response)[0]
				}
			}

	}
		
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		cursor: pointer;
	}
	li {
		list-style: none;
	}
	#xiangqingapp {
		width: 1000px;
		margin: 0 auto;
		/* display: flex; */
	}
	#xiangqingapp h1 {
		margin: 30px 0px;
	}
	#xiangqingapp span {
		font-weight: 400;
		color: #777;
		margin-right: 20px;
		font-size: 14px;
	}
	#xiangqingapp p {
		margin: 30px 0px;
		text-indent: 2em;
		line-height: 30px;
	}
	#xiangqingapp img {
		width: 1000px;
		height: auto;
	}
</style>
