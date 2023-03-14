
function getListContent() {
	let result = [];

	for(let i=1; i <= 16;) {

		let div = document.createElement('div');
		div.className = "products__menu";
		div.id = `row__content__${i}`;
		for(let j=1; j <= 4;j++)
		{
			
			let nextDiv = document.createElement('div');
			nextDiv.className = `product__note__${i}`;
			nextDiv.innerHTML = `<div class="product__image"><img class="images images__product__first" src="./img/main/Image.png" alt=""></div><div class="product__text"><p class="text">Don T Let The Out…</p><p class="text text__data">28.11.2045</p></div>`;
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
		document.querySelector('#row').append(...getListContent());
	})
	.catch(err => console.log(err))


document.querySelector("#button_to_grid").onclick = () => {
	document.querySelector("#button_to_grid").style.backgroundColor = "grey"
	document.querySelector("#button_to_flex").style.backgroundColor = "white"
}

document.querySelector("#button_to_flex").onclick = () => {
	document.querySelector("#button_to_flex").style.backgroundColor = "grey"
	document.querySelector("#button_to_grid").style.backgroundColor = "white"
}

// let photos = '';
// fetch('https://jsonplaceholder.typicode.com/photos/1')
//       .then(response => response.json())
//       .then(json => console.log(json.url));
//       .then(json => photos = json.url);
//       .then(console.log(photos));

// let response = await fetch('https://jsonplaceholder.typicode.com/photos/1');

// if (response.ok) {
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }


// alert(commits[2].url);

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(photos => alert(photos[0].url));