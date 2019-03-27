<template>
	<div><dnt></dnt>
	<div id="container">
		<div class="head">
			<lunbo></lunbo>
			<!-- 右侧新闻 -->
			<ul class="rightclass">
				<h1 class="hotnews" @click="page(newsdata[0].uniquekey)">
					<span style="background-color: #4F6341;"></span>
					<a style="color: #4F6341;">{{newsdata[0].title}}</a></h1>
				<h1 class="hotnews" @click="page(newsdata[1].uniquekey)">
					<span style="background-color: #4F6341;"></span>
					<a style="color: #4F6341;">{{newsdata[1].title}}</a></h1>
				<li v-for="(item,index) in newsdata" v-if="1<index&&index<9" @click="page(item.uniquekey)" >
					<rightnews :rightnews="item"></rightnews>
				</li>
			</ul>
		</div>
		<!-- 即时播报 -->
		<div class="rightnow">
			<h4 style="color:#4F6341;">即时播报:</h4>
			<marquee direction="left" behavior="scroll"><a v-for="(item,index) in newsdata" v-if="1<index&&index<9" href="" >{{item.title}}</a></marquee>
		</div>
		<!-- 广告模块 -->
		<div style="display: flex; width: 1200px; justify-content: space-between; align-content: center;">
		<adswiper :adswtushudata="bookabout.slice(0,4)"></adswiper>
		<adswiper :adswtushudata="bookabout.slice(4,8)"></adswiper>
		<adswiper :adswtushudata="bookabout.slice(9,13)"></adswiper>
		</div>
		<!-- 中部左侧新闻切换卡 -->
		<div class="middle">
			<div class="middle-left">
				<div class="itemclass" style="border-top: 2px solid #586E48;">
					<a :class="showindex==1?active:''" @mouseenter="show">中国军情</a>
					<a :class="showindex==2?active:''" @mouseenter="show">国际军情</a>
					<a :class="showindex==3?active:''" @mouseenter="show">邻邦扫描</a>
					<a :class="showindex==4?active:''" @mouseenter="show">军事集锦</a>
				</div>
				<div class="itemshow " v-show="showindex==1">
					<div class="chinaitems " v-for="(item,index) in newsdata" v-if="index<maxindex" @click="page(item.uniquekey)" >
						<middleleft :china="item"></middleleft>
					</div>
				</div>
				<div class="itemshow " v-show="showindex==2">
					<div class="chinaitems " v-for="(item,index) in newsdata" v-if="5<index&&index<maxindex+5" :key="index" @click="page(item.uniquekey)">
						<middleleft :china="item"></middleleft>
					</div>
				</div>
				<div class="itemshow " v-show="showindex==3">
					<div class="chinaitems " v-for="(item,index) in newsdata" v-if="10<index&&index<maxindex+10" @click="page(item.uniquekey)">
						<middleleft :china="item"></middleleft>
					</div>
				</div>
				<div class="itemshow " v-show="showindex==4">
					<div class="chinaitems " v-for="(item,index) in newsdata" v-if="16<index&&index<maxindex+16" @click="page(item.uniquekey)">
						<middleleft :china="item"></middleleft>
					</div>
				</div>
				<el-button type="info" @click="more">加载更多</el-button>
			</div>
			<div class="middle-right">
				<!-- 中部右侧军事图文模块 -->
				<div class="newsimg" style="border-top: 2px solid #586E48;">
					<h3 style="color: #586E48;">军事图库</h3>
					<div class="imgitem">
						<div v-for="(item,index) in newsdata" v-if="0<index&&index<5" @click="page(item.uniquekey)">
							<div class="imgitemone">
										<a><img :src="item.thumbnail_pic_s"></a>
										<p>{{item.title}}</p>
							</div>
						</div>
					</div>
				</div>

				<!-- 中部右侧军事揭秘 -->
				<div class="warscrect" style="border-top: 2px solid #586E48;">
					<h3 style="color: #586E48;">军事揭秘</h3>
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
	// import "../src/components/junshi/junshi.js"
	import adswiper from "../components/public/adswiper.vue"
	import "../components/junshi/junshi.css"
	// import junshiData from "../../data/junshidata.js"
	import dnt from "../components/public/dht.vue"
	import foot from "../components/public/foot.vue"

	import lunbo from "../components/junshi/lunbo.vue"
	import rightnews from "../components/junshi/rightnews.vue"
	import middleleft from "../components/junshi/middleleft.vue"
	// console.log(junshiData.result.data)
	export default {
		name: "Junshi",
		data() {
			return {
				newsdata:[],
				bookabout:[],
				maxindex:5,
				showindex:1,
				active:"active"
			};
		},
		methods: {
			more(e) {
				this.maxindex = this.maxindex + 2;
				if (this.maxindex > 30) {
					e.target.disabled = true;
				}
			},
			show(e){
				switch (e.target.innerText){
					
					case "中国军情": this.showindex=1; break;
					case "国际军情": this.showindex=2; break;
					case "邻邦扫描": this.showindex=3; break;
					case "军事集锦": this.showindex=4; break;
				}
			},
			page(id){
				console.log(id)
				window.location.href=`http://localhost:8080/#/newsabout?id=${id}`		
				}
		},
		components:{
			lunbo,
			rightnews,
			middleleft,
			dnt,
			foot,
			adswiper
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
			xhr.open("get","http://192.168.2.103:81/xwzhanshi?categoryid=18011",true)
			xhr.send()
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					_this.newsdata=JSON.parse(xhr.responseText).result
					// console.log(_this.newsdata)

				}
			}
			
			var xhr2=new XMLHttpRequest()
			xhr2.open("get","http://192.168.2.103:81/spzhanshi?cataid=242",true)
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

<style scoped="scoped">


</style>
