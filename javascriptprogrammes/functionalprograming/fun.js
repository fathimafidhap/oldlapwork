var arr=[1,2,33,34,35]
//reduce
//find max value
var maxs=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(maxs)


//to find sum
var sm=arr.reduce((no1,no2)=>no1+no2)
console.log(sm)


//sort
var srt=arr.sort((no1,no2)=>no1-no2)
console.log(srt)