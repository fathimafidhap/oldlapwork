var employee={
eid:100,
name:"don",
exp:2,
salary:15000
}
//print employee name
console.log(employee["name"])
//iterate employee
for(let emp in employee){
    console.log(emp+",",employee[emp])
}
//add new key word
employee["gender"+":"+"male"]
console.log(employee)
//check gender