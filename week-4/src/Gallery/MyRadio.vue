<template>
	<section class="main__top" >
		<div class="form-check radios" v-for="radio in radios">
			<input :onclick="radio.onclick" class="form-check-input" type="checkbox" :id="radio.id" :checked="radio.check">
			<label class="form-check-label text" for="flexCheckDisabled">{{radio.name}}</label>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			radios: [
				{id: "picsum", name: "Picsum", onclick: () => getNewCharacters('picsum'), check: "checked"},
				{id: "rick", name: "Rick", onclick: () => getNewCharacters('rick')},
				{id: 'pokemon', name: 'Pokemon', onclick: () => getNewCharacters('pokemon')}
			]
		}
	}
}
</script>

<style>
	.main__top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10%;
    padding: 10px;
	}

	.radios {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 10%;
    height: 70%;
    border: 2px solid white;
    border-radius: 10px;
	}

	.text {
		color: white;
	}
</style>