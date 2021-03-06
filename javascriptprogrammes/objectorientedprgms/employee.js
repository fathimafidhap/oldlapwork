class Employee{
constructor(eid,ename,desig,salary){

    this.eid=eid;
    this.ename=ename;
    this.desig=desig;
    this.salary=salary;

}
printEmp(){
    console.log(this.eid);
    console.log(this.ename);
    console.log(this.desig);
    console.log(this.salary)
}

}

let obj=new Employee(100,"ajay","developer",25000);//new



let obj1=new Employee(101,"vijay","developer",22000)

let obj2=new Employee(102,"vinay","tester",27000)

//INSERT TO AN ARRAY
var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
console.log(arr)

//print all employee name only
arr.forEach(emp=>console.log(emp.ename))

//print all employee name in upper case
arr.forEach(emp=>console.log(emp.ename.toUpperCase()))

//print employee whose salary>23000
arr.filter(emp=>emp.salary>23000).forEach(emp=>console.log(emp.ename))

var sal=arr.map(emp=>emp.salary).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(sal)
//obj.printEmp()
//find highest salary
//arr.map(emp=>emp.salary).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
//console.log(sal)