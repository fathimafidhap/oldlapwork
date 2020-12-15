
//7(1,7)  //11(1,11)  //13(1,13)


var lower = 10;
var upper = 50;
var flg = 0;
for (j = lower; j <= upper; j++) {//j=10
    for (i = 2; i <= upper; i++) {//i=2
        if (j % i != 0) { //10%2 
            flg = +1;
        }
    }
    if(flg>0){
       console.log(j)
    }
    }







