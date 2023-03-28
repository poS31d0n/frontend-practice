<template>
	<header>
		<form class="header__right">
			<input class="form-control" type="text" placeholder="Введите количество картинок">
			<button onclick="getNewCharacters()" type="button" class="btn btn-primary">Search</button>
		</form>
	</header>
</template>

<script>
	import MyInput from './MyInput.vue';
	import MyButton from './MyButton.vue';
	
	export default {
		components: {
			MyInput, MyButton
		},
	}
</script>

<style>

</style>