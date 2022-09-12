var Bee = function() {
  // calling previous Class operator allows our new subclass to inherit its properties
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// setup prototype relationship between the Subclass instantiation and original Class
Bee.prototype = Object.create(Grub.prototype);
// setup Subclass relationship to its Constructor prototype object
Bee.prototype.constructor = Bee;