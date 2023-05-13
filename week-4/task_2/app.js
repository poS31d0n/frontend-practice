arr = [
  [2, 4, 5],
  [1, 2, 3],
  [0, 1, 1],
  [5, 7, 1]
]


//////////// 1
const scoreArr = (arr) => {
  let score = [];
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      n += arr[i][j];
    }
    score[i] = n;
    n = 0;
  }
  return score;
}
const swapArr = (arr, score) => {
  let numReplace = 0;
  let replace = [];

  while(true) {
    for ( let i = 0; i < score.length; i++) {
      if (score[i - 1] == undefined)
        continue;
      else if (score[i] < score[i - 1]) {
        replace = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = replace;
        replace = score[i];
        score[i] = score[i - 1];
        score[i - 1] = replace;
        numReplace++;
      }
    }
    if (numReplace == 0)
      return arr;
    else
      numReplace = 0;
  }
}
const sortArr_1 = (arr) => {
  let score = scoreArr(arr);
  arr = swapArr(arr, score);
  return arr;
}




////////////////// 2

const scoreArr_2 = (arr) => {
  let i = arr[0];

  for(let i = 1; i < arr.length; i++){
    i += arr[i];
  }
  return i;
}

const sortArr_2 = (arr) => {
  let replace;

  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if (scoreArr_2(arr[j]) < scoreArr_2(arr[i])){
        replace = arr[j];
        arr[j] = arr[i];
        arr[i] = replace;
      }
    }
  }
  return arr;
}

const sortArr_3 = (arr) => {
  
  return arr.sort((a, b) => a.reduce((sum, current) => sum + current, 0) - b.reduce((sum, current) => sum + current, 0));
}

// console.log(sortArr_1(arr));

// console.log(sortArr_2(arr));

console.log(sortArr_3(arr));