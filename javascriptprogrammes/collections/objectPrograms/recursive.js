//recursive=first repeating character

var pattern="ABABC";
//key|value
//a:1
//b:1
var dict={}
for (let char of pattern){
    if(char in dict){//a in dict
        console.log("first recusive is="+char)//+
        break;
    }
    else{
        dict[char]=1
    }
}