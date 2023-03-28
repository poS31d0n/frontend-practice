<template>
	<Header></Header>
	<Gallery></Gallery>
</template>

<script>
import Header from '@/Header/Header.vue'
import Gallery from '@/Gallery/Gallery.vue'

export default {
	components: {
		Header, Gallery
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
