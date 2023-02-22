function isEven (i)
{
    if (i === 1 || i === 0)
        return Boolean(i);
    else if (i % 2 === 0)
        return isEven(1);
    else
        return isEven(0);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-10));