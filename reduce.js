let numbers=[0,1,2,3,4,5,6,7,8,9]

numbers.reduce((i,j)=>{
    sum=i+j
    console.log(sum);

    return sum;
    }
)

//acllas the specified callback function for each of the items in an array returning the accumulated result as an argument