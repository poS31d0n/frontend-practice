////////////////////////////////////////// N_1

function triangle(x , y)
{
    let string = "#";
    if (x < 1 || x >= y)
        console.log("Bad arguments =(");
    else
    {
        while (x <= y)
        {
            console.log(string);
            string += '#';
            x++;
        }
        console.log('\n');
    }
}

triangle(1, 7);

////////////////////////////////////////// N_2

function triangle_2(x , y)
{
    let string = '';
    let n = '';
    if (x < 1 || x >= y)
        console.log("Bad arguments =(");
    else
    {
        for (let i = 0; i != y - x + 1; i++)
        {
            string += n + '#\n';
            n += '#';
        }
        return string;
    }
}

console.log(triangle_2(1, 7));

////////////////////////////////////////// N_3

function triangle_3(x , y)
{
    let string = '';
    if (x < 1 || x >= y)
        console.log("Bad arguments =(");
    else
    {
        while (x <= y)
        {
            for (let i = 0; i != x; i++)
                string += '#';
            string += '\n';
            x++;
        }
        return string;
    }
}

console.log(triangle_3(3, 10));
