<template>
	<div class="chinaContent">
				<div class="one">
					<img :src="china.thumbnail_pic_s">
					<a>{{china.title}}</a>
				</div>
				<div class="two">
					<span>{{china.date}}</span>
					<span>{{china.author_name}}</span>
				</div>
	</div>
</template>

<script>
	export default {
		name:"middleleft",
		props: {
			china:{
				type:Object,
				required:true
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
