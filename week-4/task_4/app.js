const object1 = {
  name: "Daniil",
  age: 45,
  hobby: 'Chess',
  children: [1,2,3], 
}

const clone = (obj) => {
  let newObj = {};
  for(let key in obj) {
    if (obj == 'object')
      clone()
    newObj[key] = obj[key];
  }
  return newObj
}

const clone_2 = (obj) => {
  return structuredClone(obj);
}


let person = clone_2(object1);
person.name = "Kirill";
person.age = 100;
person.hobby = "Game";
person.child.push(4);


console.log('defalt obj = ', object1)
console.log('new obj = ', person)
