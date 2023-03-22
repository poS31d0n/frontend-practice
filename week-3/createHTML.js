
function getListContent(data) {
	let result = [];
	
	for(let i=0; i < 12;) {

		let div = document.createElement('div');
		div.className = "row_element_flex";
		
		for(let j=1; j <= 4;j++)
		{
			let nextDiv = document.createElement('div');
			nextDiv.className = `row_content_flex`;
			nextDiv.innerHTML = `<img id="img_flex_${i}" src="./Image.png" class="img-thumbnail image" alt=""><p id="text_name_flex_${i}" class="text">Name item 1</p><p id="text_data_flex_${i}" class="text">Id item 1</p>`;
			div.append(nextDiv)
			i++;
		}
		result.push(div);
	}
	return result;
}



function getBlocksContent(data) {
	let result = [];

	for(let i = 0; i < 12; i++) {
		let div = document.createElement('div');
		div.className = 'row_element_grid';
		for(let j = 0; j < 4; j++) {
			let nextDiv;
			if ((i < 4) || (i > 5 && i < 10)) {
				nextDiv = document.createElement('div');
				nextDiv.className = 'row_content_grid';
				nextDiv.innerHTML = `<img id="img_grid_${i}" src="./Image.png" class="img-thumbnail image__grid" alt=""><p id="text_name_grid_${i}" class="text text__grid">Name item 1</p><p id="text_data_grid_${i}" class="text text__grid">Id item 1</p>`;
				i++;
			}
			else {
				nextDiv = document.createElement('div');
				nextDiv.className = 'row_content_grid';
				nextDiv.innerHTML = `<img id="img_rid_${i}" src="./Image.png" class="img-thumbnail image__grid" alt=""><p id="text_name_grid_${i}" class="text text__grid">Name item 1</p><p id="text_data_grid_${i}" class="text text__grid">Id item 1</p>`;
				j++;
			}
			div.append(nextDiv);
		}
		result.push(div);
	}
	return result;
}



// function undateContent(data) {
// 	for(let i=0; i < 16; i++) {
// 		if (data[i].title.constructor === String)
// 			data[i].title = data[i].title.slice(0, 14) + '...';

// 		data[i].id = "id: " + data[i].id;
// 		document.querySelector(`#img_flex_${i}`).src = data[i].url;
// 		document.querySelector(`#text_title_${i}`).innerHTML = data[i].title;
// 		document.querySelector(`#text_data_${i}`).innerHTML = data[i].id;

// 		if (i < 7)
// 			document.querySelector(`#img_grid_${i}`).src = data[i].url;
// 	}
// 	return ;
// }

// document.querySelector('#row').append(...getListContent(data));
// document.querySelector('#blocks').append(...getBlocksContent(data));

(function() {
	
	document.querySelector('.grid_my').append(...getBlocksContent());
	console.log("Grid was created");
	document.querySelector('.flex_my').append(...getListContent());
	console.log("Flex was created");

})();