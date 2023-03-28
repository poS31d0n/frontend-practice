<template>
	<section class="main__top">
		<!-- Without JS -->
		<div class="form-check radios">
			<input onclick="(() => getNewCharacters('picsum'))()" class="form-check-input" type="checkbox" id="picsum" checked="">
			<label class="form-check-label text" for="flexCheckDisabled">Picsum</label>
		</div>
		<div class="form-check radios">
			<input onclick="(() => getNewCharacters('picsum'))()" class="form-check-input" type="checkbox" id="picsum">
			<label class="form-check-label text" for="flexCheckDisabled">Rick</label>
		</div>
		<div class="form-check radios">
			<input onclick="(() => getNewCharacters('picsum'))()" class="form-check-input" type="checkbox" id="picsum">
			<label class="form-check-label text" for="flexCheckDisabled">Pokemon</label>
		</div>
	</section>
</template>

<script>

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