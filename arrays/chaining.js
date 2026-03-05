var scores=[123,34,67,90,87,56]
var finalData=scores.filter(val=>val%2==0)
                    .map(val=>val*2)
                    .reduce((totalSum,val)=>totalSum+val,0)
console.log(finalData)                    