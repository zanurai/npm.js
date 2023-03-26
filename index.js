import chalk from 'chalk'//es6
import validator from 'validator';



console.log(chalk.blue("hello world"))

const name = "zanu";

console.log(chalk.green("hello %s"), name)

const age = 25;
const home = "solukhumbu"
console.log(chalk.red(`hi ${name} ${age} ${home}`))

console.log(validator);




