// three types of variables
// ES6
// scope: var
// functionally / locally + global scope

// var keyword declaration
//=================================================================================================================
// funtional declaration and global declaration
// below I am declaring a variable y inside the function(scope limited to the fucntion foo only)
// function foo(){
//     var x=10
// }

// trying to access the vaiable y which is declared within the function

// foo()
// console.log(x)

/*error message as below 
   console.log(y)
   ReferenceError: y is not defined

   so variables declared using var within the function can be accessed inside the function only and not outside the function
 */

// var can be re-declared in js

// var browser="chrome";
// var browser="firefox";
// browser="edge";

// we can even re-asign the browser as it is declared as var
// browser="edge";
// console.log(browser);

// var g;
// g="hello world !";
// console.log(g)

// var flag="hey kaushik";
// var t1=4;
// if(t1>3){
//     var flag="hey Venkatesh"
// }
// console.log(flag)

// let m="kaushik";
// let time=4;
// if(time>3){
//     let m="hello";
// }
// console.log(m);

const n="Kaushik"
const n="Babbi"
console.log(n)

