const next_arr = [
  { id: "picsum", name: "Picsum", onclick: () => getNewCharacters('picsum'), check: "checked"},
  { id: "rick", name: "Rick", onclick: () => getNewCharacters('rick')},
  {id: 'pokemon', name: 'Pokemon', onclick: () => getNewCharacters('pokemon')},
];


function getListContent(num) {
  let result = [];

  for (let i = 0; i < num;) {
    let div = document.createElement("div");
    div.className = "row_element_flex";

    for (let j = 1; j <= 4; j++) {
		
      	let nextDiv = document.createElement("div");
      	nextDiv.className = `row_content_flex`;
		if (i < num)
      		nextDiv.innerHTML = `<img id="img_flex_${i}" src="" class="img-thumbnail image" alt=""><p id="text_name_flex_${i}" class="text"></p><p id="text_data_flex_${i}" class="text"></p>`;
      	div.append(nextDiv);
		i++;
    }
    result.push(div);
  }
  return result;
}

function getBlocksContent(num) {
  let result = [];
  let str = 0;
  for (let i = 0; i < num;) {
    let div = document.createElement("div");
    div.className = "row_element_grid";
	if (str >= 6)
		str = 0;
	for (let j = 1; j <= 4; j++)
	{
		if (i < num) {
		let nextDiv = document.createElement("div");
		nextDiv.className = "row_content_grid";
		if (str >= 4)
			j++;
		str++;
		nextDiv.innerHTML = `<img id="img_grid_${i}" src="" class="img-thumbnail image__grid" alt=""><p id="text_name_grid_${i}" class="text text__grid"></p><p id="text_data_grid_${i}" class="text text__grid"></p>`;
		i++;
		div.append(nextDiv);
		}
	}
    result.push(div);
  }
  return result;
}

function undateContent(infoCharacters, i) {



  document.querySelector(".flex_my").append(...getListContent(i));
  document.querySelector(".grid_my").append(...getBlocksContent(i));


  for (let j = 0; j < i; j++) {
    document.querySelector(`#img_flex_${j}`).src = infoCharacters[j].url;
    document.querySelector(`#text_name_flex_${j}`).innerHTML =
      infoCharacters[j].name;
    document.querySelector(`#text_data_flex_${j}`).innerHTML =
      infoCharacters[j].id;

    document.querySelector(`#img_grid_${j}`).src = infoCharacters[j].url;
    document.querySelector(`#text_name_grid_${j}`).innerHTML =
      infoCharacters[j].name;
    document.querySelector(`#text_data_grid_${j}`).innerHTML =
      infoCharacters[j].id;
  }
  return;
}

(async function () {

	await radioNew(next_arr);
	document.querySelector(".flex_my").append(...getListContent());
	document.querySelector(".grid_my").append(...getBlocksContent());

	await getNewCharacters('picsum');

})();

function radioNew(arr) {
	let result = [];
	for(let item of arr)
	{
		let div = document.createElement("div");
    	div.className = "form-check radios";
		div.innerHTML = `<input onclick="(${item.onclick.toString()})()" class="form-check-input" type="checkbox" id="${item.id}" ${item.check} ><label class="form-check-label text" for="flexCheckDisabled">${item.name}</label>`;
		result.push(div);
	}
	document.querySelector(".main__top").append(...result);
}
