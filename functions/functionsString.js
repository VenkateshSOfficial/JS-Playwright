let day='tuesday'
console.log(day.length)  // to fetch the length of the string

console.log(day.slice(1,4)) // to fetch the substring of the string

console.log(day[3])  // access specific index in a string

console.log("=========================================")

for(let i=0;i<day.length;i++){
    console.log(day[i])
}

// to split a string
let splitDay=day.split('s')
console.log(splitDay,typeof(splitDay))
console.log(splitDay[0])

// method to convert string to I=number
let age ="23"
console.log(typeof(age))
age=parseInt(age)
console.log(typeof(age))

// method to convert number to string
age=age.toString()
console.log(typeof(age))

// string concatination

let naam="kaushik"
let myName=naam+ " is a good guy"
console.log(myName)

console.log(day.indexOf("day"))