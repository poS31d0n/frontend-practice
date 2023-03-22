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

	// Надо добавить проверку на свич flex/grid при 0ом запросе !

	if (button_1.style.backgroundColor == "rgb(127, 125, 156)") {
		button_1.style.backgroundColor = "#0d6efd";
		document.querySelector(`.flex_my`).style.display = `flex`;
		document.querySelector(`.grid_my`).style.display = `none`;
	}
	else {
		button_1.style.backgroundColor = "#7F7D9C";
		document.querySelector(`.${button_1.innerHTML}_my`).style.display = `${button_1.innerHTML}`;
		button_2.style.backgroundColor = "#0d6efd";
		document.querySelector(`.${button_2.innerHTML}_my`).style.display = `none`;
	}
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



const getNewCharacters = async () => {
	let number = document.querySelector(".form-control").value;
	if (number >= 0 ) {
		if (document.querySelector("#api_1").checked == true)
		{
			getPicsumPhotos(number);
		}
		else if(document.querySelector("#api_2").checked == true)
		{
			getRickAndMortyCharacters(number);
		}
		else if(document.querySelector("#api_3").checked == true)
		{
			getPokemonCharacters(number);
		}
	}
	else
		return;
}
	
