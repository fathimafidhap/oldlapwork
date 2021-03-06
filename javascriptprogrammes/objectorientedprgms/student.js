class Student {

    setStudent(rol,name,course){
        this.rol = rol;
        this.name = name;
        this.course = course;
    }
    printStudent(){

        console.log("rol=" + this.name);
        console.log("name=" + this.rol);
        console.log("course=" + this.course)
    }
}

//object


let obj=new Student()
obj.setStudent(25, "ajay", "mca")
obj.printStudent()



//different types of variables
//instance variable
//instance variables are always prepended