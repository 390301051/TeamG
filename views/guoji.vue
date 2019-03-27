<template>
	<div>
		<myheader/>
		<div id="guojiapp">
			
			<div class="guojison">
				<div class="leftbox">
					<div class="lefttop">
						<div class="leftone">
							<div class="leftson1">
								<img :src="mysrc1" />
								<a :title="mytitle1">蒙冤入狱39年 美国70岁老人获赔2000多...</a>
							</div>
							<div class="oneson">
								<h3 class="h3title">国际视频</h3>
							</div>
							<div class="vid">
								<div class="" v-for="item in vidlist">
									<video :src="item.src" width="300" height="200" controls>
									</video>
									<a>{{item.title}}</a>
								</div>
							</div>
						</div>
						<div class="lefttwo">
							<ul>
								<li v-for="(item,index) in list">
									<a v-if="index<20" :title="item.title" @click="funguoji(item.uniquekey)">{{item.title}}</a>
								</li>
							</ul>
						</div>
					</div>
					<hr>
					<div class="leftbt">
						<div v-for="item in list"  @click="funguoji(item.uniquekey)"><info :item="item" ></info></div>
					</div>
				
				
				</div>
				<div class="rightbox">
					<div class="oneson">
						<h3 class="h3title">海外视察</h3>
					</div>
					<div v-for="(items1,index) in list" v-if="index<5"  @click="funguoji(items1.uniquekey)" ><news :items="items1" ></news></div>
					<hr>
				
					<div class="oneson">
						<h3 class="h3title">今日深度</h3>
					</div>
					<div v-for="(items2,index) in list"  v-if="4<index & index<10" @click="funguoji(items2.uniquekey)"><news  :items="items2"></news></div>
					<hr>
					<div class="oneson">
						<div display='block'><h3 class="h3title">相关书籍推荐</h3></div>
						
					</div>
					<show :adswtushudata="bookabout.slice(0,4)"></show>
					<show :adswtushudata="bookabout.slice(5,9)"></show>
					<show :adswtushudata="bookabout.slice(15,20)"></show>
					<hr>
				</div>
			</div>
			
		</div>
		<myfoot/>
	</div>
</template>

<script>
	import info from "../src/components/info.vue"
	import news from "../src/components/news.vue"
	// import datas from '../data/guojidata.js'
	import myheader from '../src/components/public/dht.vue'
	import show from '../src/components/public/adswiper.vue'
	import myfoot from '../src/components/public/foot.vue'
	import axios from 'axios'
	export default {
		name: "guoji",
		data: function() {
			return {
				uniquekey:"",
				mysrc1: "https://k.sinaimg.cn/n/default/1_img/upload/3933d981/99/w540h359/20190225/JNda-htptaqe0913982.jpg/w320h213l80f74.jpg",
				mytitle1: "蒙冤入狱39年 美国70岁老人获赔2000多万美元",
				list: [],
				vidlist: [{
					src: "http://edge.ivideo.sina.com.cn/207041804.mp4?KID=sina,viask&Expires=1552147200&ssig=1oLvBSN32I",
					title: "普京座驾民用版亮相瑞士日内瓦 吸引众多人士前来参观"
				}, {
					src: "http://edge.ivideo.sina.com.cn/194000903.mp4?KID=sina,viask&Expires=1552147200&ssig=cKNsFcFpyX",
					title: "普京送妇女节祝福：春天为女性生辉 被你们的笑容照亮"
				}],
				bookabout:[]
			}
		},
		components: {
			info,
			news,
			myheader,
			myfoot,
			show
		},
		methods:{
			funguoji:function (id){
				console.log(id)
				window.location.href=`http://localhost:8080/#/xiangqing?id=${id}`
				
			}
		},
		mounted:function(){
			var _this=this
			// 发送ajax请求
			var xhr;
			if(window.XMLHttpRequest){
				xhr=new XMLHttpRequest()
			}else{
				xhr=new ActiveXObject("Microsoft XMLHTTP")
			}
			xhr.open("get","http://192.168.2.103:81/xwzhanshi?categoryid=18013",true)
			xhr.send()
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					 
					_this.list=JSON.parse(xhr.responseText).result
				}
			}
			
			
			var xhr2=new XMLHttpRequest()
			xhr2.open("get","http://192.168.2.103:81/spzhanshi?cataid=248",true)
			xhr2.send()
			xhr2.onreadystatechange=function(){
				if(xhr2.readyState==4&&xhr2.status==200){
					// console.log(JSON.parse(xhr.responseText))
					_this.bookabout=JSON.parse(xhr2.responseText)
					// console.log(_this.bookabout)
					
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

	body {
		background-color: #f7f7f7f;
	}

	#guojiapp {
		width: 1200px;
		margin: 0 auto;
		
		padding: 0 5px;
		 background: #F5F2ED;

	}
	#guojiapp  .guojison {
		display: flex;
	}
	#guojiapp .leftbox {
		width: 800px;
		height: auto;
		display: inline-block;
		border-right: 1px solid #ccc;
	}

	#guojiapp .leftbox .lefttop {
		display: flex;
		width: 800px;
		height: 840px;
	}

	#guojiapp .leftbox .leftone {
		width: 320px;
	}

	#guojiapp .leftbox .leftone .leftson1 a {
		border: 1px solid #ccc;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		padding-left: 5px;
		display: block;
	}

	#guojiapp .oneson {
		margin: 10px 10px;
		border-left: 5px solid mediumblue;
	}

	#guojiapp .oneson .h3title {
		margin-left: 10px;
	}

	#guojiapp .leftbox a:hover {
		color: darkblue;
	}

#guojiapp	.leftbox .vid {
		display: flex;
		flex-wrap: wrap;
	}

	#guojiapp .leftbox .vid div {
		width: 290px;
		margin: 10px 5px;
	}

#guojiapp	.leftbox .vid video:hover {
		transform: scale(1.1, 1.1);
		transition: transform 0.5s;
	}

#guojiapp	.leftbox .vid a:hover {
		color: crimson;
	}

#guojiapp	.leftbox .lefttwo {
		width: 450px;
	}

	#guojiapp .leftbox .lefttwo li {
		margin: 0px 40px 20px;
		overflow: hidden;
		width: 400px;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;

	}

#guojiapp 	.rightbox {
		/* width: 100%; */
		height: auto;
		display: inline-block;
		padding-left: 10px;
	}
</style>
