var marks=[50,67,87,98,23]
// normal way to find the total sum
var sum=0
for(var i=0;i<marks.length;i++){
    sum+=marks[i]
}
console.log(sum)

// using reduce method in arrays

var sumTotal=marks.reduce((totalSum,marks)=>totalSum+marks,0)
console.log(sumTotal)