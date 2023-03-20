const getJsonPlaceholder = async () => {

    if (document.querySelector("#api_1").checked == true)
    {
        // Нужно понять как делать запрос на определенное кол-во запроса !
        const people = await axios.get("https://swapi.dev/api/people");
        console.log(people);
    }
    else if(document.querySelector("#api_2").checked == true)
    {
        const data = await axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12");
        // Вывод url
        // console.log(data.data[0].url);
        console.log(data.data);
    }
    else if(document.querySelector("#api_3").checked == true)
    {
        // Нужно понять как делать запрос на определенное кол-во запроса !
    }
}


    
