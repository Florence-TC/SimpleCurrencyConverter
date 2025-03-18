let animal = {
    name: "cat",
    sound: "meow",
    animalSay() {
        return "A " + this.name + " says " + this.sound;
    }
};

const products = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49
};

entriesList = Object.entries(products);
console.log(entriesList);
entriesList.forEach(([product, price]) => {
    console.log(`${product}: $${price}`);
})

function getProductPrices(products) {
    return Object.entries(products).forEach(([product, price]) => {
        return `${product}: $${price}`;
    })
}
const prices = getProductPrices(products);
console.log(prices);
