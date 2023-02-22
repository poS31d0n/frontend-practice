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
    }
}

triangle(1, 7);