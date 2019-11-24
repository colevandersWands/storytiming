class Thing {
  constructor(prop) {
    this.prop = prop;
  }
}

const firstThing = new Thing('first');
console.assert(firstThing.prop === 'first', 
  'firstThing.prop should be "first"');

const secondThing = new Thing('second');
console.assert(secondThing.prop === 'second', 
  'secondThing.prop should be "second"');

console.assert(firstThing.constructor.name === secondThing.constructor.name, 
  'they have the same constructor ...');
  
console.assert(firstThing.constructor.name === 'Thing', 
  '... and the constructor is "Thing"');
