
async function initAPIrick(i){
	let init;
	let j;
	let m = 1;
    let number = data.maxRick;

	if (number == 0) {
		data.maxRick++;
		number = '1';
	}
	else {
		data.maxRick++;
		number = data.maxRick;
	}

    for(j = data.maxRick + 1; j <= i; j++) {
        number += `,${j}`;
		m++;
	}

    init = await axios.get(`${data.urlRick}${number}`);

	i = m;

	if(i == 1) {
		dataRick[data.maxRick - 1] = {
			id: init.data.id,
			name: init.data.name,
			url: init.data.image
		};
		data.maxRick++;
	}
	else {
		for(j = 0; j < i; j++) {
			dataRick[data.maxRick - 1] = {
				id: init.data[j].id,
				name: init.data[j].name,
				url: init.data[j].image
			};
			data.maxRick++;
		}
	}
	data.maxRick--;
}

async function getRickAndMortyCharacters (i = 12) {

	if (i === "")
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

		await initAPIrick(i);

		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';

		// Выход
		console.log(dataRick);
	}
	let doc = document.querySelectorAll(".row_element_flex");
	for (let item of doc)
		item.remove();


	undateContent(dataRick, i);
	// console.log(doc);

}