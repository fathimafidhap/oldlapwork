//class=>blue print(object create cheyan veendi),plan,design pattern(eg:tv)
//object=>real world entity(eg:mi4atv)
//reference=>object meele enthelum perform cheyan venndi ullathe(eg:remort)

class Person {


    setPerson(age, name, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    printPerson(){

        console.log("age="+this.age);
        console.log("name="+this.name);
        console.log("gender="+this.gender)
    }
    }

    //object
      

    let obj=new Person();
    obj.setPerson(25,"ajay","male")
    obj.printPerson()






