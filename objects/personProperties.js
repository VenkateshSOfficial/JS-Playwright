let person={
    firstName: "kaushik",
    lastName: "S",
    age: 34,
    fullName(){
        console.log(this.firstName+ " " + this.lastName)
    }
}

console.log(person.lastName)
console.log(person.firstName)
console.log(person["firstName"])

person.firstName="babbi"
console.log(person.firstName)

person.age=34

console.log(person)
delete person.lastName

console.log(person)

var result='age' in person
console.log(result)

person.lastName="Swaminathan"

for(let data in person){
    console.log(person[data])
}

console.log("=====================")

console.log(person.fullName())