<template>
	<Header @addNum="getNewCharacters"></Header>
	<gallery :arr="arr"/>
</template>

<script>
import Header from '@/Header/Header.vue'
import Gallery from '@/Gallery/Gallery.vue'
import axios from 'axios'

export default {
	components: {
		Header, Gallery
	},
	data() {
		return {
			arr: [],
		}
	},
	methods: {
		getNewCharacters(scoreImages) {
			this.arr = new Array(Number(scoreImages));
    },
		// async getNewCharacters() {
		// 	try {
		// 		const response = await axios.get('https://picsum.photos/v2/list?page0&limit=12')
		// 		console.log(response)
		// 	}
		// 	catch(e) {
		// 		alert('Ошибка')
		// 	}
		// }
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
