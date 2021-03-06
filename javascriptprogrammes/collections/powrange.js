var arr=[3,2,4,5] ;//3**1,2**2,4**3,5**4

for(let i=0;i<arr.length;i++){
    console.log(arr[i]**(i+1))
}

//OR


var count=1;
for(let i of arr){
   res= i**count;
    console.log(res)
    count+=1;

}