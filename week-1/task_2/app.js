let x = 1;
let y = 100;
if (x < 1 || x >= y)
    console.log("Bad arguments =(");
else
{
    while (x <= y)
    {
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
}