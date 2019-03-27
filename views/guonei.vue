<template>
	<div>
		<myheader></myheader>
		<div id="guoneiapp">
			<div class="apptop">
				<div class="leftbox">
					<div class="block">
						<el-carousel >
							<el-carousel-item v-for="item in list" >
								<a>
									<img :src="item.src" />
									<h4>{{item.title}}</h4>
								</a>
							</el-carousel-item>
						</el-carousel>
					</div>
					<div class="vid">
						<div class="" v-for="item in imglist">
							<video :src="item.src" width="300" height="200" controls>	
							</video>
							<a>{{item.title}}</a>
						</div>
					</div>
				</div>
				<div class="rightbox">
					<ul class="rightone">
						<li v-for="(item,index) in newslist" v-if="20<index & index<25">
							<a class="oneson"  @click="funguonei(item.uniquekey)">{{item.title}}</a>
						</li>
					</ul>
					<ul class="righttwo">
						<li v-for="(item,index) in newslist" v-if="index<11">
							<a class="twoson"   @click="funguonei(item.uniquekey)">{{item.title}}</a>
						</li>
					</ul>	
				</div>
				
				
			</div>
			<div class="appbt">
				<div class="leftbt">
					<div v-for="item in newslist" @click="funguonei(item.uniquekey)"><info :item="item"></info></div>
				</div>
				<div>
					<show :adswtushudata="bookabout.slice(0,4)"></show>
					<show :adswtushudata="bookabout.slice(5,10)"></show>
					<show :adswtushudata="bookabout.slice(20,25)"></show>
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
	// import datas from '../data/guoneidata.js'
	import axios from 'axios'
	
	export default {
	  name: 'guonei',
		data:function (){
			return {
				newslist:[],
				bookabout:[],
				uniquekey:"",
					list:[{
						src:"https://k.sinaimg.cn/n/news/1_img/vcg/6d34f853/539/w814h525/20190225/d8AE-htptaqe0742361.jpg/w500h333l80255.jpg",
						title:"金正恩离开平壤前往越南赴会"},
						{src:"https://k.sinaimg.cn/n/news/transform/200/w600h400/20190225/ymnw-htptaqe0702943.jpg/w500h333l80fa1.jpg",
						title:"杭州一小学出“狠招” 开学第一课称体重"},
						{src:"https://k.sinaimg.cn/n/news/1_img/upload/6d34f853/138/w1024h714/20190225/KK4R-htptaqe0659699.jpg/w500h333l80e53.jpg",
						title:"北京猪年“光猪跑”搞怪开跑"
					}],
					imglist:[{
						src:"http://edge.ivideo.sina.com.cn/207038598.mp4?KID=sina,viask&Expires=1552147200&ssig=itgw5my1z1",title:"文化和旅游部部长：去年我国人均出游4次"
					},{
						src:"http://edge.ivideo.sina.com.cn/207041996.mp4?KID=sina,viask&Expires=1552147200&ssig=oBOGB66WZ5",title:"赵皖平：我为何提议春节假期延长三天"
					},{
						src:"http://edge.ivideo.sina.com.cn/207033564.mp4?KID=sina,viask&Expires=1552147200&ssig=ubUB8xQU6y",title:"渤海天然气勘探获重大突破 天然气探明储量超过千亿立方米"
					},{
						src:"http://edge.ivideo.sina.com.cn/194003419.mp4?KID=sina,viask&Expires=1552147200&ssig=PdikcTaPzx",title:"气象局局长：风云气象卫星致力服务“一带一路”"
					}]
					
				}
			
		},
		methods:{
			funguonei:function (id){
								// console.log(id)
				window.location.href=`http://localhost:8080/#/xiangqing?id=${id}`
				
			}
		},
		  components:{
			  info,
			  news,
			  myheader,
			  myfoot,
			  show
		  
		},mounted:function(){
			var _this=this
			// 发送ajax请求
			var xhr;
			if(window.XMLHttpRequest){
				xhr=new XMLHttpRequest()
			}else{
				xhr=new ActiveXObject("Microsoft XMLHTTP")
			}
			xhr.open("get","http://192.168.2.103:81/xwzhanshi?categoryid=18014",true)
			xhr.send()
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					 
					_this.newslist=JSON.parse(xhr.responseText).result
				}
			}
			
			
			
			var xhr2=new XMLHttpRequest()
			xhr2.open("get","http://192.168.2.103:81/spzhanshi?cataid=250",true)
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
	#guoneiapp  {
		width: 1200px;
		margin: 0 auto;
		/* display: flex; */
		background-color: #f2f2f2;
	}
	#guoneiapp  .apptop {
		display: flex;
	}
	#guoneiapp  .leftbox {
		width: 600px;
	}
	#guoneiapp  .leftbox .block img{
		width: 600px;
	}
	#guoneiapp  .leftbox .block img:hover {
		transform: scale(1.1,1.1);
		transition: transform 0.5s;
	}
	#guoneiapp  .leftbox .block h4 {
		font-size: 20px;
		position: absolute;
		top: 220px;
		left: 0px;
		color: #ccc;
	}
	#guoneiapp  .leftbox .vid {
		display: flex;
		flex-wrap: wrap;
	}
	#guoneiapp  .leftbox  .vid div{
		width: 290px;
		margin: 10px 5px;
	}
	#guoneiapp  .leftbox  .vid video:hover {
		transform: scale(1.1,1.1);
		transition: transform 0.5s;
	}
	#guoneiapp  .leftbox  .vid a:hover {
		color: crimson;
	}
	#guoneiapp  .rightbox .rightone {
		border-bottom: 1px solid #eee;
	}
	#guoneiapp  .rightbox ul li {
		margin: 28px 35px;
	}
	#guoneiapp .rightbox .rightone .oneson {
		font-size: 20px;
		color: #333;
		font-weight: 600;
	}
	#guoneiapp  .rightbox .rightone .oneson:hover {
		color: crimson;
	}
	#guoneiapp  .rightbox .righttwo li {
		width: 500px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		font-size: 16px;
	}
	#guoneiapp  .rightbox .righttwo .twoson {
		font-size: 18px;
	}
	#guoneiapp  .rightbox .righttwo .twoson:hover {
		color: crimson;
		text-decoration:underline ;
	}
	#guoneiapp  .appbt {
		border-top: 1px solid #999;
		display: flex;
	}
	#guoneiapp  .appbt .leftbt {
		width: 800px;
	}
</style>
