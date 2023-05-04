// let moment = require('moment');

// setInterval(() => {
//     const time = moment().format();
//     console.log(time);
// }, 3000);

// const inquirer = require('inquirer');
// inquirer
//     .prompt([{type:'input', name:'number', message:'enter number: '}])
//     .then(answer => console.log('My number: ', answer.number))
//     .catch(err => console.log(err));

// const validator = require('validator');
// const a = validator.isEmail('sarvar@gmail.com');
// const b = validator.isInt('100.5');
// const c = validator.isIP('2001:2d8:e241:3398:c5a3:d55f:d506:5240')
// console.log(c)

const {v4: uuidv4} = require('uuid');
const random = uuidv4();
console.log(random);

const chalk = require('chalk');
const log = console.log;
log(chalk.blue('my random uuid: ') + random + chalk.red(' !'));
