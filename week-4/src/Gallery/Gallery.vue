<template>
	<main>
		<MyRadio @giveRadio="giveRadio"></MyRadio>
		<MyDisplay ></MyDisplay>
		<MyImage :images="images"></MyImage>
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
		props: {
			arr: {
        type: Array,
        required: true
      }
		},
		data() {
			return {
				radio: 'picsum'
			}
		},
		methods: {
			giveRadio(typeRadio) {
				this.radio = typeRadio;
			}
		}
	}
</script>

<style>
	main {
		display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
	}
</style>