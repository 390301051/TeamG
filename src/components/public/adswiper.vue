<template>
	<div  @click="buy">
		<div style="position: relative;display: flex;flex-direction: column;align-items: flex-end;text-align: center">
			<div style="width: 350px;">
				<el-carousel indicator-position="none" height="310px" style="width: 350px; margin-top: 0px; left:0px">
					<el-carousel-item v-for="(item,index) in adswtushudata" :key="index">
						<p>《{{item.title}}》{{item.price}}</p><img class="adswiperimg" :src="item.img" />
					</el-carousel-item>
				</el-carousel>
			</div><img style="position: absolute;top: 17.875rem;z-index: 1000" src="https://atanx.alicdn.com/t/img/TB1tWvVJFXXXXc_aXXXXXXXXXXX-40-26.png">
		</div>
	</div>
</template>

<script>
	export default {
		name: "dht",
		props: {
			adswtushudata: {
				type: Array,
				require: true
			}
		},
		data() {
			return {

			};
		},
		methods:{
			buy(){
				window.location.href="http://localhost:8080/#/shangcheng"
			}
		}
	}
</script>

<style>
</style>
