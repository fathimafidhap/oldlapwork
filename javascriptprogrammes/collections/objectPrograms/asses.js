var expence=[ 22000, 23000, 2000, 15000, 20000, 23000,20000, 22000, 50000]
//expence of jan
console.log(expence[0])
//expence of sum of feb and sept
console.log(expence[1]+expence[8])
//by the above methode searching is not easy so we can use tht object typ
//by the below method searching is easy we dont want to lookup index position and all
//so by using objest efficency is also more by below mwthod



//                  OR

var exp = {
    jan: 22000,
    feb: 23000,
    march: 2000,
    april: 15000,
    may: 20000,
    june: 23000,
    july: 20000,
    august: 22000,
    sept: 50000
}


//find expense in april
console.log(exp["april"])



//total sum ofjan and feb
console.log(exp["jan"]+exp["feb"])

