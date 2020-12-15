var num1=10;
var num2=20;
var res=num1+num2;
console.log(res)



//Math.floor()
//console.log()
//typeof()
//functions are used to perform a specific task


//function functionName(arg1,arg2......argn){
//function definition;
//}

//adding 2 no:s
function add(num1,num2){
    res=num1+num2;
    console.log(res)
}
add(20,90);//function calling by using function name
add(40,1)



//subtraction of 2 no:s
function sub(num1,num2){
res=num1-num2;
console.log(res)
}
sub(20,11);

//create function for perform various arithemetic operations
//add,sub,mul,div,module,power



//mul
function mul(num1,num2){
res=num1*num2;
console.log(res);
}
mul(2,9)


//div
function div(num1,num2){
    res=num1/num2;
    console.log(res)
}
div(10,2);


//module
function mod(num1,num2){
    res=num1%num2;
    console.log(res)
}
mod(17,3)



//power
function pow(num1,num2){
    res=num1**num2;
    console.log(res)
}
pow(4,3)



//factorial

function fac(num){
    let res=1;
    for(let i=1;i<=num;i++){
        res=res*i;
    }
    console.log(res);
}
fac(4);












