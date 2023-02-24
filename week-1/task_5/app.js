function isEven (i)
{
    if (i < 0 )
        return isEven(-i);
    if (i === 4)
        return Boolean(i);
    if (i === 0)
        return Boolean(1)
    if (i % 2 === 0)
        return isEven(4);
    else if (i === 1)
        return Boolean(0);
    else if (i % 2 === 1)
        return isEven(1);
    
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log();
console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-1));
