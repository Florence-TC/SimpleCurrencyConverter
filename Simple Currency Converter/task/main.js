// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here

console.log(`Welcome to Currency Converter!`);

let currencies = [`1 USD`, `113.5 JPY`, `0.89 EUR`, `74.36 RUB`, `0.75 GBP`];
for (let currency of currencies) {
    console.log(`1 USD equals ${currency}`);
}

const currencyRates = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

function convertCurrencies(fromCurrency, toCurrency, amount) {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(amount / currencyRates[fromCurrency] * currencyRates[toCurrency]).toFixed(4)} ${toCurrency}`);
}

let fromCurrency, toCurrency, amount, userChoice;

do {
    userChoice = Number(input(`What do you want to do?\n1-Convert currencies 2-Exit program\n`));
    if (userChoice !== 1 && userChoice !== 2) {
        console.log(`Unknown input`);
    } else if (userChoice === 1) {
        do {
            console.log(`What do you want to convert?`);
            fromCurrency = input(`From: `).toUpperCase();
            if (!Object.keys(currencyRates).includes(fromCurrency)) {
                console.log(`Unknown currency`);
            } else {
                do {
                    toCurrency = input(`To: `).toUpperCase();
                    if (!Object.keys(currencyRates).includes(toCurrency)) {
                        console.log(`Unknown currency`);
                    } else {
                        do {
                            amount = Number(input(`Amount: `));
                            if (isNaN(amount)) {
                                console.log(`The amount has to be a number`);
                            } else if (amount < 1) {
                                console.log(`The amount cannot be less than 1`);
                            } else {
                                convertCurrencies(fromCurrency, toCurrency, amount);
                            }
                        } while (isNaN(amount) || amount < 1)
                    }
                } while (!Object.keys(currencyRates).includes(toCurrency));
            }
        } while (!Object.keys(currencyRates).includes(fromCurrency))
    }
} while (userChoice !== 2);
console.log(`Have a nice day!`);
