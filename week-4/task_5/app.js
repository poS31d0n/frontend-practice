const arr = [1,2,3,2,1,3,5];

const getNumber = (arr) => {
  let n = 0;
  let data = [];
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j])
        data[n++] = arr[i]
    }
  }
  for (const [index,item] of arr.entries()) {
    console.log(index,item);
    if (data.indexOf(arr[item]) < 0)
      return arr[item];
  }
  return ;
}

console.log(getNumber(arr));