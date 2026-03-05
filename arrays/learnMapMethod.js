var nums=[12,32,56,43,67]
// normal method to convert one lelement into a new one
var multiples=[]
for(var i=0;i<nums.length;i++){
    multiples.push(nums[i]*5);
}
console.log(multiples)

console.log("=============================")

var multipleVals=nums.map(val=>val*5)
console.log(multipleVals)