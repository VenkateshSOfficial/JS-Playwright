function calculateAge(age){
    if(age>18){
        console.log("you can vote");
    }else{
        console.log("sorry you must be more that 18 years to vote");
    }
}

calculateAge(10);
calculateAge(80);

function checkNum(num){
    if(num>0){
        console.log("number is positive");
    }else if(num<0){
        console.log("number is negative")
    }else{
        console.log("zero is entered")
    }
}

checkNum(34)
checkNum(-56)
checkNum(0)