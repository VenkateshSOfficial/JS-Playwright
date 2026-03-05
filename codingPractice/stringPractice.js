let studentNames=["Dinesh","Shareeth","Balaji","Venkatesh","Anand"]

function addName(name){
    studentNames.unshift(name)
    return studentNames
}

function removeLastName(){
    studentNames.pop()
}

studentNames=addName("Arjun")
console.log(studentNames)

removeLastName()
console.log(studentNames)

function sortByAlphabeticalOrder(val){
    return val.sort((a,b)=>a.localeCompare(b))
}

console.log("====================================")
console.log(sortByAlphabeticalOrder(studentNames))
