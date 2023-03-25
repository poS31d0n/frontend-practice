const checks = document.querySelectorAll('.form-check-input');
checks.forEach(function(ch) {
  ch.addEventListener('click', function() {
    let that = this;
    checks.forEach(function(ch2) {
      if (ch2 != that)
        ch2.checked = false;
    });
  });
});



function switchMenu (button_1, button_2) {
	button_1.style.backgroundColor = "#7F7D9C";
	document.querySelector(`.${button_1.innerHTML}_my`).style.display = `${button_1.innerHTML}`;
	button_2.style.backgroundColor = "#0d6efd";
	document.querySelector(`.${button_2.innerHTML}_my`).style.display = `none`;
}


const displaySwitch = document.querySelectorAll('.button');
displaySwitch.forEach(function(ev_1) {

	ev_1.addEventListener('click', function () {

		let that = this;
		displaySwitch.forEach(function(ev_2) {
			if (ev_2 != that){
				data.displayButton = ev_1.innerHTML;
				switchMenu(ev_1, ev_2);
			}
		});
	});
});

const getRadio = async () => {
	const button = document.querySelectorAll('.form-check-input');
	button.forEach(async function(elem) {
		if (elem.checked == true)
			await getNewCharacters(elem)
	});
}

const getNewCharacters = async (radio, i = 20) => {
	// console.log(radio);

	let number = document.querySelector(".form-control").value;
	if (document.querySelector(`#${radio}`).checked === false)
		return;
		console.log(document.querySelector(`#${radio}`));

	switch (radio) {
		case 'picsum':
			await getPicsumPhotos(i);
			break;
		case 'rick':
			await getRickAndMortyCharacters(i);
			break;
		case 'pokemon':
			await getPokemonCharacters(i);
			break;
	}
}


let currentRadio;