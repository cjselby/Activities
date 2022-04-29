// #1
const pizzaToppings = ["Pepperoni", "Mushroom", "Onion", "Pineapple"];

// #2
function greetCustomer(toppings) {
    let greeting = "Welcome to The Pizza House! Our toppings are";
    for (let topping of toppings) {
        greeting += ` ${topping}`
    };
    console.log(greeting);
};
greetCustomer(pizzaToppings);

// #3
function getPizzaOrder(size, crust, ...toppings) {
    let order = `One ${size} ${crust} pizza with `;
    for (let topping of toppings) {
        order += `${topping}`; 
    }
    console.log(order + "coming up!");
    return [size, crust, toppings];
};
getPizzaOrder("large", "thick", "pepperoni", "onion", "mushroom");

// #4
function preparePizza([size, crust,])

return {}