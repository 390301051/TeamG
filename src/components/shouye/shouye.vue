<template>
	<div id="bodybox">
		<!-- 导航条 -->
		<dht></dht>
		<!-- 悬浮按钮 -->
		<el-menu background-color="#F56C6C" text-color="white" active-text-color="white" class="xfbtnbox">
			<a class="xfbtnbox-a" href="#">
				<el-menu-item index="1">TOP</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#hrefredian">
				<el-menu-item index="2">头条</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#社会">
				<el-menu-item index="3">社会</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#国内">
				<el-menu-item index="4">国内</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#国际">
				<el-menu-item index="5">国际</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#娱乐">
				<el-menu-item index="6">娱乐</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#体育">
				<el-menu-item index="7">体育</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#军事">
				<el-menu-item index="8">军事</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#科技">
				<el-menu-item index="9">科技</el-menu-item>
			</a>
			<a class="xfbtnbox-a" href="#商城">
				<el-menu-item index="10">商城</el-menu-item>
			</a>
		</el-menu>
		<div id="mainbox">
			<!-- 顶左右轮播盒子 -->
			<div class="tbox">
				<!-- 首页顶左轮播图 -->
				<div class="tlswiper">
					<el-carousel height="310px">
						<el-carousel-item>
							<img class="tlswiperimg" src="http://img.topnews9.com/Public/upload/20180111/5a56ce010e6f3-760x308.png">
						</el-carousel-item>
						<el-carousel-item>
							<img class="tlswiperimg" src="http://img.topnews9.com/Public/upload/20171222/5a3c6ecf0e6f6-760x308.jpg">
						</el-carousel-item>
						<el-carousel-item>
							<img class="tlswiperimg" src="http://img.topnews9.com/Public/upload/20171219/5a38a99047b35-760x308.jpg"></el-carousel-item>
					</el-carousel>
				</div>
				<!-- 首页顶右广告轮播图 -->
				<div v-for="(item,index) in lishidata" :key="index" v-if="index<1">
					<div class="htbox">
						<h2>历史上的今天</h2>
						<p>{{item.title}}</p>
						<img :src="item.pic" alt="">
						<p>{{item.des}}</p>
					</div>
				</div>
			</div>

			<!-- 热点新闻 -->
			<div class="titlediv">
				<div id="hrefredian" style="position: relative;top: -60px;"></div>
				<h3>热点新闻</h3>
			</div>
			<div class="re-adbox">
				<div class="redian">
					<div class="redianbox" v-for="(item,index) in toutiaodata" :key="index" v-if="index<6">
						<div class="newsbox">
							<div class="redianimg"><a href="https://www.baidu.com/"><img :src="item.thumbnail_pic_s"></a></div>
							<div class="rediantitle"><a href="https://www.baidu.com/">{{item.title}}</a></div>
						</div>
						<div class="infobox">
							<div>{{item.author_name}}</div>
							<div>{{item.date}}</div>
						</div>
					</div>
					<a href="https://www.baidu.com/">
						<div class="morebtn">查看更多</div>
					</a>
				</div>

				<div class="ad-col">
					<div v-for="(item,index) in lishidata" :key="index" v-if="index<2">
						<adswiper v-bind:adswtushudata="tushudata"></adswiper>
						<div class="htbox">
							<h2>历史上的今天</h2>
							<img :src="item.pic" alt="">
							<p>{{item.des}}</p>
						</div>
					</div>
				</div>


			</div>

			<!-- 各个模块 -->

			<suolue v-bind:suoluedata="shehuidata"></suolue>
			<suolue v-bind:suoluedata="guoneidata"></suolue>


		</div>
		<!-- 底部 -->
		<foot></foot>

	</div>
</template>

<script>
	import caijing from "./JSON/caijing.js"
	import guoji from "./JSON/guoji.js"
	import guonei from "./JSON/guonei.js"
	import junshi from "./JSON/junshi.js"
	import keji from "./JSON/keji.js"
	import shehui from "./JSON/shehui.js"
	import shishang from "./JSON/shishang.js"
	import tiyu from "./JSON/tiyu.js"
	import toutiao from "./JSON/toutiao.js"
	import tushu from "./JSON/tushu.js"
	import tushumulu from "./JSON/tushumulu.js"
	import yule from "./JSON/yule.js"
	import adswiper from "../public/adswiper.vue"
	import dht from "../public/dht.vue"
	import foot from "../public/foot.vue"
	import suolue from "./suolue.vue"
	export default {
		name: "shouye",
		data() {
			return {
				lishidata: [],
				tushudata: [],
				toutiaodata: [],
				shehuidata: [],
				guoneidata: []
			};
		},
		methods: {
			getlishi() {
				var mydate = new Date();
				this.$axios.get("http://192.168.2.103:81/", {
					params: {
						v: 1,
						month: mydate.getMonth() + 1,
						day: mydate.getDate()
					}
				}).then(response => {
					// console.log("get发送Ajax请求成功", response.data);
					this.lishidata = response.data.result;
					// console.log(this.lishidata)
				}).catch(response => {
					// console.log("get发送Ajax请求失败", response);
				})
			}
		},
		mounted() {
			this.tushudata = tushu.result.data
			this.toutiaodata = toutiao.result.data
			this.shehuidata = shehui.result.data
			this.guoneidata = guonei.result.data
			this.getlishi()

		},
		components: {
			dht,suolue,adswiper,foot
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	ul,
	li,
	ol {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	a:link {
		color: black;
	}

	a:visited {
		color: black;
	}

	#bodybox {
		display: flex;
		flex-flow: column;
	}

	/* .el-menu-item.is-active {
		background-color: rgb(196, 86, 86) !important;
	} */


	.xfbtnbox {
		width: 70px;
		position: fixed;
		right: 14.25rem;
		top: 24.25rem;
		border-radius: 10px;
		border: none;
	}

	.xfbtnbox-a:link {
		color: white;
	}

	.xfbtnbox-a:visited {
		color: white;
	}

	.xfbtnbox li {
		border-radius: 10px;
		height: 40px;
		line-height: 40px;
	}

	#mainbox {
		margin: 0 auto;
		/* margin-top: 5.5625rem; */
		padding: 0;
		width: 75rem;
	}

	.tbox {
		display: flex;
		justify-content: space-between;
	}

	.tlswiper {
		width: 47.5rem;
	}

	.tlswiperimg {
		width: 100%;
	}

	.titlediv {
		width: 100%;
		border-bottom: 4px #e5e5e5 solid;
	}

	.titlediv h3 {
		display: inline-block;
		zoom: 1;
		color: #666;
		line-height: 40px;
		letter-spacing: 1px;
		padding: 0 10px;
		border-bottom: 4px #fe0100 solid;
		margin-bottom: -4px;
	}

	.re-adbox {
		display: flex;
		justify-content: space-between;
	}

	.redian {
		width: 47.5rem;
		display: flex;
		flex-flow: column;
	}

	.redianbox {
		margin-bottom: 0.3125rem;
		border-bottom: 10px #f7f7f7 solid;
	}

	.newsbox {
		margin-top: 22px;
		/* margin-bottom: 15px; */
		display: flex;
		align-items: center;
		color: #0da4d3;
		font-size: 1.5625rem;
		padding-bottom: 22px;
		border-bottom: 1px #ccc dotted;
	}

	.newsbox a:hover {
		color: red;
		border-bottom: 1px red dotted;
	}

	.redianimg {
		width: 10rem;
		height: 6.25rem;
	}

	.redianimg img {
		width: 10rem;
		height: 6.25rem;
	}

	.rediantitle {
		margin-left: 1.25rem;
	}

	.infobox {
		padding: 16px 0;
		display: flex;
		justify-content: space-between;
	}

	.morebtn {
		width: 47.5rem;
		height: 3.125rem;
		text-align: center;
		line-height: 3.125rem;
	}

	.morebtn:hover {
		background-color: #CCCCCC;
	}

	.ad-col {
		display: flex;
		flex-flow: column;
	}

	.htbox {
		width: 21.875rem;
		height: 21.875rem;
		text-align: center;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
	}

	.suoluebox {
		display: flex;
		justify-content: space-between;
		margin-top: 0.625rem;
	}

	.suoluenewsbox {
		width: 28.8125rem;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
	}

	.suoluenewsbox a:hover {
		color: red;
		border-bottom: 1px red dotted;
	}

	.suoluenewsbox ul {
		margin-left: 2.25rem;
	}

	.suoluenewsbox li {
		position: relative;
	}


	.suoluenewsbox ul>:first-child {
		font: 700 16px/26px tahoma;
	}

	.suoluenewsbox li {
		font-size: 0.875rem;
		margin-bottom: 10px;
	}

	.suoluenewsbox ul>:first-child span {
		position: absolute;
		top: 10px;
		left: -22px;
		display: block;
		width: 5px;
		height: 5px;
		background: #da4453;
	}

	.dots {
		position: absolute;
		top: 10px;
		left: -21px;
		display: block;
		width: 3px;
		height: 3px;
		background: black;
	}

	.suoluebox h3 {
		padding-left: 5px;
		padding-right: 5px;
		border-left: 2px solid #fe0100;
		font-weight: 700;
		font-size: 16px;
		line-height: 18px;
		color: #fe0100;
		background: #fff;
		margin: 0;
		margin-bottom: 1.25rem;
	}

	.suolueimgbox {
		width: 20rem;
		height: 26.25rem;
		display: flex;
		flex-flow: column;
	}

	.imgitembox {
		width: 20rem;
		display: flex;
		flex-wrap: wrap;
		/* flex-flow: column; */
		justify-content: space-between;
	}

	.imgitemno1 {
		width: 20rem;
		height: 14.0625rem;
		display: flex;
		flex-flow: column;
		margin-bottom: 0.875rem;
	}

	.imgitemno1 img {
		width: 20rem;
		height: 11.0625rem;

	}

	.imgitemno1 p {
		margin: 0;
		display: block;
		width: 20rem;
		height: 35px;
		overflow: hidden;
		font-size: 0.625rem;
		background: #f6f7f8;
		line-height: 35px;
	}

	.imgitemno1 p:hover {
		color: #fff;
		background: #3064bb;

	}

	.imgitemno23 {
		width: 9rem;
		height: 8.5rem;
		display: flex;
		flex-flow: column;
	}

	.imgitemno23 img {
		width: 9rem;
		height: 6.3125rem;
	}

	.imgitemno23 p {
		margin: 0;
		display: block;
		width: 9rem;
		height: 1.875rem;
		overflow: hidden;
		font-size: 0.625rem;
		background: #f6f7f8;
	}

	.imgitemno23 p:hover {
		color: #fff;
		background: #3064bb;

	}

	.hotbox {
		width: 22.25rem;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
	}


	.tuwenitembox {
		display: flex;
		justify-content: space-between;
		margin-bottom: 3.1875rem;
	}

	.tuwenimgbox {
		width: 10.75rem;
		height: 9.8125rem;
		display: flex;
		flex-flow: column;

	}

	.tuwenimgbox img {
		width: 10.75rem;
		height: 7.625rem;
	}

	.tuwenimgbox p {
		margin: 0;
		display: block;
		width: 10.75rem;
		height: 1.875rem;
		overflow: hidden;
		font-size: 0.625rem;
		background: #f6f7f8;
	}

	.tuwenimgbox p:hover {
		color: #fff;
		background: #3064bb;

	}

	.remenbox {
		font-size: 0.875rem;
	}

	.remenbox a:hover {
		color: red;
		border-bottom: 1px red dotted;
	}

	.remenbox li {
		height: 1.6875rem;
		overflow: hidden;
		line-height: 1.6875rem;

	}

	.remenbox span {
		top: 0.25rem;
		position: relative;
		display: inline-block;
		width: 1.0625rem;
		height: 1.125rem;
		background-image: url(//gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/fisp_static/news/img/olist/icon-nums_7f1b1d2.png);
		background-image: -webkit-image-set(url(//gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/fisp_static/news/img/olist/icon-nums_7f1b1d2.png) 1x, url(//gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/fisp_static/news/img/olist/icon-nums-2x_5c82ac5.png) 2x);
		background-repeat: no-repeat;
	}

	.num2 {
		background-position: 0 -18px;
	}

	.num3 {
		background-position: 0 -36px;
	}

	.num4 {
		background-position: 0 -54px;
	}

	.num5 {
		background-position: 0 -72px;
	}
</style>
