// var assert = require("assert")
// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       // assert.equal(-1, [1,2,3].indexOf(5);
//       [1,2,3].indexOf(5).should().equal(-1);
//       // assert.equal(-1, [1,2,3].indexOf(0));
//       [1,2,3].indexOf(0).should().equal(-1);
//     });
//   });
// });

var should = require("chai").should();
var Animal = require('./lib/Animal');

describe('Mocha + Chai', function() {
  it('truthyness', function() {
    true.should.equal(true);
  });
});

describe('CLI', function() {
  it('should thank me for downloading', function() {
    //execute node app.js
    //check output 'Thanks for downloading my app!!!!'
  })
})
describe('Animal', function() {
  describe('constructor', function() {
    it('should return an Animal object', function() {
      var animal = new Animal();

      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    });
    it('should be alive', function() {
      var animal = new Animal();

      animal.isAlive === true;
      animal.isAlive.should.be.true;
    });
  });

  describe('#updateHealthStats', function() {
    it('should change the health', function() {
      var animal = new Animal();
      animal.updateHealthStats();
      animal.health
    })
  })

  describe('#beCute()', function() {
    it('should be a prototype method', function() {
      var animal = new Animal();
      animal.should.respondTo('beCute');
      animal.should.not.have.ownProperty('beCute');
    });

    it('should make the animal cute', function() {
      var animal = new Animal();
      should.not.exist(animal.isCute);
      animal.beCute();
      animal.isCute.should.be.true;
    });
    it('should accept a type', function() {
      var cat = new Animal('cat');
      var dog = new Animal('dog');

      cat.type.should.equal('cat');
      dog.type.should.equal('dog');

    });
  });
});

// describe('Array', function() {
//   describe('#filter()', function() {
//     it('should return an array of items that return truthy in the inner fn', function() {
//       var array = [1,2,3,4,5];
//     })
//   })
// })

// describe('Array', function() {
//   describe('#map()', function() {
//     it('should return a new array with the return value of the inner fn', function() {
//       var array = [1,2,3,4,5];
//       var output = array.map(funciton(item) {
//         return item * item;
//       });

//       output.should.eql([1,4,9,16,25]);
//     });

//     it('should keep same length', function() {
//       var array = [1,2,3,4,5];

//       var length = array.map(function(item) {
//         return false;
//       }).length;

//       length.should.equal(array.length);
//     });

//     it('should not mutate original array', function() {
//       var array = [1,2,3,4,5];

//       array.map(function() {
//         return false;
//       });

//       array.should.eql([1,2,3,4,5]);
//     })
//   });
// });