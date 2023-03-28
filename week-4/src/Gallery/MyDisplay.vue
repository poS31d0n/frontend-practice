<template>
	<section class="main__display">
		<div class="display__switch">
			<button onclick="" type="button" class="btn btn-primary button">flex</button>
			<button onclick="" type="button" class="btn-display btn-primary button">grid</button>
		</div>
	</section>
</template>

<script>

</script>

<style>
	.main__display {
    width: 100%;
    height: 5%;
    padding: 0px 90% 0px 2%;
	}

	.display__switch {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 35px;
    border: 2px solid white;
    border-bottom: none;
    border-radius: 10px 10px 0px 0px;
	}

	.button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;

		border: 0;
		color: white;
	}
	.button:first-child {
    border-right: 1px solid white;
    border-radius: 7px 0px 0px 0px;
    background-color: #7F7D9C;
	}
	.button:last-child {
    border-left: 1px solid white;
    border-radius: 0px 7px 0px 0px;
		background-color: #0d6efd;
	}
</style>