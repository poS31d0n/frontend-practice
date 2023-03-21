
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
        await initAPIs("pokemon" , data.urlPokemon, data.maxPokemon, i);
	    console.log(dataPokemon);
    }
}