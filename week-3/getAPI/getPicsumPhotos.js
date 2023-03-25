
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

async function getPicsumPhotos (i) {


	if (i > data.maxPicsum) {

		elem = document.querySelector(".information");
		backDisp = document.querySelector(`.${data.displayButton}_my`);

		backDisp.style.display = 'none';
		elem.style.display = 'flex';

        elem.firstElementChild.innerHTML = "Waiting Picsum";

		await initAPIpicsum(i);
		
		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';
	}

	let doc = document.querySelectorAll(".row_element_flex");
	for (let item of doc)
		item.remove();
	doc = document.querySelectorAll(".row_element_grid");
	for (let item of doc)
		item.remove();

	undateContent(dataPicsum, i);
}