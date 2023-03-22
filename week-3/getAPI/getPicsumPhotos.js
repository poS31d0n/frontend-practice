
async function getPicsumPhotos (i = 12) {

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
		elem = document.querySelector(".information");
		backDisp = document.querySelector(`.${data.displayButton}_my`);

		backDisp.style.display = 'none';
		elem.style.display = 'flex';

        elem.firstElementChild.innerHTML = "Waiting Picsum";

		await initAPIs("picsum" , data.urlPicsum, data.maxPicsum, i, data.dlcPicsum);
		
		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';

		// Выход
		console.log(dataPicsum);
	}
}