var players=[
    {name:"sunilgavasker",debut:1974,retired:1987,runs:10122},
    {name:"sachintendulkar",debut:1989,retired:2013,runs:15921},
    {name:"virendersehwag",debut:1999,retired:2013,runs:8586},
    {name:"gautamgambhir",debut:2003,retired:2018,runs:4154},
    {name:"rahuldravid",debut:1996,retired:2012,runs:13288},
    {name:"mohammadkaif",debut:2002,retired:2006,runs:624},
    {name:"irfanpathan",debut:2004,retired:2012,runs:1105},
    {name:"msdhoni",debut:2004,retired:2020,runs:4876}
]
//find all players on uppercase
var data=players.map(data=>data.name.toUpperCase())
console.log(data)
//print all players name who have experience more than 8 years
var exp=players.filter(exp=>(exp.retired)-(exp.debut)>8).forEach(exp=>console.log(exp.name))

//find the player who scored higest runs in his account
var runs=players.reduce(data=>data)





