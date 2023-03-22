
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

		elem.style.display = 'flex';
		elem.firstElementChild.innerHTML = "Waiting API-2";
		await initAPIs("rick" , data.urlRick, data.maxRick, i);
		elem.style.display = 'none';
		console.log(dataRick);
	}
}