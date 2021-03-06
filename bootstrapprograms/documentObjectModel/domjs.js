//let obj={
  //url:"domjs.js"
//}
//console.log(obj.url)

//let person={
  //  age:25,
   // name:"ajay",
//getAge:function(){console.log(this.age)},
//getName:function(){this.name}
//}
//var name1=person.getName()
//console.log(name1)

var heads=document.getElementsByTagName("h1")

 for(head of heads){
    head.style.color="green";
}

 var id=document.getElementById("one")
id.style.color="cyan"

var cl=document.getElementsByClassName("cl")
for(cs of cl){
cs.style.color="red";}

//print the content on alert box
var oh=document.getElementById("one")
alert(oh.textContent)

//to change text content from document methodes to document object methods
var dm=document.getElementById("h1")
dm.textContent="document object methodes"

//to print word documnet object methods in italics
dm.innerHTML="<em>document object methods</em>"

//for all li we need same colr using query selector
var lis=document.querySelectorAll("li")
lis.forEach(li=>li.style.color="cyan")

//for a classwe need same colr
var cls=document.querySelectorAll(".cl")

cls.forEach(cl=>cl.style.color="blue")

//for a specific one we need one color
var hp=document.querySelector("#sp")
hp.style.color="orange";

var lop=document.querySelector("#ten")
lop.style.color="yellow";



