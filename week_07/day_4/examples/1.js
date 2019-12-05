let person = {};
person.name = 'Jay';
person.energy = 10;

person.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
}

person.sleep = function (time) {
  console.log(`${this.name} is sleeping.`);
  this.energy += time;
}

person.code = function (time) {
  console.log(`${this.name} is coding.`);
  this.energy -= time;
}

person.eat(10);
person.sleep(10);
person.code(10);
console.log(person);