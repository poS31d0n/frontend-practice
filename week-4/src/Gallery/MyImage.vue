<template>
	<section class="main__bottom">
		<div class="menu">
			<div class="information">
				<p class="text text-uppercase text__info">Waiting</p>
			</div>
			<div class="flex_my">
				<!-- Without JS -->
				<div class="row_element_flex">
					<div class="row_content_flex" v-for="image in images">
						<img id="img_flex_0" src="https://picsum.photos/id/0/5000/3333" class="img-thumbnail image" alt="">
						<p id="text_name_flex_0" class="text">Alejandro Escamilla</p><p id="text_data_flex_0" class="text">0</p>
					</div>
					<div class="row_content_flex">
						<img id="img_flex_1" src="https://picsum.photos/id/1/5000/3333" class="img-thumbnail image" alt="">
						<p id="text_name_flex_1" class="text">Alejandro Escamilla</p><p id="text_data_flex_1" class="text">1</p>
					</div>
					<div class="row_content_flex">
						<img id="img_flex_2" src="https://picsum.photos/id/2/5000/3333" class="img-thumbnail image" alt="">
						<p id="text_name_flex_2" class="text">Alejandro Escamilla</p><p id="text_data_flex_2" class="text">2</p>
					</div>
					<div class="row_content_flex">
						<img id="img_flex_3" src="https://picsum.photos/id/3/5000/3333" class="img-thumbnail image" alt="">
						<p id="text_name_flex_3" class="text">Alejandro Escamilla</p><p id="text_data_flex_3" class="text">3</p>
					</div>
			</div>
			</div>
			<div class="grid_my">
				<!-- Without JS -->
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		images: {
        type: Array,
        required: true
      }
	},
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
    display: none;
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
	.row_element_flex {
		height: 33%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.row_content_flex {
		height: 100%;
		width: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
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


	.image {
		height: 150px;
		width: 200px;
		border-radius: 10px;
	}
</style>