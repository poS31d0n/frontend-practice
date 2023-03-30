<template>
	<header>
		<form @submit.prevent>
			<MyInput v-model="num" @give="getNum"></MyInput>
			<MyButton @click="newNum"></MyButton>
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
          num: 12,
        }
    },
		methods: {
			getNum(score) {
				this.num = score;
			},
			newNum() {
				if (this.num >= 0)
					this.$emit('addNum', this.num);
				this.num = 12;
				// Обнулить в MyInput ?
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