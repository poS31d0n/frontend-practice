function FizzBuzz(x, y)
{
    if (x < 1 || y < 1)
    console.log("Bad arguments =(");
    else
    {
        for (let i = x;i != 0; i--)
        {
            let string = '';
            for (let j = y; j != 0; j--)
            {
                if (j % 2 === y % 2 )
                {
                    if (i % 2 != x % 2)
                    {
                        string += ' ';
                        j--;
                    }
                    string += '#';
                }
                else
                    string += ' ';
            }
            console.log(string);
        }
    }
}

FizzBuzz(8,8);