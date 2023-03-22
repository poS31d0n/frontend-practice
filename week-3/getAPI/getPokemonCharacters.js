
async function getPokemonCharacters (i) {

	if (i == "")
		i = 12;
	if (i <= 0)
		return;

    if (i <= data.maxPokemon)
    {
        console.log(dataPokemon.slice(0, i));
    }
    else
	{
        elem = document.querySelector(".information");

        elem.style.display = 'flex';
        elem.firstElementChild.innerHTML = "Waiting API-3";
        await initAPIs("pokemon" , data.urlPokemon, data.maxPokemon, i);
        elem.style.display = 'none';
	    console.log(dataPokemon);
    }
}