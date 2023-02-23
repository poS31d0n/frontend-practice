function range(firstNomber, lastNomber, rangeNomber = 1)
{
    if (rangeNomber === 0)
        return "Bad arguments =(";
    let arr = [firstNomber];
    if (firstNomber === lastNomber)
        return arr;
    if (rangeNomber < 0 )
        rangeNomber *= -1;

    let i = 1;
    if (firstNomber > lastNomber)
    {
        while (lastNomber - 1 < firstNomber - rangeNomber)
        {
            firstNomber -= rangeNomber;
            arr[i++] = firstNomber;
        }
    }
    else
    {
        while(firstNomber + rangeNomber < lastNomber + 1)
        {
            firstNomber += rangeNomber;
            arr[i++] = firstNomber;
        }
    }
    return arr;
}

function sum(arr)
{
    let nomber = 0;
    let i = 0;
    while (arr[i])
        nomber += arr[i++];
    return nomber;
}

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
