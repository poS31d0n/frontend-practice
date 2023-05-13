let arr = [
  {
    data: '2019-12-29',
    event: 'name1',
  },
  {
    data: '2019-12-30',
    event: 'name2',
  },
  {
    data: '2019-12-30',
    event: 'name3',
  },
  {
    data: '2019-12-31',
    event: 'name4',
  },
  {
    data: '2019-12-29',
    event: 'name5',
  },
  {
    data: '2019-12-31',
    event: 'name6',
  },
]

const updateArr = (arr) => {
  let result = [];

  for(const item of arr) {
    if (result.some(resultData => resultData === item.data))
      continue;
    else
      result.push(item.data);
  }
  return result;
}

const updateArr_2 = (arr, field) => {
  let result = [];

  for(const item of arr){
    const f = item[field];
    result.push(f);
  }
  return [...new Set(result)];
}

// console.log(updateArr(arr));
console.log(updateArr_2(arr, "data"));