<template>
  <input
	v-model="num"
	@input="giveNum"
	class="input"
	type="text"
	placeholder="Введите количество картинок"
	
	/>
</template>

<script>
export default {
  data() {
		return {
			num: '',
		}
  },
	methods: {
		giveNum(){
			this.$emit('give', this.num);
		}
	}
};
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
