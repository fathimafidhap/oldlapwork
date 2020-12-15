//java script nte palla versions aanu ES6...es is lik govnment means theyhave so manyrules lik ES6
//es6ilulla kuree karyaghal aanu next ingluding functional pgms..




var arr=[10,11,8,7,6,12,13]
//find squares of each number in the array

for(let num of arr){
console.log(num**2)
}


//find cube of each number in the array


for(let num of arr){
    console.log(num**3)
    }

//find double of each element in the array

for(let num of arr){
    console.log(num+num)
    }



    //find even numbers from array
for(let num of arr){
    if(num%2==0){//ellathinnum equalent aayi output generate aakunnilla
        console.log(num)
    }
}


    //map() =>oronninnum egelent aayi output generate aakum
    //filter()=>filter cheyunnum ooronninum coresopnding alla

//var data=arr.map(num=>num**2)
//console.log(data)

//square
var data=arr.map(num=>num**2)
console.log(data)

//cube
 var data=arr.map(num=>num**3)   
 console.log(data)

//double
 var dble=arr.map(num=>num+num)
 console.log(dble)

//even
var data=arr.filter(num=>num%2==0)
console.log(data)


//capital letters
var names=["alan","abi","bine","binoy","biju"]
var data=names.map(name=>name.toUpperCase())//()
console.log(data)


//starting with a
var data=names.filter(name=>name.charAt(0)=='a')
console.log(data)