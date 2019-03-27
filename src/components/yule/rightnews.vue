<template>
	<a>{{rightnews.title}}</a>
</template>

<script>
	export default {
		name:"rightnews",
		props: {
			rightnews:{
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
