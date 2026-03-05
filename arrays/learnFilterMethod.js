var num=[12,35,64,23,78,91]
var evenNums=[]
// normal way to fetch even numbers
for(var i=0;i<num.length;i++){
    if(num[i]%2==0){
        evenNums.push(num[i])
    }
}
console.log(evenNums)

console.log("=======================================")
// advanced filter method usage

var evenVals=num.filter(evenNumbers=>evenNumbers%2==0)
console.log(evenVals)
