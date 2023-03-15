
function getListContent(data) {
	let result = [];
	
	for(let i=0; i < 16;) {

		let div = document.createElement('div');
		div.className = "products__menu";
		div.id = `row__content__${i}`;
		
		for(let j=1; j <= 4;j++)
		{
			if (data[i].title.constructor === String)
				data[i].title = data[i].title.slice(0, 14) + '...';

			data[i].id = "id: " + data[i].id;

			let nextDiv = document.createElement('div');
			nextDiv.className = `product__note__${i}`;
			nextDiv.innerHTML = `<div class="product__image"><img class="images images__product__first" src="${data[i].url}" alt=""></div><div class="product__text"><p class="text">${data[i].title}</p><p class="text text__data">${data[i].id}</p></div>`;
			div.append(nextDiv)
			i++;
		}
		result.push(div);
	}
	return result;
}

function getBlocksContent(data) {
	let result = [];

	
	for(let i = 0; i < 7;) {
		
		if ((i < 2) || (i > 4 && i < 7)) {
			let div = document.createElement('div');
			div.className = 'product_grid_top';
			div.innerHTML = `<img class="images images__product" src="${data[i++].url}" alt=""><img class="images images__product" src="${data[i++].url}" alt="">`;
			result.push(div);
		}
		else {
			let div = document.createElement('div');
			div.className = 'product_grid_bottom';
			div.innerHTML = `<img class="images images__product" src="${data[i++].url}" alt=""><img class="images images__product" src="${data[i++].url}" alt=""><img class="images images__product" src="${data[i++].url}" alt="">`;
			result.push(div);
		}
	}
	return result;
}



function sendRequest(method, url) {
	return new Promise( (resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = 'json';
		xhr.onload = () => {
			if (xhr.status >= 400)  
				reject(xhr.response);
			else
				resolve(xhr.response);
		}
		xhr.onerror = () => {
			reject(xhr.response);
		}
		xhr.send();
	})
}

sendRequest('GET', 'https://jsonplaceholder.typicode.com/photos')
	.then(data => {
		document.querySelector('#row').append(...getListContent(data));
		document.querySelector('#blocks').append(...getBlocksContent(data));
	})
	.catch(err => console.log(err))






let grid_bool = false;

document.querySelector("#button_to_grid").onclick = () => {
	if (grid_bool === true) {
		document.querySelector("#button_to_grid").style.backgroundColor = "white";
		document.querySelector("#blocks").style.display = "none"
		grid_bool = false;
		document.querySelector("#button_to_flex").style.backgroundColor = "white";
		document.querySelector("#row").style.display = "flex"
	}
	else {
		document.querySelector("#button_to_grid").style.backgroundColor = "grey";
		document.querySelector("#blocks").style.display = "grid"
		grid_bool = true;
		document.querySelector("#button_to_flex").style.backgroundColor = "white";
		document.querySelector("#row").style.display = "none"
	}
	flex_bool = false;
}


let flex_bool = false;

document.querySelector("#button_to_flex").onclick = () => {
	if (flex_bool === true) {
		document.querySelector("#button_to_flex").style.backgroundColor = "white";
		document.querySelector("#row").style.display = "flex"
		flex_bool = false;
		document.querySelector("#button_to_grid").style.backgroundColor = "white";
		document.querySelector("#blocks").style.display = "none"
	}
	else {
		document.querySelector("#button_to_flex").style.backgroundColor = "grey";
		document.querySelector("#row").style.display = "flex"
		flex_bool = true;
		document.querySelector("#button_to_grid").style.backgroundColor = "white";
		document.querySelector("#blocks").style.display = "none"		
	}
	grid_bool = false;
}
