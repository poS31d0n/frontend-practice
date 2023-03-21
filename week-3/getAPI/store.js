
let dataPicsum = [];
let dataRick = [];
let dataPokemon = [];

let data = {
	maxPicsum: 1,
	urlPicsum: "https://picsum.photos/id/",
	dlcPicsum: "/info",

	get getDataPicsum() {
		return `max: ${this.maxPicsum}   url: ${this.urlPicsum}   dlc: ${this.dlcPicsum}`;
	},
	set setDataPicsum(value) {
		[this.maxPicsum, this.urlPicsum, this.dlcPicsum] = value.split(" ");
	},

	maxRick: 1,
	urlRick: "https://rickandmortyapi.com/api/character/",

	get getDataRick() {
		return `max: ${this.maxRick}   url: ${this.urlRick}`;
	},


	maxPokemon: 1,
	urlPokemon: "https://pokeapi.co/api/v2/pokemon/",

	get getDataPokemon() {
		return `max: ${this.maxPokemon}   url: ${this.urlPokemon}`;
	  }
};






async function initAPIs(nameAPI, url, maxI, i, dlc = "") {

	let result = [];
	let initURL = url;
	let init;


	if (i >= maxI) {

		for(let j = maxI; j <= i; j++)
		{
			// Нужно улучшть обработку 0 элемента(исключения)!

			init = await axios.get(`${initURL}${j}${dlc}`);

			switch(nameAPI) {
				case 'picsum':
					dataPicsum[j - 1] = {
						id: init.data.id,
						name: init.data.author,
						url: init.data.download_url
					};
					data.maxPicsum++;
					break;
				case 'rick':
					dataRick[j - 1] = {
						id: init.data.id,
						name: init.data.name,
						url: init.data.image
					};
					data.maxRick++;
					break;
				case 'pokemon':
					dataPokemon[j - 1] = {
						id: init.data.id,
						name: init.data.name,
						url: init.data.sprites.front_default
					};
					data.maxPokemon++;
					break;
			}
		}
	}
	maxI = i;

}