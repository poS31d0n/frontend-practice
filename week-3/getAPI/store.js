
let dataPicsum = [];
let dataRick = [];
let dataPokemon = [];

let data = {
	displayButton: 'flex',


	maxPicsum: 0,
	urlPicsum: "https://picsum.photos/v2/list?page=",
	dlcPicsum: "&limit=",

	get getDataPicsum() {
		return `max: ${this.maxPicsum}   url: ${this.urlPicsum}   dlc: ${this.dlcPicsum}`;
	},
	set setDataPicsum(value) {
		[this.maxPicsum, this.urlPicsum, this.dlcPicsum] = value.split(" ");
	},



	maxRick: 0,
	urlRick: "https://rickandmortyapi.com/api/character/",

	get getDataRick() {
		return `max: ${this.maxRick}   url: ${this.urlRick}`;
	},
	set setDataRick(value) {
		[this.maxRick, this.urlRick] = value.split(" ");
	},


	
	
	urlPokemon: "https://pokeapi.co/api/v2/pokemon?limit=",
	dlcPokemon: "&offset=",
	maxPokemon: 0,

	get getDataPokemon() {
		return `max: ${this.maxPokemon}   url: ${this.urlPokemon}`;
	},
	set setDataPokemon(value) {
		[this.maxPokemon, this.urlPokemon] = value.split(" ");
	}
};