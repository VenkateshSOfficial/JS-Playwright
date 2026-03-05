let expenses=[1230,453,764,345,908]
function calculateTotalExpenses(){
    return expenses.reduce((totalSum,expenses)=>totalSum+expenses,0)
}

let totalExpenses=calculateTotalExpenses()

function calculateMinVal(val){
    let minVal=val[0]
    for(let i=1;i<val.length;i++){
        if(val[i]<minVal){
            minVal=val[i]
        }
    }
    return minVal
}

function calculateMaxVal(val){
    let maxVal=val[0]
    for(let i=1;i<val.length;i++){
        if(val[i]>maxVal){
            maxVal=val[i]
        }
        
    }
    return maxVal
}

function calcMinVal(val){
    return val.sort((a,b)=>a-b)[0]
}

function calcMaxVal(val){
    return val.sort((a,b)=>b-a)[0]
}

console.log(calculateMinVal(expenses))
console.log(calcMinVal(expenses))
console.log("The max val is ",calculateMaxVal(expenses))
console.log("The max val ",calcMaxVal(expenses))

