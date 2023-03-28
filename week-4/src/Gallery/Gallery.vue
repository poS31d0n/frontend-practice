<template>
	<main>
		<MyRadio></MyRadio>
		<MyDisplay></MyDisplay>
		<MyImage></MyImage>
	</main>
</template>

<script>
	import MyRadio from '@/Gallery/MyRadio.vue'
	import MyDisplay from '@/Gallery/MyDisplay.vue'
	import MyImage from '@/Gallery/MyImage.vue'

	export default {
		components: {
			MyRadio, MyDisplay, MyImage
		},
	}
</script>

<style>

</style>