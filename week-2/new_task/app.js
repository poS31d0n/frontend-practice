
function undateContent(data) {
	for(let i=0; i < 16; i++) {
	
		if (i < 7){
			document.querySelector(`#img_flex_${i}`).src = data[i].url;
			document.querySelector(`#img_grid_${i}`).src = data[i].url;
		}
		else {
			document.querySelector(`#img_flex_${i}`).src = data[i].url;
		}
	}
}

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
			nextDiv.innerHTML = `<div class="product__image"><img id="img_flex_${i}" class="images images__product__first" src="${data[i].url}" alt=""></div><div class="product__text"><p class="text">${data[i].title}</p><p class="text text__data">${data[i].id}</p></div>`;
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
			div.innerHTML = `<img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt=""><img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt="">`;
			result.push(div);
		}
		else {
			let div = document.createElement('div');
			div.className = 'product_grid_bottom';
			div.innerHTML = `<img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt=""><img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt=""><img id="img_grid_${i}" class="images images__product" src="${data[i++].url}" alt="">`;
			result.push(div);
		}
	}
	return result;
}



function sendRequest(method, url) {
	return new Promise( (resolve, reject) => {
		const xhr = new XMLHttpRequest();
		console.log(url);
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



let bool = true;
function getRequest(url = 'https://jsonplaceholder.typicode.com/albums/55/photos')
{
	sendRequest('GET', url)
	.then(data => {
		if (bool == true) {
			document.querySelector('#row').append(...getListContent(data));
			document.querySelector('#blocks').append(...getBlocksContent(data));
			bool = false;
		}
		else {
			document.querySelector('#blocks').append(...undateContent(data));
		}
	})
	.catch(err => console.log(err))
}

getRequest();



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

document.querySelector('#search_albumId').onclick = (event) => {
	event.preventDefault();
	let text = document.querySelector('#text_albumId').value;
	if (text >= 0 && text <= 100)
	{
		console.log(text);
		getRequest('https://jsonplaceholder.typicode.com/albums/' + text + '/photos')
	}
}