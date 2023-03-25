
async function initAPIpokemon(i){
	let init;
	let j;

	let number = i - data.maxPokemon;
	
	init = await axios.get(`${data.urlPokemon}${number}${data.dlcPokemon}${data.maxPokemon}`);
	

	for(j = 0; j < number; j++) {
		dataPokemon[data.maxPokemon] = {
			id: '',
			name: init.data.results[j].name,
			url: "./photo/images.png"
		};
		data.maxPokemon++;
	}
}

async function getPokemonCharacters (i) {


	if (i > data.maxPokemon) {

		elem = document.querySelector(".information");
		backDisp = document.querySelector(`.${data.displayButton}_my`);

		backDisp.style.display = 'none';
		elem.style.display = 'flex';

		elem.firstElementChild.innerHTML = "Waiting Pokemon";

		await initAPIpokemon(i);
		
		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';
	}

	let doc = document.querySelectorAll(".row_element_flex");
	for (let item of doc)
		item.remove();


	undateContent(dataPokemon, i);
}