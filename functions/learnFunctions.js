// var, let and const
// var - global if declared in global
//       function if declared in function

// let - global level if declared global
//       block level if declared in {}

function add(a,b){
    return a+b
}
console.log(add(2,5))

// anonomous function
// only anonomous functions can be assigned to variables

let prod=function(x,y){
    return x*y
}
console.log(prod(5,2))

let diff=(x,y)=>x-y
console.log(diff(2,5))