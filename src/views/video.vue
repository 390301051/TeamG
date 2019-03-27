<template>
		<div>
			<dht></dht>
		<div id="news_container">
			<h2 class="title" style="font-size: 28px;">{{videoitem.title}}</h2>
			<ul class="news_dis">
				<li>澎湃视频</li>
				<li><span></span></li>
				<li>网易视频</li>
			</ul>
			<div class="news_article">
			
			
			<p>怎么会不一样呢？</p>
			<div class="videobox">
				<video :src="videoitem.src" muted="muted" autoplay="autoplay"  controls="controls"></video>
				<a>
					<h3>{{videoitem.title}}</h3>
				</a>
			</div>
			<p>这个休赛期，辽宁保持了阵容的稳定，首钢也没什么变化。辽宁夺冠之后信心大增，首钢依旧是那支不好惹，韧劲极强的球队。什么条件都没变，结果也没变不是很正常的么？</p>
			<p>在最近几年首钢和辽宁的较量中，郭艾伦、哈德森都是最亮眼的球员，但韩德君总是被忽视。其实对于辽宁来说，在面对北京队的时候，韩德君的战略意义非常大，一点都不比外援弱。</p>
			<p>为什么这么说呢？</p>
		  </div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import dht from "../components/public/dht.vue"
	import foot from "../components/public/foot.vue"
	export default {
		name:"video",
		data() {
			return {
				videoitem:{}
			};
		},
		components:{
			dht,foot
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
			xhr.open("get",`http://192.168.2.103:81/videoplay?id=${value}`,true)
			xhr.send()
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					// console.log(xhr.responseText)
					_this.videoitem=JSON.parse(xhr.response)[0]
					// console.log()
				}
			}
			
		}
	}
</script>

<style scoped="scoped">
	#news_container{
			float: left;
			width: 600px;
			box-shadow: 2px 0 1px lightgray;
			border-bottom: solid 1px lightgrey;
			position: relative;
			left: 565px;
		}
		.news_dis{
			padding-left: 0px;
		}
		.news_dis li{
			font-size: 14px;
			color: #333;
			display: inline-block;
			top: 20px;
		}
		.news_dis span{
			font-size: 12px;
			border: solid 1px lightgray;
		}
		.news_article{
			width: 537px;
		}
		.news_article p{
			font-size: 16px;
            line-height: 24px;
            color: #333;
            text-align: justify;
           /* text-align: center,居中,right右对齐,left左对齐,justify两端对齐i,inherit规定应该从父元素继承 text-align 属性的值。*/
		}
		.news_article .videobox video{
			width: 600px;
			/* height: 400px; */
		}
</style>
