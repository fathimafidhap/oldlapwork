//objects are stored in the form of key value pairs
var students={
rol:150,
name:"ajay",
course:"bca",
total:150
}

//key:value
//duplicate keys are not allowed
//duplicate values are allowed
//accessing values
//if we want to access values we have to use corresponding key
console.log(students["rol"])
console.log(students.rol)


//ajay

console.log(students.name)
//bca
console.log(students["course"])



for(let studen in students){
    console.log(studen+","+students[studen])
}


//checking for a specific key
console.log("gender" in students)


//adding a new key value pair
console.log()