let names=["Jona","Jerusha","Jannet","Nehemiah","Jordan"];

console.log(names.copyWithin(0,1,2));
// [ 'Jerusha', 'Jerusha', 'Jannet', 'Nehemiah', 'Jordan' ]


// copies a target index to the index identified by start and end

console.log(names.copyWithin(3,1,2));

// [ 'Jerusha', 'Jerusha', 'Jannet', 'Jerusha', 'Jordan' ]