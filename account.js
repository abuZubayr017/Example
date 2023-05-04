const moment = require('moment');

class Account{
    #amount;
    #account_id;
    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    showBalance() {
        console.log('Your balance: ',this.#amount, '$');
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount){
            this.#amount = this.#amount - amount;
            console.log(`You withdraw ${amount}$ and your current balance: ${this.#amount}$`)
        }else {
            console.log(`Your balance is not enough ! Balance: ${this.#amount}$`)
        }
    }

    depositMoney(amount) {
        this.#amount += amount;
        console.log(`Your Balance is charged. Current Balance: ${this.#amount}$`)
    }

    detailInfo() {
        console.log(`Hello Mr.${this.name}. Your balance: ${this.#amount}$.`)
        console.log(`Your account number: ${this.#account_id}`)
    }

    static tellMeAboutClass() {
        console.log('This class serves to create accounts.')
    }

    static showMeTime() {
        console.log(`Current Time: ${moment().format('YYYY MM DD HH:mm:ss')}`)
    }
}

module.exports = Account;