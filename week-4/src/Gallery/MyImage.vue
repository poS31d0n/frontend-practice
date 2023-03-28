<template>
	<section class="main__bottom">
		<div class="menu">
			<div class="information">
				<p class="text text-uppercase text__info">Waiting</p>
			</div>
			<div class="flex_my">
				<!-- Without JS -->
			</div>
			<div class="grid_my">
				<!-- Without JS -->
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			title: ''
		}
	},
	methods: {
		
	}
}
</script>

<style>
	.main__bottom {
    width: 100%;
    height: 100%;
    padding: 0% 2% 2% 2%;
	}

	.menu {
    height: 100%;
    width: 100%;
    padding: 20px;
    border: 2px solid white;
    border-radius: 0px 10px 10px 10px;
    background: rgba(252, 242, 255, 0.2);
	}

	.information {
		/*  */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
	}

	.flex_my {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
	}

	.grid_my {
    height: 100%;
    width: 100%;
    display: none;
	}

	.text__info {
    font-size: 100px;
	}
</style>