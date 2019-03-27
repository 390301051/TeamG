<template>
		<div>
			<dht></dht>
		<div id="news_container">
			<h2 class="title" style="font-size: 28px;">{{newsdata.title}}</h2>
			<ul class="news_dis">
				<li>{{newsdata.author_name}}</li>
				<li><span></span></li>
				<li>{{newsdata.date}}</li>
			</ul>
			<div class="news_article">
			<img class="news_img1" :src="newsdata.thumbnail_pic_s" />
			<p>类别:{{newsdata.category}}</p>
			<p>{{newsdata.neirong}}</p>
			<p>怎么会不一样呢？</p>
			<img :src="newsdata.thumbnail_pic_s02" />
			<p>这个休赛期，辽宁保持了阵容的稳定，首钢也没什么变化。辽宁夺冠之后信心大增，首钢依旧是那支不好惹，韧劲极强的球队。什么条件都没变，结果也没变不是很正常的么？</p>
			<p>在最近几年首钢和辽宁的较量中，郭艾伦、哈德森都是最亮眼的球员，但韩德君总是被忽视。其实对于辽宁来说，在面对北京队的时候，韩德君的战略意义非常大，一点都不比外援弱。</p>
			<p>为什么这么说呢？</p>
			<img :src="newsdata.thumbnail_pic_s" />
			<p>在第四节单外援的情况下，辽宁队毫无疑问地会派上韩德君和哈德森、郭艾伦搭档，这样辽宁内线就有了一个重要的牵制点，进可攻，退可守，北京队对大韩往往无计可施，朱彦西、常林和大韩在内线的对抗都吃亏，于是摆在雅尼斯面前是两瓶“毒药”：第一，派上唯一和大韩对抗不吃亏的汉密尔顿，球队的进攻梳理可能有问题，带不起来进攻节奏，而且人家辽宁队外线的哈德森加郭艾伦组合，北京队难以防守。第二，不派汉密尔顿，派上阿隆·杰克逊吧，进攻是可能明确一些了，他和方硕搭档外线也能对的上哈德森和郭艾伦了，可是内线又让人爆了。</p>
			<p>所以，顾此失彼，难以内外兼顾。</p>
			<img :src="newsdata.thumbnail_pic_s03" />
			<p>北京有这么明显的软肋，辽宁当然不会不利用。说起来，最近这几年北京和辽宁互有胜败，也算得上是一对势均力敌的对手，辽宁稍占上风靠的就是综合实力强于北京。内外平衡、攻守平衡，别小看一个韩德君，却使得辽宁在内线压住了北京队一头，成为了更加均衡的一支球队。</p>
			<p>当然了，内线问题一时半会儿也解决不了，已经成了困扰北京首钢多年的老大难问题了。前两天解说新疆队的比赛，看着人家今年引进的范子铭，感觉真是出色，内线脚步扎实，还能后撤步投篮，当时我就想，这要是给北京该多好？还有体测没过上不了场的孙桐林，和这个赛季出场机会减少的俞长栋，给北京任意一个，现在球队都可能进入CBA第一集团行列了。</p>
			<p>可是现在，要我说第一集团还是辽宁、广厦、广东和新疆，北京因为内线的劣势，仍然只能屈居在5到8名的第二集团。</p>
			<br />
		  </div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import dht from "../components/public/dht.vue"
	import foot from "../components/public/foot.vue"
	export default {
		name:"newsabout",
		data() {
			return {
				newsdata:{}
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
			xhr.open("get",`http://192.168.2.103:81/xwxiangqing?uniquekey=${value}`,true)
			xhr.send()
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					// console.log(xhr.responseText)
					_this.newsdata=JSON.parse(xhr.response)[0]
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
		.news_article img{
			width: 537px;
		}
</style>
