
function getRadioContent() {
	let result = [];
	let check;
	let text;

	for(let i=1; i < 4; i++) {

		let div = document.createElement('div');
		div.className = "form-check radios";
		
		if (i == 1)
		{
			text = 'Picsum';
			check = 'checked="true"';
		}
		else if (i == 2)
			text = 'Rick and Morty';
		else if (i == 3)
			text = 'Pokemon';

		div.innerHTML = `<input onclick="getNewCharacters(this)" class="form-check-input" type="checkbox" id="api_${i}" ${check}><label class="form-check-label text" for="flexCheckDisabled">${text}</label>`;
		check = '';
		result.push(div);
	}
	return result;	
}

function getListContent(num = 12) {
	let result = [];
	
	for(let i=0; i < num;) {

		let div = document.createElement('div');
		div.className = "row_element_flex";
		
		for(let j=1; j <= 4;j++)
		{
			let nextDiv = document.createElement('div');
			nextDiv.className = `row_content_flex`;
			nextDiv.innerHTML = `<img id="img_flex_${i}" src="" class="img-thumbnail image" alt=""><p id="text_name_flex_${i}" class="text"></p><p id="text_data_flex_${i}" class="text"></p>`;
			div.append(nextDiv)
			i++;
		}
		result.push(div);
	}
	return result;
}



function getBlocksContent(num = 12) {
	let result = [];

	for(let i = 0; i < num;) {
		let div = document.createElement('div');
		div.className = 'row_element_grid';
		for(let j = 0; j < 4; j++) {
			let nextDiv;
			if ((i < 4) || (i > 5 && i < 10)) {
				nextDiv = document.createElement('div');
				nextDiv.className = 'row_content_grid';
				nextDiv.innerHTML = `<img id="img_grid_${i}" src="" class="img-thumbnail image__grid" alt=""><p id="text_name_grid_${i}" class="text text__grid"></p><p id="text_data_grid_${i}" class="text text__grid"></p>`;
			}
			else {
				nextDiv = document.createElement('div');
				nextDiv.className = 'row_content_grid';
				nextDiv.innerHTML = `<img id="img_grid_${i}" src="" class="img-thumbnail image__grid" alt=""><p id="text_name_grid_${i}" class="text text__grid"></p><p id="text_data_grid_${i}" class="text text__grid"></p>`;
				j++;
			}
			i++;
			div.append(nextDiv);
		}
		result.push(div);
	}
	return result;
}



function undateContent(infoCharacters, i = 12) {

	document.querySelector('.flex_my').append(getListContent(i));
	console.log("Flex was created");
	document.querySelector('.grid_my').append(getBlocksContent(i));
	console.log("Grid was created");
	

	for(let j=0; j < i; j++) {

		document.querySelector(`#img_flex_${j}`).src = infoCharacters[j].url;
		document.querySelector(`#text_name_flex_${j}`).innerHTML = infoCharacters[j].name;
		document.querySelector(`#text_data_flex_${j}`).innerHTML = infoCharacters[j].id;

		document.querySelector(`#img_grid_${j}`).src = infoCharacters[j].url;
		document.querySelector(`#text_name_grid_${j}`).innerHTML = infoCharacters[j].name;
		document.querySelector(`#text_data_grid_${j}`).innerHTML = infoCharacters[j].id;
	
	}
	return ;
}


(async function() {

	document.querySelector('.main__top').append(...getRadioContent());
	console.log("Radio was created");
	document.querySelector('.flex_my').append(...getListContent());
	console.log("Flex was created");
	document.querySelector('.grid_my').append(...getBlocksContent());
	console.log("Grid was created");
	
	// await getRadio();
})();