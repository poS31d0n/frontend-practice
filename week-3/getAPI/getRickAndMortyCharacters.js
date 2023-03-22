
async function getRickAndMortyCharacters (i) {

	if (i == "")
		i = 12;
	if (i <= 0)
		return;

	if (i <= data.maxRick)
	{
		console.log(dataRick.slice(0, i));
	}
	else
	{
		elem = document.querySelector(".information");
		backDisp = document.querySelector(`.${data.displayButton}_my`);

		backDisp.style.display = 'none';
		elem.style.display = 'flex';

		elem.firstElementChild.innerHTML = "Waiting Rick and Morty";

		await initAPIs("rick" , data.urlRick, data.maxRick, i);

		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';

		// Выход
		undateContent(dataRick);
		console.log(dataRick);
	}
}