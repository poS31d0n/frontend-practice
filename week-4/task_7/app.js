let data = [
  {
    country: "Россия",
    city: "Москва",
  },
  {
    country: "Китай",
    city: "Пекин",
  },
  {
    country: "Беларусь",
    city: "Минск",
  },
  {
    country: "Россия",
    city: "Иркутск",
  },
  {
    country: "Россия",
    city: "Сочи",
  },
  {
    country: "Китай",
    city: "Шанхай",
  },
  {
    country: "Беларусь",
    city: "Витебск",
  },
];

const funcArr = (data) => {
  const result = {};

  for(const item of data){
    const {country, city} = item;

    result[country] ? result[country].push(city) : result[country] = [city];
  }
  return result;
}


console.log(funcArr(data));