const Person = require("../classes/learnClasses");

class Pets extends Person{
    constructor(firstName,lastName,age){
        super(firstName,lastName,age)
    }
}

let pet=new Pets("tom","jerry",5)
console.log(pet.fullName())
