<template>
	<div id="shangcheng">
		<myheader></myheader>
		<div id="shangchengapp">
			<el-row>
				<el-col :span="8">
					<div class="grid-content bg-purple-dark">
						<div style="margin-right: 50px;">
							<el-input placeholder="请输入内容">
								<template slot="append"><span class="el-icon-search"></span></template>
							</el-input>
						</div>
					</div>
				</el-col>
				<el-col :span="10">
					<div class="title grid-content bg-purple-dark">
						<!-- <span v-for="item in title">{{item}}</span> -->
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-dark">
						<audio src="http://180k.ysts8.com:8000/%E7%99%BE%E5%AE%B6%E8%AE%B2%E5%9D%9B/%E8%AF%97%E7%BB%8F%E4%B8%AD%E7%9A%84%E4%B8%8D%E8%80%81%E7%88%B1%E6%83%85/001.mp3?1403353088143x1551347974x1403359218803-4267fe1f68b0adc0bb5fc49485f9e64d?3"
						 controls autoplay="true" muted="muted"></audio>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="4">
					<div class="grid-content bg-purple">
						<div class="list1">
							<a v-for="(item,index) in list" :href="'#'+index" v-if="index<10">
								{{item.catalog}}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span class="el-icon-arrow-right"></span>
							</a>
						</div>
					</div>
				</el-col>
				<el-col :span="20">
					<div class="grid-content bg-purple-light">
						<el-carousel :interval="5000" arrow="always">
							<el-carousel-item v-for="item in mysrc">
								<img class="myvid" :src="item">
							</el-carousel-item>
						</el-carousel>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6" v-for="(item,index) in list2" v-if="index<4"  >
					<div class="grid-content">
						<img class="mylist" :src="item.img" @click="tankuangs" >
						<!-- 弹框模块 -->
						<div class="shangchengbox">
							<img :src="item.img" />
							<div class="boxson">
								<h4>{{item.title}}</h4>
								<p>价格：￥  {{item.price}}</p>
								<button>取消</button><button @click="add(item.title)">加入购物车</button><button>购买</button>
							</div>
						</div>
						
					</div>
				</el-col>
			</el-row>
			
			<el-row>
				<el-col :span="24">
					<div class="heng1 grid-contente">
						<img :src="mysrc2" />
					</div>
				</el-col>
			
			</el-row>
			<dan v-for="num in 10" :num="num" :list="list" :list2="list2"></dan>
			<gouwuche :gouwuche="gouwuche" @mydelall="delall" ></gouwuche>
		</div>
		<mytop></mytop>
		<myfoot></myfoot>
	</div>
</template>

<script>
	
	import dan from "../src/components/dan.vue"
	import gouwuche from "../src/components/gouwuche.vue"
	import mytop from "../src/components/mytop.vue"
	// import tankuang from "../src/components/tankuang.vue"
	import myheader from '../src/components/public/dht.vue'
	import myfoot from '../src/components/public/foot.vue'
	// import data2 from '../data/tushu.js'
	import data1 from '../data/tushumulu.js'
	export default {
		data: function() {
			return {
				
				p1: "世界之大无奇不有，所以在经济发展的今天，很多小伙伴都选择走出国门去看一看外面的世界。在很多地方都存在着一些原始部落，他们的生活观念和生活习俗与我们有很大的差别，甚至有些习俗令人简直难以置信。",
				p2: "在北极圈里就有这一个原始部落，我们称他们为爱斯基摩人，爱斯基摩人的日常生活是我们普通人难以忍受的。他们生活在非常寒冷的北极圈，生活环境经常达到零下七八十度，但是他们依旧住在冰块做成的房子里。",
				p3: "这个部落的人口非常稀少，所以就有了孩子归集体所有的习俗。为了使部落的人口增加，他们有一个习俗更是超级尴尬，那就是这个部落的男人会让自己的妻子和来到这里旅游的游客一起过夜。",
				p4: "这样不但能够更好的为部落传宗接代，还能避免因为近亲结婚而出现孩子畸形的情况。对于他们的这种习俗，你有什么想说的呢？图片来自网络，如有侵权联系删除。",
				list: data1.result,
				list2: [],
				dialogVisible: false,
				number: 1,
				gouwuche: [{
					title: "梦里花落知多少",
					price: "43.34",
					number: "1"
				}],
				
				// nums:0,
				mysrc: [
					"https://edu-yuedu.bdimg.com/v1/RD/%E6%98%A5%E5%A4%8F/%E4%BC%AF%E7%BA%B3%E9%BB%9B%E7%89%B9720x285-1544062918375.jpg",
					"https://edu-yuedu.bdimg.com/v1/RD/%E6%98%A5%E5%A4%8F/720x285-1545796240111.jpg",
					"https://edu-yuedu.bdimg.com/v1/RD/%E6%98%A5%E5%A4%8F/%E5%A4%A9%E8%B0%B4%E8%80%85720x285-1545014171754.jpg",
					"https://edu-yuedu.bdimg.com/v1/RD/6.0%20%E6%98%A5%E5%A4%8F/%E8%94%A1%E5%BE%90%E5%9D%A4-%E6%96%87%E5%BA%93720x285--1548992123536.jpg"
				],
				mysrc2: "https://gss2.baidu.com/9rkZfyqpAA5D8sK8p9iCKT67gB5-reHg-_/v1/pc/duke-toutu1900x280.jpg"


			}
		},
		methods: {
			add: function(title) {
				if (this.gouwuche.title==title){
					// console.log(11)
					this.gouwuche.number=++(this.number);
				}else {
					this.gouwuche.push({title:title,number:++(this.number)})
				}
				
			},
			del: function() {
		
			},
			delall: function() {
				this.gouwuche = null;
				
			},
			tankuangs:function(){
				var tk=document.querySelector(".shangchengbox");
				// console.log(tk)
				tk.style.display="block";
				
			}
			
			
	},
	components:{
		dan,
		gouwuche,
		// tankuang,
		myheader,
		myfoot,
		mytop
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
		xhr.open("get","http://192.168.2.103:81/spzhanshi?cataid=242",true)
		xhr.send()
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				 
				_this.list2=JSON.parse(xhr.responseText)
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
#shangchengapp {
	width: 1200px;
	margin: 10px auto 120px;
	background-color: #f2f2f2;
	
}
 #shangchengapp .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

 
 #shangchengapp .grid-content {
    min-height: 36px;
  }
 #shangchengapp .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
 #shangchengapp  .title {
	  display: flex;
	  justify-content: space-between;
	  line-height: 40px;
	  height: 40px;
  }
  #shangchengapp .el-icon-search {
	  font-size: 20px;
  }
 #shangchengapp  .list1  a {
	  display: block;
	  padding: 0 0 0 40px;
	  background-color: #777;
	  color: #fff;
	  height: 43px;
	  line-height: 43px;
	 
  }
 #shangchengapp  .list1  a:hover {
	  background-color: coral;
  }
  #shangchengapp .myvid {
	  width: 1000px;
	  height: 430px;
  }
  #shangchengapp .el-carousel__container {
	  height: 430px !important;
	  width: 970px;
	 }
	  #shangchengapp  .el-carousel {
		 width: 100% !important;
	 }
  #shangchengapp .mylist {
	  width: 270px;
	  height: 320px;
	  margin-top: 20px;
  }
#shangchengapp   .mylist:hover {
	  transform: translateY(-5%);
	  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	  transition: transform 0.8s, box-shadow 0.8s;
  }
  #shangchengapp  .heng1 img {
	  width: 1200px;
  }
  #shangchengapp  .info {
	  background-color: #f5f5f5;
  }
  #shangchengapp  .booklist img{
	 height: 260px;
	 width: 180px;
  }
 #shangchengapp  .booklist:hover{
	  transform: translateY(-5%);
	  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	  transition: transform 0.8s, box-shadow 0.8s;
  }
  #shangchengapp  .booklist h4 {
	 color: #c78729; 
	 text-align: center;
	 margin-bottom: 30px;
  }
 #shangchengapp  .heng2 {
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  margin-top: 30px;
  }
  #shangchengapp  .heng2 h3 {
	  margin-left: 10px;
  }

  #shangchengapp  .heng2 .active:hover {
	  color: coral;
	  font-weight: 700;
	  font-size: 18px;
  }
  .shangchengbox {
	  width: 450px;
	  height: 300px;
	  background-color: rgba(11,11,11,0.5);
	  display: none;
	  position: absolute;
	  background-color: #fff;
	  top: 0px;
	  left: 0px;
	  margin: 0 auto;
  }
  .shangchengbox .boxson { 
	  text-align: center;
	  margin: 0 auto;
	  display: inline-block;
  }
  .shangchengbox .boxson  img {
	  width: 300px;
	  height: 100px;
  }
  .shangchengbox button {
	  margin-left: 20px;
	  background-color: #B3D8FF;
  }
</style>
