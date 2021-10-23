var balance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;

if (nikeSBShoes <= balance){
    balance -= nikeSBShoes;
    console.log("you can buy");
} else if ( (nikeSBShoes - coupon) <= balance) {
     balance -= (nikeSBShoes - coupon);
     console.log("you can buy");
} else {
    console.log('you cannot get it');
}
    console.log("your balance is " + balance);