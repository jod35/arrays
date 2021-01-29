let names=[ 'Jerusha', 'Jerry', 'Jannet', 'Jona', 'Jordan' ];

names.filter((p)=>{
    if(p.length<5){
        console.log(p);
    }
})


let numbers =[1,2,23,24,45,100,112,12,13,45];

numbers.filter((num)=>{
    if(num%3 ==0){
        console.log(`${num} is divisible by 3`);
    }
})

let books=[
    {
        "name":"Learn Python",
        "author":"JOnatham",
        "year":1985
    },
    {
        "name":"Learn Javascript",
        "author":"JOnatham",
        "year":2019
    },
    {
        "name":"Learn Java",
        "author":"JOe",
        "year":1999
    },
    {
        "name":"The richest man in Babylon",
        "author":"Bill",
        "year":1786
    },
    {
        "name":"Learn React",
        "author":"Evan",
        "year":2020
    },
    {
        "name":"Pure Math",
        "author":"JOthan",
        "year":2011
    },


]

books.filter((book)=>{
    if(book.year> 2000){
        console.log(book);
    }
})

//This fuctions returns elementas of an array that specify a condition in its call back function

const request=require('request');
