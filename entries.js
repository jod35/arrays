let names=[ 'Jerusha', 'Jerry', 'Jannet', 'Jona', 'Jordan' ];


for( let i of names.entries()){
    console.log(i);
}

/*[ 0, 'Jerusha' ]
[ 1, 'Jerry' ]
[ 2, 'Jannet' ]
[ 3, 'Jona' ]
[ 4, 'Jordan' ]
*/

for (let i of names.entries()){
    console.log(`Index: ${i[0]} value: ${i[1]}`);
}

/*
Index: 0 value: Jerusha
Index: 1 value: Jerry
Index: 2 value: Jannet
Index: 3 value: Jona
Index: 4 value: Jordan
*/

//This fucntion returns a key-value pair of every element with its index.