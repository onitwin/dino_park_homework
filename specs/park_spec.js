const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    const grimlock= new Dinosaur('Tyrannosaurus','carnivore',100);
    const swoop=new Dinosaur('Pterodactyl','carnivore',60);
    const snarl= new Dinosaur('Stegosaurus','herbivore',50);
    zoo= new Park('Triassic Park',300)
    zoo.addDino(grimlock);
    zoo.addDino(swoop);
    zoo.addDino(snarl);

  })

  it('should have a name', function(){
    assert.strictEqual(zoo.name,'Triassic Park')
  });

  it('should have a ticket price',function(){
    assert.strictEqual(zoo.ticketPrice,300)
  });

  it('should have a collection of dinosaurs',function(){
    // console.log(zoo.collection);
    assert.strictEqual(zoo.collection.length,3)
  });

  it('should be able to add a dinosaur to its collection',function(){
    const sludge= new Dinosaur('Brachiosaur','omnivore',40)
    zoo.addDino(sludge)
    //zoo has 3 dinosuars added as part of 'beforeEach' function
    //this should add a fourth
    assert.strictEqual(zoo.collection.length,4)
  });

  it('should be able to remove a dinosaur from its collection',function(){
    zoo.removeDino()
    assert.strictEqual(zoo.collection.length,2)
  });

  //query one below

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    const actual=zoo.mostPopular().species
    assert.strictEqual(actual,'Tyrannosaurus')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const snarl= new Dinosaur('Stegosaurus','herbivore',50)
    assert.strictEqual(zoo.find('Stegosaurus')[0].species,snarl.species)
  });

  it('should be able to calculate the total number of visitors per day',function(){
    assert.strictEqual(zoo.visitors(),210)
  });

  it('should be able to calculate the total number of visitors per year',function(){
    assert.strictEqual(zoo.yearlyVisitors(),76650)
  });


  it('should be able to calculate total revenue for one year', function(){
    assert.strictEqual(zoo.yearlyIncome(),22995000)
  });

  it('should be able to remove all dinosaurs of a given species',function(){
    const bitey= new Dinosaur('Tyrannosaurus','carnivore',100)
    zoo.addDino(bitey);
    zoo.removeSpecies('Tyrannosaurus');
    assert.strictEqual(zoo.collection.length,2);
  })
  it('should be able to count dinosaur diets',function(){
    assert.strictEqual(zoo.diet().carnivore,2)
  })

});
