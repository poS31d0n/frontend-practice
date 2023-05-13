arr = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3, 4, 5],
  [1],
  [2],
  [1, 2, 3, 4]
]

const createarr_1 = (arr) => {
  let numReplace = 0;
  let replace;
  
  while (true) {
    for( let i = 0; i < arr.length; i++)
    {
      if (arr[i - 1] == undefined)
        continue;
      else if (arr[i].length < arr[i - 1].length) {
        replace = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = replace;
        numReplace++;
      }
    }
    
    if (numReplace == 0)
      return arr;
    else
      numReplace = 0;
  }
}

const createarr_2 = (arr) => {
  
  return arr.sort((a, b) => a.length - b.length);
}

const createarr_3 = (arr) => {
  let replace;

  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if (arr[j].length < arr[i].length){
        replace = arr[i];
        arr[i] = arr[j];
        arr[j] = replace;
      }
    }
  }
  return arr;
}





// 1
console.log(createarr_1(arr));

console.log("////////////////");

// 2
console.log(createarr_2(arr));

console.log("////////////////");

// 3
console.log(createarr_3(arr));