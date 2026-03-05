var marks=Array(10)
// syntax to create the length of array

var marks=new Array(50,45,32,112,56)
// syntax for creating object for array

var marks=[12,34,87,23,65]
console.log(typeof(marks))

for(var i=0;i<marks.length;i++){
    console.log(marks[i])
}
console.log("==============================")

// access specific element in an array, fetching based on the index
console.log("The element in the 2nd index : ",marks[2])

// make changes to the index of the array
marks[2]=100

console.log("The updated element : ",marks[2])
console.log(marks)

// to fetch the length of the array
console.log("Length : " , marks.length)

// to add element at the end of the array
marks.push(345)
console.log(marks,marks.length)

//to delete an element at the end of array
marks.pop()
console.log(marks,marks.length)

// add the element at the start of an array
marks.unshift(400)
console.log(marks,marks.length)

//to find the index of the element in arrays
console.log("The index : ",marks.indexOf(12))

// validate if element is present in the array
console.log("500 present is ",marks.includes(500))

// create sub array from the main array
console.log(marks.slice(2,5))

var sum=0

for(var i=0;i<marks.length;i++){
    sum+=marks[i]
}
console.log(marks)
console.log("total sum : ",sum)

// reduce function
console.log("Total sum : ",marks.reduce((totalSum,mark)=>totalSum+mark,0))
console.log("The multiple : ",marks.reduce((multiples,mark)=>multiples*mark,1))