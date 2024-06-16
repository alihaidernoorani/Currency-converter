import inquirer from "inquirer";

let currency: any = {
    USD: 1,
    EUR: 0.92,
    INR: 83,
    PKR: 280
};

let convertCurrency = await inquirer.prompt([
    {
        name: "from",
        message: "Choose your current currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Choose your desired currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
])

let fromCurrency = currency[convertCurrency.from];
let toCurrency = currency[convertCurrency.to];
let convertedAmount = convertCurrency.amount * (toCurrency / fromCurrency);

console.log(convertedAmount.toFixed(2));