<template>
	<header>
		<form>
			<MyInput></MyInput>
			<MyButton></MyButton>
		</form>
	</header>
</template>

<script>
	import MyInput from '@/Header/MyInput.vue'
	import MyButton from '@/Header/MyButton.vue'
	
	export default {
		components: {
			MyInput, MyButton
		},
		data() {
			return {
				id: 1,
			}
		},
		methods: {
			getId() {
				console.log(id)
			}
		}
	}
</script>

<style>

	header {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 10%;
	width: 100%;
	padding: 20px 2% 20px 20px;
	border-bottom: 2px solid white;
	}

	form{
	display: flex;
	justify-content: center;
	height: 100%;
	gap: 20px;
	width: 23%;
	}

</style>