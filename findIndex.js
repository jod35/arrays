let names=[ 'Jerusha', 'Jerry', 'Jannet', 'Jona', 'Jordan' ];

console.log(
    names.findIndex(
        (name)=>name=="Jona"
    )
);


let numbers=[1,4,59,45];

console.log(
    numbers.findIndex(
        number=>number%3==0
    )
);


//This function runs once for every item in the array and returns the index of the element that satisfies a condition
