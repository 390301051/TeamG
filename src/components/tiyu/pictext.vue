<template>
			<div class="pictextitem">
				<img :src="picitem.thumbnail_pic_s" alt=""/>
				<a>{{picitem.title}}</a>
			</div>
</template>

<script>
	export default {
		name:"pictext",
		props:{
			picitem:{
				type:Object,
				require:true
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
