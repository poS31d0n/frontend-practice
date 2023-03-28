<template>
	<Header></Header>
	<Gallery></Gallery>
	<button @click="getNewCharacters">ads</button>
</template>

<script>
import Header from '@/Header/Header.vue'
import Gallery from '@/Gallery/Gallery.vue'
import axios from 'axios'

export default {
	components: {
		Header, Gallery
	},
	methods: {
		getId() {
				console.log('1')
		},
		async getNewCharacters() {
			try {
				const response = await axios.get('https://picsum.photos/v2/list?page0&limit=12')
				console.log(response)
			}
			catch(e) {
				alert('Ошибка')
			}
		}
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	width: 100vw;
	height: 100vh;


	background-image: url(./photo/background.webp);
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

#app {
	height: 100%;
  width: 100%;
}
</style>
