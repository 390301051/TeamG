<template>
	<div><dnt></dnt>
	<div id="container">
		<lunbo></lunbo>
		<div class="hot">
			<!-- 轮播下侧新闻 -->
			<ul class="rightclass">
				<h1 class="hotnews" @click="page(newsdata[0].uniquekey)">
					<a>{{newsdata[0].title}}</a></h1>
				<li v-for="(item,index) in newsdata" v-if="0<index&&index<9"  @click="page(item.uniquekey)">
					<rightnews :rightnews="item"></rightnews>
				</li>
			</ul>
			
			<ul class="rightclass">
				<h1 class="hotnews" @click="page(newsdata[9].uniquekey)">
					<a>{{newsdata[9].title}}</a></h1>
				<li v-for="(item,index) in newsdata" v-if="9<index&&index<18" @click="page(item.uniquekey)">
					<rightnews :rightnews="item"></rightnews>
				</li>
			</ul>
			
			<div class="pictext">
				<h3 style="color: black; margin: 0px;">百家专栏</h3>
				<div v-for="(item,index) in newsdata" v-if="10<index&&index<15" @click="page(item.uniquekey)">
					<pictext :picitem="item"></pictext>
				</div>
			</div>
		</div>
		<!-- NBA新闻模块 -->
		<!-- 广告模块 -->
		<div style="display: flex; width: 1200px; justify-content: space-between; align-content: center;">
		<adswiper :adswtushudata="bookabout.slice(0,4)"></adswiper>
		<adswiper :adswtushudata="bookabout.slice(4,8)"></adswiper>
		<adswiper :adswtushudata="bookabout.slice(9,13)"></adswiper>
		</div>
		
		<div class="nbavideo">
			<div class="hot nba">
				<h3 style="color: black; margin: 0px;">NBA🏀COM</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<ul class="rightclass">
					<h1 class="hotnews" @click="page(newsdata[25].uniquekey)">
						<a>{{newsdata[25].title}}</a></h1>
					<li v-for="(item,index) in newsdata" v-if="25<index&&index<30" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
				<ul class="rightclass">
					<h1 class="hotnews" @click="page(newsdata[10].uniquekey)">
						<a>{{newsdata[10].title}}</a></h1>
					<li v-for="(item,index) in newsdata" v-if="20<index&&index<25" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
			</div>
			<div class="video">
				<h3 style="color: black; margin: 0px;">视频专栏</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<div class="videoitem" v-for="item in videoitem" @click="videoabout(item.id)">
					<video :src="item.src" muted="muted" autoplay="autoplay" loop="loop"></video>
					<a>
						<h3>{{item.title}}</h3>
					</a>
				</div>
			</div>
		</div>
		<!-- 国际足球 -->
		<div class="foot">
			<div class="football">
				<h3 style="color: black; margin: 0px;">国际⚽足球</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<ul>
					<h3 @click="page(newsdata[5].uniquekey)">
						<a>{{newsdata[5].title}}</a></h3>
					<li v-for="(item,index) in newsdata" v-if="5<index&&index<12" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
				<ul>
					<h3 @click="page(newsdata[15].uniquekey)">
						<a>{{newsdata[15].title}}</a></h3>
					<li v-for="(item,index) in newsdata" v-if="15<index&&index<22" @click="page(item.uniquekey)">
						<rightnews :rightnews="item"></rightnews>
					</li>
				</ul>
			</div>
			<div class="footimg">
				<h3 style="color: black; margin: 0px;">百家专栏</h3>
				<hr style="background-color: #C7C7C7; width: 100%;height: 2px; border: none; margin-top: -2px;" />
				<div v-for="(item,index) in newsdata" v-if="20<index&&index<22" @click="page(item.uniquekey)">
					<pictext :picitem="item"></pictext>
				</div>
				<ul>
					<li v-for="(item,index) in newsdata" v-if="20<index&&index<30" @click="page(item.uniquekey)"><a>{{item.title}}</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div><foot></foot></div>
	</div>
</template>

<script>
	import adswiper from "../components/public/adswiper.vue"
	import dnt from "../components/public/dht.vue"
	import foot from "../components/public/foot.vue"
	// import tiyudata from "../../data/tiyudata.js"
	import lunbo from "../components/tiyu/lunbo.vue"
	import rightnews from "../components/tiyu/rightnews.vue"
	import pictext from "../components/tiyu/pictext.vue"
	import "../components/tiyu/tiyu.css"
	import $ from "jquery"

	export default {
		data() {
			return {
				newsdata:[],
				bookabout:[],
				videoitem:[]
			};
		},
		methods:{
			page:function(id){
				// console.log(id)
				window.location.href=`http://localhost:8080/#/newsabout?id=${id}`
			},
			videoabout:function(id){
				window.location.href=`http://localhost:8080/#/video?id=${id}`
			}
		},
		components:{
			lunbo,rightnews,pictext,dnt,foot,adswiper
		},
		mounted:function(){
			var _this=this;
			// jquery封装的ajax请求
			$.ajax({
				url:"http://192.168.2.103:81/xwzhanshi",
				data:"categoryid=18018",
				type:"get",
				success:function(data){
					_this.newsdata=data.result
				},
				error:function(){}
			})
			
			
			var xhr2=new XMLHttpRequest()
			xhr2.open("get","http://192.168.2.103:81/spzhanshi?cataid=244",true)
			xhr2.send()
			xhr2.onreadystatechange=function(){
				if(xhr2.readyState==4&&xhr2.status==200){
					// console.log(JSON.parse(xhr.responseText))
					_this.bookabout=JSON.parse(xhr2.responseText)
					console.log(_this.bookabout)
					
				}
			}
			
			
			var xhr3=new XMLHttpRequest()
			xhr3.open("get","http://192.168.2.103:81/video",true)
			xhr3.send()
			xhr3.onreadystatechange=function(){
				if(xhr3.readyState==4&&xhr3.status==200){
					// console.log(JSON.parse(xhr.responseText))
					_this.videoitem=JSON.parse(xhr3.responseText)
					console.log(_this.videoitem)
					
				}
			}
			
		}
	}
</script>

<style>

</style>
