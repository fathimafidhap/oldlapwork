//many forms (more than one form) is called polymorphism

class MathsPg{
    add(){
        console.log("no arg method")
    }
add(num1){
    console.log("single arg method")
}
add(num1,num2){
    console.log("two arg method")
}
}

var m=new MathsPg()
m.add()


//same method name different number of arguments are called method overloading
//but in javascript execute only recently implemented method