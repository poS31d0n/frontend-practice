let x = 1;
let y = 100
while (x <= y)
{
    let string = '';
    if (x % 3 === 0)
    {
        if (x % 5 === 0)
            console.log('FizzBuzz');
        else
            console.log('Fizz');        
    }
    else if (x % 5 === 0)
         console.log('Buzz');
    else
        console.log(x);
    x++;
}