
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
	})
	.catch(err => console.log(err))

let grid_bool = false;
document.querySelector("#button_to_grid").onclick = () => {
	if (grid_bool === true) {
		document.querySelector("#button_to_grid").style.backgroundColor = "white";
		grid_bool = false;
	}
	else {
		document.querySelector("#button_to_grid").style.backgroundColor = "grey";
		grid_bool = true;
	}
	flex_bool = false;
	document.querySelector("#button_to_flex").style.backgroundColor = "white";
}

let flex_bool = false;
document.querySelector("#button_to_flex").onclick = () => {
	if (flex_bool === true) {
		document.querySelector("#button_to_flex").style.backgroundColor = "white";
		flex_bool = false;
	}
	else {
		document.querySelector("#button_to_flex").style.backgroundColor = "grey";
		flex_bool = true;
	}
	grid_bool = false;
	document.querySelector("#button_to_grid").style.backgroundColor = "white";
}
