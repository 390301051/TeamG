<template id="rightnews">
			<a>{{rightnews.title}}</a>
		</template>
<script>
	export default {
		name:"rightnews",
		props:{
			rightnews:{
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
