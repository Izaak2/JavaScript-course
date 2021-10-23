//var balance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;

// == (checking if a value is the same)
// === (checking if value and type is same) most time use that one.
// !=
// !==

//var age = 23;
//var sage = "23";
//
//if (age == sage) {
//    console.log("== is true")
//}
//
//if ( age === sage) {
//    console.log("=== is true")
//} else {
//        console.log("=== is false")
//    }

//if (nikeSBShoes <= balance){
//    balance -= nikeSBShoes;
//    console.log("you can buy");
//} else if ( (nikeSBShoes - coupon) <= balance) {
//     balance -= (nikeSBShoes - coupon);
//     console.log("you can buy");
//} else {
//    console.log('you cannot get it');
//}
//    console.log("your balance is " + balance);\
//
//if ( 1 === 1 && 2 === 2){
//    console.log("True")
//}
//
//if ((true && false) || true) {
//    console.log("true");
//}

//
//var students = ["timmy", "jenna", "arun"];
//
//var naughtyList = [];
//
//naughtyList.push(students[0]);
//
//var index = naughtyList.indexOf("timmy");
//
//if (index > -1){
//    naughtyList.splice(index, 1);
//}
//
//console.log(naughtyList);
//
//var someVal = 10;
//
//var studnets = ["a", "b", "c", "d"]; 
//
//for (var x = 0; x < someVal; x++){
//    //Iterate until told not to
//    console.log(x);
//}
//
//for (var index = 0 ; index < studnets.length; index++) {
//    console.log(studnets[index]);
//}

function area(lenght, width){
    return lenght * width;
}

var area1 = area(10, 15);
console.log(area1);

var rectangles = [];
rectangles.push(area(10,15));
rectangles.push(area(13,15));
rectangles.push(area(10,1));

console.log(rectangles)


var bankBalance = 500;

function makeTransaction(priceOfgSale) {
    if (priceOfgSale <= bankBalance){
        bankBalance -= priceOfgSale;
        console.log("Purchase successful")
    } else {
        console.log("insufficient funds")
    }
}

console.log(bankBalance);
makeTransaction(79.00);
console.log(bankBalance);
makeTransaction(9.00);
console.log(bankBalance);
makeTransaction(49.00);
console.log(bankBalance);
makeTransaction(709.00);
console.log(bankBalance);























