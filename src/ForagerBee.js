var ForagerBee = function() {
  // calling previous Class operator allows our new subclass to inherit its properties
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// setup prototype relationship between the Subclass instantiation and original Class
ForagerBee.prototype = Object.create(Bee.prototype);
// setup Subclass relationship to its Constructor prototype object
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}