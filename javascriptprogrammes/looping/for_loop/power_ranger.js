var num = 3;
var lower = 4;
var upper = 40;
//
//1**3=1 2**3=8 3**3=27  4**3=
//8 27
for (let i = 1; i <= upper; i++)
{
    let data = i ** num;
    if ((data > lower) & (data < upper)) {
        console.log(data);
    }
}