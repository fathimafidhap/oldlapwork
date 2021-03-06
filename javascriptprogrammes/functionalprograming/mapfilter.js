var arr=[1,2,33,34,35]
//map()
//filter()
var sqr=arr.map(num=>num**2)
console.log(sqr)

var evn=arr.filter(num=>num%2==0)
console.log(evn)

//reduce
//to find the maxsimum value
var maxs=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(maxs)

//to find the minimum value
var min=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(min)