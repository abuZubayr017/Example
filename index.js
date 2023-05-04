
const calculate = require('./hisob.js')

const result = calculate.multiply(19, 29);
console.log(result);
console.log('***********');

const result2 = calculate.division(20, 5);
console.log(result2);

const Account = require('./account');
Account.tellMeAboutClass();
Account.showMeTime();

const myAccount = new Account('David', 50000000, 123456789);
myAccount.showBalance();
myAccount.depositMoney(200000);
// withdraw to buy a new car
myAccount.withdrawMoney(4000000)