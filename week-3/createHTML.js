
// function getListContent(data) {
// 	let result = [];
	
// 	for(let i=0; i < 16;) {

// 		let div = document.createElement('div');
// 		div.className = "products__menu";
// 		div.id = `row__content__${i}`;
		
// 		for(let j=1; j <= 4;j++)
// 		{
// 			if (data[i].title.constructor === String)
// 				data[i].title = data[i].title.slice(0, 14) + '...';

// 			data[i].id = "id: " + data[i].id;

// 			let nextDiv = document.createElement('div');
// 			nextDiv.className = `product__note__${i}`;
// 			nextDiv.innerHTML = `<div class="product__image"><img id="img_flex_${i}" class="images images__product__first" src="${data[i].url}" alt=""></div><div class="product__text"><p id="text_title_${i}" class="text">${data[i].title}</p><p id="text_data_${i}" class="text text__data">${data[i].id}</p></div>`;
// 			div.append(nextDiv)
// 			i++;
// 		}
// 		result.push(div);
// 	}
// 	return result;
// }



// function getBlocksContent(data) {
// 	let result = [];

	
// 	for(let i = 0; i < 7;) {
		
// 		if ((i < 2) || (i > 4 && i < 7)) {
// 			let div = document.createElement('div');
// 			div.className = 'product_grid_top';
// 			div.innerHTML = `<img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt=""><img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt="">`;
// 			result.push(div);
// 		}
// 		else {
// 			let div = document.createElement('div');
// 			div.className = 'product_grid_bottom';
// 			div.innerHTML = `<img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt=""><img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt=""><img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt="">`;
// 			result.push(div);
// 		}
// 	}
// 	return result;
// }



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
