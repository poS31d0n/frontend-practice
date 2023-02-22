function countBs (string)
{
    let nomber = 0;
    let j = 0;
    while (string[j])
        j++;
    if (j === 0)
        return nomber;
    for (let i = 0;i != j; i++)
        if (string[i] === 'В')
            nomber++;
    return nomber;
}

function countChar(string, n)
{
    let nomber = 0;
    let j = 0;
    while (string[j])
        j++;
    if (j === 0)
        return nomber;
    for (let i = 0;i != j; i++)
        if (string[i] === n)
            nomber++;
    return nomber;
}


console.log(countBs('ВаВаВ'));
console.log(countChar('ВаВаВ', 'а'));