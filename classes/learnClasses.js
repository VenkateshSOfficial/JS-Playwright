class Person{
   firstName
   lastName
   age
   getAge(age){
    return age
   }
   getLocation(){
    return "chennai"
   }
   // constructor executed by default when object is created
   constructor(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
   }

   fullName(){
    console.log(this.firstName+" "+this.lastName)
   }
}
module.exports = Person;
let person=new Person("Venkatesh","Swaminathan",34)
console.log(person.firstName)
console.log(person.age)
console.log("The function getAge ",person.getAge(100))
console.log(person.fullName())