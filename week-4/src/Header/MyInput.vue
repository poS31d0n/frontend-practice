<template>
	<input class="input" type="text" placeholder="Введите количество картинок">
</template>

<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
	.post {
		padding: 15px;
		border: 2px solid teal;
		margin-top: 15px;
	}

	.input {
		text-align: center;
		width: 80%;
		border: 1px solid white;
		border-radius: 10px;
	}
</style>