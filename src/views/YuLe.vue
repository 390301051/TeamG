<template>
	<div><dnt></dnt>
	<div id="container">
		<div class="head">
			<lunbo></lunbo>
			<!-- 右侧新闻 -->
			<ul class="rightclass">
				<h1 class="hotnews" @click="page(newsdata[0].uniquekey)">
					<span></span>
					<a>{{newsdata[0].title}}</a></h1>
				<h1 class="hotnews" @click="page(newsdata[1].uniquekey)">
					<span></span>
					<a>{{newsdata[1].title}}</a></h1>
				<li v-for="(item,index) in newsdata" v-if="1<index&&index<9" @click="page(item.uniquekey)">
					<rightnews :rightnews="item"></rightnews>
				</li>
			</ul>
		</div>
		<!-- 即时播报 -->
		<div class="rightnow">
			<h4 style="color:#C54F00;">娱乐播报:</h4>
			<marquee direction="left" behavior="scroll"><a v-for="(item,index) in newsdata" v-if="1<index&&index<9" href="">{{item.title}}</a></marquee>
		</div>
		<!-- 中部娱乐大视野 -->
		<div class="bigview">
			<bigview></bigview>
		</div>
		<!-- 中部新闻 -->
		<!-- 广告模块 -->

		<div style="display: flex; width: 1200px; justify-content: space-between; align-content: center;">
		<adswiper :adswtushudata="bookabout.slice(0,4)"></adswiper>
		<adswiper :adswtushudata="bookabout.slice(4,8)"></adswiper>
		<adswiper :adswtushudata="bookabout.slice(9,13)"></adswiper>
		</div>
		<div class="middle">
			<!-- 中部左侧新闻 -->
			<div class="middle-left" style="border-top: 2px solid #C54F00;">
				<div class="itemshow">
					<div class="chinaitems " v-for="(item,index) in newsdata" v-if="index<maxindex" @click="page(item.uniquekey)">
						<middleleft :china="item"></middleleft>
					</div>
				</div>
				<el-button type="info" @click="more">加载更多</el-button>
			</div>
			<div class="middle-right">
				<!-- 中部右侧娱乐图文模块 -->
				<div class="newsimg">
					<h3>娱乐图库</h3>
					<div class="imgitem">
						<div v-for="(item,index) in newsdata" v-if="20<index&&index<25" @click="page(item.uniquekey)">
							<div class="imgitemone">
								<a><img :src="item.thumbnail_pic_s"/></a>
								<p>{{item.title}}</p>
							</div>
						</div>
					</div>
				</div>

				<!-- 中部右侧军事揭秘 -->
				<div class="warscrect">
					<h3>娱乐大事件</h3>
					<ul>
						<li v-for="(item,index) in newsdata" v-if="10<index&&index<18" @click="page(item.uniquekey)">
							<a>{{item.title}}</a>
						</li>
					</ul>
				</div>
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
	import "../components/yule/yule.css"
	// import yuledata from "../../data/yuledata.js"
	import lunbo from "../components/yule/lunbo.vue"
	import rightnews from "../components/yule/rightnews.vue"
	import middleleft from "../components/yule/middleleft.vue"
	import bigview from "../components/yule/bigview.vue"
	export default {
		data() {
			return {
				newsdata: [],
				maxindex: 5,
				bookabout:[]
			};
		},
		methods: {
			more(e) {
				this.maxindex = this.maxindex + 2;
				if (this.maxindex > 30) {
					e.target.disabled = true;
				}
			},
			page(id){
				// console.log(id)
				window.location.href=`http://localhost:8080/#/newsabout?id=${id}`
			}
		},
		components: {
			lunbo,
			rightnews,
			middleleft,
			bigview,
			dnt,
			foot,
			adswiper
		},
		mounted:function(){
			var _this=this
			this.$http.get("http://192.168.2.103:81/xwzhanshi",{
				params:{
					categoryid:18017
				}
			})
			.then(function(respone){
				// console.log(respone.data.result)
				// console.log(_this.newsdata)
				_this.newsdata=respone.data.result
			})
			.catch(function(error){
				console.log(error)
			})
			
			
			
			var xhr2=new XMLHttpRequest()
			xhr2.open("get","http://192.168.2.103:81/spzhanshi?cataid=248",true)
			xhr2.send()
			xhr2.onreadystatechange=function(){
				if(xhr2.readyState==4&&xhr2.status==200){
					// console.log(JSON.parse(xhr.responseText))
					_this.bookabout=JSON.parse(xhr2.responseText)
					console.log(_this.bookabout)
					
				}
			}
		}
	}
</script>

<style></style>