var cl=document.querySelector("#clk");
cl.addEventListener("click",()=>{
    cl.textContent="clicked";
    cl.style.color="red";
})
//mouseout
//dblclick//mouseove

var mou=document.querySelector("#mouse");
mou.addEventListener("mouseover",()=>{
    mou.textContent="mouse currently over me";
    mou.style.color="green";
})

var mou=document.querySelector("#mouse");
mou.addEventListener("mouseout",()=>{
    mou.textContent="mouse currently out";
    mou.style.color="cyan";
})

var db=document.querySelector("#dbl")
db.addEventListener("dblclick",()=>{
    db.textcontent="double clicked"
db.style.color="yellow"
})