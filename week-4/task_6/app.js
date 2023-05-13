const strOrNumCompare = (arr1, arr2) => {
  if(arr1 !== arr2)
    return false;
  return true;
}



const compareArr_1 = (arr1, arr2) => {
  if (arr1.length == arr2.length) {
    for(let i = 0; i < arr1.length; i++) {
      if (typeof(arr1[i]) === typeof(arr2[i])) {
        let type = typeof(arr1[i]);
        switch(type) {
          case 'object':
            if(arr1[i].length === arr2[i].length) {
              for(let j = 0; j < arr1[i].length; j++) {
                if(strOrNumCompare(arr1[i][j], arr2[i][j]) == false)
                  return 'false = bad argument on object';
              }
            }
            else
              return 'false = bad object length'
            break;
          case 'number':
          case 'string':
            if(strOrNumCompare(arr1[i], arr2[i]) === false)
              return false;
            break;
        }
      }
      else 
        return 'false = bad type'
    }
    return true;
  }
  else
    return 'bad length';
}


///////////////////////////   2

const compareArr_2 = (arr1, arr2) => {
  
  if(arr1.length != arr2.length || typeof(arr1) != 'object' || typeof(arr2) != 'object')
    return false;

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i])
      return false
  }
  return true;
}


///////////////////////////   3

const compareArr_3 = (arr1, arr2, i = 0) => {
  
  if(arr1.length != arr2.length || typeof(arr1) != 'object' || typeof(arr2) != 'object')
    return false;

  for(const i in arr){
    switch (typeof(arr1[i])){

      case 'object':
        
        break;

      default:
        if(arr1[i] !== arr2[i])
          return false
    }
    
  }
  return true;
}


// console.log(compareArr_1([1,2,5], [1,2,5]));


console.log(compareArr_2([1,2,[5]], [1,2,[5]]))