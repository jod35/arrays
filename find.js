let names=[ 'Jerusha', 'Jerry', 'Jannet', 'Jona', 'Jordan' ];

names.find(
    (name)=>{
        if (name == "Jerry"){
            console.log(`${name} is found`);
        }
    }
)


let numbers=[12,35,46,1];

numbers.find(
    (number)=>{
        if(number%3 ==0){
            console.log(number);
        }
    }

)

//THis function runs on every item util it finds one that statisfies a condition