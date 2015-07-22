function Animal() {
  this.isAlive = true;
  this.type = type;
  this.health = 1;
};

Animal.prototype.beCute = function() {
  this.isCute = true;
};

Animal.prototype.updateHealthStats = function() {
  this.health = Math.random();
//   var self = this;

//   setTimeout(funciton() {
//     self.health = Math.random();
// }, 1000)
}

module.exports = Animal;
