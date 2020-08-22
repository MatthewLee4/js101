// function hello(name = "World") { 
//     // put your code here
//     console.log("Hello " + name + "!");
//   }
//   hello();

// function madlib (name, subject){
//       return(name + "'s" + " favorite subject in school is " + subject + "."); 
//       console.log(name + "'s" + " favorite subject in school is " + subject + ".");
//   }

//   (madlib("name", "subject"));



function tipAmount(billAmount, levelOfService){
    if (levelOfService == "good"){
        return billAmount * .2;
    }
    else if (levelOfService == "fair"){
        return billAmount *.15;
    }
    else if (levelOfService == "bad"){
        return billAmount *.1;
    }
    else {
        return ("Bad service!");
    }
}

console.log(tipAmount(100, "good"));

// function totalAmount(billAmount, levelOfService){
//     if (levelOfService == "good"){
//         return (billAmount * .2) + (billAmount);
//     }
//     else if (levelOfService == "fair"){
//         return (billAmount *.15) + billAmount;
//     }
//     else if (levelOfService == "bad"){
//         return (billAmount *.1) + billAmount;
//     }
//     else {
//         return ("Bad service!");
//     }
// }

// console.log(totalAmount(100, "good"));

function totalAmount(billAmount, levelOfService){
    return tipAmount(billAmount, levelOfService) + billAmount;
}
console.log(totalAmount(100, "good"));