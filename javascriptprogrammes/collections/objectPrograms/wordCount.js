var text = "hello hai hello hai"
//hello count is 2
//hai:2


var words = text.split(" ")//text.split(" ")...ellam split aayi varaan
console.log(words);
//['hello','hai','hello','hai']


//how many tyms to hai and hello is printed


var ob = {}//created a  empty dictionary without any key and value
for (let word of words) {//hello
    if (word in ob) {//hello ob ke aghathu undoo ne check cheyum
        //why 'in' is used here ,bcz of using keyword of we r using 'in' in arrays then tht index value only wil com

        ob[word]+=1//+=
    }
    else {
        ob[word] = 1
    }
}
console.log(ob);


//ths array and object all r data structures .for solving the pbms we hav to use best data structures