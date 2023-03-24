
async function initAPIpicsum(i){
	let init;
	let j;
	let number;

	if (data.maxPicsum == 0)
		number = 0;
	else
		number = i - data.maxPicsum + 1;

	
	init = await axios.get(`${data.urlPicsum}0${data.dlcPicsum}${i}`);
	

	for(j = data.maxPicsum; j < i; j++) {
		dataPicsum[j] = {
			id: init.data[j].id,
			name: init.data[j].author,
			url: init.data[j].download_url
		};
		data.maxPicsum++;
	}
}

async function getPicsumPhotos (i = 12) {

	if (i === "")
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

		await initAPIpicsum(i);
		
		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';

		// Выход
		console.log(dataPicsum);
	}
	undateContent(dataPicsum, i);
}