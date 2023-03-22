
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
        backDisp = document.querySelector(`.${data.displayButton}_my`);

		backDisp.style.display = 'none';
        elem.style.display = 'flex';

        elem.firstElementChild.innerHTML = "Waiting Pokemon";

        await initAPIs("pokemon" , data.urlPokemon, data.maxPokemon, i);
        
        backDisp.style.display = `${data.displayButton}`;
        elem.style.display = 'none';

        // Выход
	    console.log(dataPokemon);
    }
}