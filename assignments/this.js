/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding applies when "this" is in the global scope.
* 2. Implicit Binding refers to when "this" is bound to an object followed by
     a "." and a function.
* 3. When an object has been created and returned by a constructor function, "this" applies to a specific instance of the object.
* 4. Explicit Binding refers to when "this" is used along with the call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

let myCat = {
    name: 'Sasha',
    color: 'grey',
    nickname: function() {
        console.log(this.color);
    }
}
myCat.nickname();

// Principle 3

function Hero(battlecry) {
    this.intro = 'I am ';
    this.battlecry = battlecry;
    this.yell = function() {
      console.log(this.intro + this.battlecry);
    };
  }
  
  const batman = new Hero('Batman');
  const superman = new Hero ('Superman');
  
  batman.yell();
  superman.yell();

// Principle 4

function SuperHero(greeting) {
  this.intro = 'Call me ';
  this.greeting = greeting;
  this.speak = function() {
    console.log(this.intro + this.greeting);
  };
}

const wonderwoman = new SuperHero ('Wonderwoman');
const shera = new SuperHero('Shera');

wonderwoman.speak.call(shera);
shera.speak.call(wonderwoman);