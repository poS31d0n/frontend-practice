<template>
	<button onclick="getNewCharacters()" type="button" class="btn">Search</button>
</template>

<script>

export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			}
		}
	},
	methods: {
		createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
	}
}

</script>

<style>

.btn {
	width: 23%;

	background: 0;
	color: white;
	border: 1px solid white;
	border-radius: 10px;
}
</style>