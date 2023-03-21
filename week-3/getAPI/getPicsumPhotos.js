
async function getPicsumPhotos (i) {

	if (i == "")
		i = 12;
	if (i <= 0)
		return;

	if (i <= data.maxPicsum)
	{
		console.log(dataPicsum.slice(0, i));
	}
	else
	{
		await initAPIs("picsum" , data.urlPicsum, data.maxPicsum, i, data.dlcPicsum);
		console.log(dataPicsum);
	}
}