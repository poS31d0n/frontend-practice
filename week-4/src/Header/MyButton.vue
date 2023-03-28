<template>
	<!-- <form @submit.prevent>
		<h4>Создание поста</h4>
		<input
		v-bind:value="post.title"
		@input="post.title = $event.target.value"
		 class="input"
		type="text"
		placeholder="Название"
		/>
		<input
			 v-bind:value="post.body"
			@input="post.body = $event.target.value"
			 class="input"
			 type="text"
			 placeholder="Описание"
		/>
		<button class="btn" v-on:click="createPost">Создать</button>
	</form> -->
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

form {
	display: flex;
	flex-direction: column;
}


.btn {
	align-self: flex-end;

	margin-top: 15px;
	padding: 10px 15px;
	background: 0;
	color: white;
	border: 1px solid white;
}


</style>