let x = 1;
let y = 8;
let string = "#";
if (x < 1 || x >= y)
    console.log("Bad arguments =(");
else
{
    while (x != y)
    {
        console.log(string);
        string += '#';
        x++;
    }
}
