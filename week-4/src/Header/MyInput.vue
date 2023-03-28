<template>
	<!-- <div class="post" v-for="post in posts">
		<div><strong>Название:</strong> {{ post.title }}</div>
		<div><strong>Описание:</strong> {{ post.body }}</div>
	</div> -->
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
	width: 100%;
	border: 1px solid white;
	padding: 10px 15px;
	margin-top: 10px;
	}
</style>