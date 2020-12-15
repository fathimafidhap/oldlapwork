//7(1,7) 13(1,13)


var num=7;
var flg=0;
for(i=2;i<num;i++)//2
{

if(num%i==0){//8%2
    flg=+1;
    break;
}
else{
    flg=0;
}
}
if(flg==1){ //==kodukanam
    console.log("no: is not a prime")
}
else{
    console.log("no:is a prime")
}