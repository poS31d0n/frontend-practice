
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
		await initAPIs("rick" , data.urlRick, data.maxRick, i);
		console.log(dataRick);
	}
}