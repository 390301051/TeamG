<template>
	<div class="suolue">
		<!-- 暗锚 -->
		<div :id='suoluedata[0]?suoluedata[0].category:""' style="position: relative;top: -60px;"></div>
		<div class="titlediv">
			<h3>{{suoluedata[0]?suoluedata[0].category:""}}</h3>
		</div>
		<div class="suoluebox">
			<div class="suoluenewsbox">
				<ul>

					<li v-for="(item,index) in suoluedata" :key="index" v-if="index<7"><span class="dots"></span><a href="https://www.baidu.com/">{{item.title}}</a></li>
				</ul>
				<ul>
					<li v-for="(item,index) in suoluedata" :key="index" v-if="index>5&index<13"><span class="dots"></span><a href="https://www.baidu.com/">{{item.title}}</a></li>
				</ul>
			</div>

			<div class="suolueimgbox">
				<h3 class="imgtitlediv">{{suoluedata[0]?suoluedata[0].category:""}}图片</h3>

				<ul class="imgitembox">
					<div v-for="(item,index) in suoluedata" :key="index" v-if='index>12&index<16' v-bind:class="{imgitemno1:index==13,imgitemno23:index!=13}">

						<a href="https://www.baidu.com/"><img :src="item.thumbnail_pic_s"></a>
						<a href="https://www.baidu.com/">
							<p>{{item.title}}</p>
						</a>

					</div>
				</ul>
			</div>

			<div class="hotbox">
				<h3 class="imgtitlediv">图文咨询</h3>
				<div class="tuwenbox">
					<ul class="tuwenitembox">
						<div v-for="(item,index) in suoluedata" :key="index" v-if='index>15&index<18' class="tuwenimgbox">

							<a href="https://www.baidu.com/"><img :src="item.thumbnail_pic_s"></a>
							<a href="https://www.baidu.com/">
								<p>{{item.title}}</p>
							</a>

						</div>
					</ul>
				</div>
				<h3 class="hottitlediv">热门点击</h3>
				<div class="remenbox">
					<ul>
						<li v-for="(item,index) in suoluedata" :key="index" v-if="index>18&index<24"><span v-bind:class="{num1:index==19,num2:index==20,num3:index==21,num4:index==22,num5:index==23}"></span><a
							 href="https://www.baidu.com/">{{item.title}}</a></li>
					</ul>

				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: "suolue",
		props: {
			suoluedata: {
				type: Array,
				require: true
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
</style>
