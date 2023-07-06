function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}
console.log("First Pizza!!!");
var pizza1=pizzaOven("deep dish", "traditional", ["mozarella"],["pepperoni","sausage"]);
console.log(pizza1);
console.log("--------------------------------------------------------------");
console.log("Second Pizza!!!");
var pizza2=pizzaOven("hand tossed", "marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(pizza2);
console.log("--------------------------------------------------------------");
console.log("3red and 4th Pizzas!!!");
var pizza3=pizzaOven("crunchy", "Pesto",["Gouda","Cheddar"],["pepperoni","olives","onions"]);
var pizza4=pizzaOven("hand tossed", "Béchamel",["Swiss cheese","fontina"],["mushrooms","Bell pepper","Sausage"]);
console.log(pizza3);
console.log(pizza4);
console.log("--------------------------------------------------------------");
console.log("Bonus Challenge!!!");
CrustType=[
    "deep dish",
    "hand tossed",
    "crunchy",
    "Stuffed",
    "Thick"
]
SauceType=[
    "traditional",
    "marinara",
    "Pesto",
    "Béchamel",
    "Fettuccine Alfredo",
    "BBQ"
]
Cheeses=[
    "mozzarella",
    "feta",
    "Gouda",
    "Cheddar",
    "Swiss cheese",
    "fontina",
    "Jack",
    "Muenster",
    "provole"
]
Toppings=[
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "Bell pepper",
    "Ham",
    "chicken"
]

function randomPizza(CrustType, SauceType, Cheeses, Toppings){
    var Pizza={};
    Pizza.crustType=CrustType[Math.floor(Math.random()*CrustType.length)];
    Pizza.sauceType =SauceType[Math.floor(Math.random()*SauceType.length)];
    var numberCheeses=Math.floor(Math.random()*Cheeses.length);
    var numberToppings=Math.floor(Math.random()*Toppings.length);
    Pizza.cheeses=[];
    Pizza.toppings=[];
    for (var i=0;i<numberCheeses;i++){
        Pizza.cheeses.push(Cheeses[Math.floor(Math.random()*Cheeses.length)]);
    }
    for (var i=0;i<numberToppings;i++){
        Pizza.toppings.push(Toppings[Math.floor(Math.random()*Toppings.length)]);
    }
    return Pizza;
}
console.log(randomPizza(CrustType, SauceType, Cheeses, Toppings))




