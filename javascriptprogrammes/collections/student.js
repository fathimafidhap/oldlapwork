var students=[
[1,"st1","mca",142],
[2,"st2","mca",145],
[3,"st3","bca",150],
[4,"st4","bca",135]
]



//print all student name
for(let student of students){
console.log(student[1])
}

//find number of students doing mca
var cnt=0;
for(let student of students){
if(student[2]=="mca"){
cnt++;
}
}




//find totalof markss those who are in bca