const checks = document.querySelectorAll('.form-check-input');
checks.forEach(function(ch) {
  ch.addEventListener('click', function() {
    var that = this;
    checks.forEach(function(ch2) {
      if (ch2 != that)
        ch2.checked = false;
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
	
