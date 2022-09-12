var HoneyMakerBee = function() {
  // calling previous Class operator allows our new subclass to inherit its properties
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

// setup prototype relationship between the Subclass instantiation and original Class
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// setup Subclass relationship to its Constructor prototype object
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot ++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot --;
}