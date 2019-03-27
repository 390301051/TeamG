<template>
	<div>
		<myheader></myheader>
		<div id="shehuiapp">
			<div class="leftbox">
				<div>
					<a>
						<img class="leftson" :src="mysrc1" />
					</a>
					<div class="rightson">
						<a class="phson" href="#">
							<img :src="mysrc2" />
							<p>90后民警脱发对比图走红:见介绍对象一面就没下文</p>
						</a>
						<a class="phson" href="#">
							<img :src="mysrc3" />
							<p>女子与丈夫吵架带9岁儿子酒后驾车被丈夫举报</p>
						</a>
					</div>
				</div>
				<div v-for="item in lists" @click="funshehui(item.uniquekey)"><info :item="item" /></div>
			</div>
			<div class="rightbox">
				<div class="title">
					<h3>24小时热点</h3>
				</div>
				<div v-for="(item,index) in lists" v-if="index<5"  @click="funshehui(item.uniquekey)"><news  :items="item"/></div>
				<div class="title">
					<h3>今日头条</h3>
				</div>
				<div  v-for="(item,index) in lists"  v-if="4<index & index<10"  @click="funshehui(item.uniquekey)"><news :items="item"/></div>
				<div class="shangping">
					<div class="title">
						<h3>相关书籍推荐</h3>
						<show :adswtushudata="bookabout.slice(0,5)"></show>
						<show :adswtushudata="bookabout.slice(10,15)"></show>
						<show :adswtushudata="bookabout.slice(20,25)"></show>
					</div>
				</div>
			</div>
		</div>
		
		<myfoot></myfoot>
	</div>
</template>

<script>
	import info from "../src/components/info.vue"
	import news from "../src/components/news.vue"
	import myheader from '../src/components/public/dht.vue'
	import show from '../src/components/public/adswiper.vue'
	import myfoot from '../src/components/public/foot.vue'
	// import mydatas from '../data/shehuidata.js'
	
	export default {
	  name: 'ph',
		data: function(){
			return {
				lists: [],
				bookabout:[],
				mysrc1: "https://img2.utuku.china.com/500x308/news/20190224/7ad9a368-284f-4dbc-9bec-bcd248231282.jpg",
				mysrc2: "https://img3.utuku.china.com/300x180/news/20190224/df863dde-b34d-4559-93a6-19702d461185.jpg",
				mysrc3: "https://img1.utuku.china.com/300x180/news/20190224/780b4dc6-c547-430b-9ad0-d765f6e3afe9.jpg"
				
			}
		},
		methods:{
			funshehui:function (id){
				window.location.href=`http://localhost:8080/#/xiangqing?id=${id}`
				
				
			}
		},
		components:{
				  info,
				  news,
				  myheader,
				  myfoot,
				  show
				  
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
			xhr.open("get","http://192.168.2.103:81/xwzhanshi?categoryid=18016",true)
			xhr.send()
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					 
					_this.lists=JSON.parse(xhr.responseText).result
				}
			}
			
			
			var xhr2=new XMLHttpRequest()
			xhr2.open("get","http://192.168.2.103:81/spzhanshi?cataid=245",true)
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
	#shehuiapp {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		background-color: #f2f2f2;
	}
	#shehuiapp .leftbox {
		width: 800px;
		height: auto;
		margin-right: 10px;
	}
	#shehuiapp .leftson{
		display: inline-block;
		width: 500px;
		height: 300px;
	}
	
	#shehuiapp .rightson {
		display: inline-block;
		width: 270px;
		height: 300px;
	}
	#shehuiapp .rightson img {
		display: block;
		width: 280px;
	    height: 110px;
	}
	#shehuiapp .rightson  p:hover {
		font-weight: 600;
		text-decoration: underline;
	}
	#shehuiapp .rightbox {
		width: 100%;
		height: auto;
	}
	#shehuiapp .rightbox .title {
		width: 100%;
		height: 40px;
		border: 2px solid #333;
		line-height: 40px;
		text-indent: 1em;
	}
</style>
