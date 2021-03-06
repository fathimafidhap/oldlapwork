
//7(1,7)  //11(1,11)  //13(1,13)


var lower = 10;
var upper = 50;
var flg = 0;
for (let i= lower; i<= upper; i++) {//i=10  i=11
    for (let j= 2; j <i; j++) {//j=2 
        if (i % j== 0) { //10%2  ........... 11%2
            flg +=1;
        }
    }
    if(flg==0){
       console.log(i)
    }
    else{
        flg=0;
    }
    }






