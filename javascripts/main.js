var Order = function() {
  this.pizza = null;
  this.beverage = null;
}

//root object in a prototype chain
var Pizza = function() {
  this.toppings = null;
  this.crustThickness  = 1;
};

Pizza.prototype.setCrustThickness = function(thickness){
  this.crustThickness = this.crustThickness * thickness
}

Pizza.prototype.setToppings = function(topping) {
  this.toppings = this.toppings || [];
  this.toppings.push(...topping);
}

var DeepDish = function(toppingsArr) {
  this.description = "Chewy and greasy, but so filling!";
  this.setToppings.call(this, toppingsArr);
}
DeepDish.prototype = new Pizza();

var TraditionalHandTossed = function() {
  this.description = "Boring, but won't offend picky eaters."
}
TraditionalHandTossed.prototype = new Pizza();

var ThinCrust = function() {
  this.description = "Thin and great for fat people who think this a better option";
}
ThinCrust.prototype = new Pizza ();

// console.log("myPizza's crust thickness", myPizza.crustThickness)

//root function in a protoype chain
var Topping = function() {
  this.price = 1.00;
}

var Pepperoni = function() {
  this.isSpicy = false;
}
Pepperoni.prototype = new Topping();
Pepperoni.prototype.makeSpicy = function() {
  this.isSpicy = true;
}

var BananaPepper = function() {
  this.name = "Banana Pepper";
};
BananaPepper.prototype = new Topping();

//root function

var Beverage = function() {
  this.hasIce = true;
};

var Soda = function() {

};
Soda.prototype = new Beverage();

//a new order

var order01 = new Order();
var spicyPepp = new Pepperoni();
spicyPepp.makeSpicy();
// console.log("our Pepp", spicyPepp);
var bananaPepp = new BananaPepper();

var order01Toppings = [bananaPepp, spicyPepp];
var order01Pizza = new DeepDish(order01Toppings);
order01Pizza.setCrustThickness(3);
order01.pizza = order01Pizza;



var order01Soda = new Soda();
order01.beverage = order01Soda;
console.log(order01);
