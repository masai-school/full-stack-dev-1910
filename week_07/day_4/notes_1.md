### Week 7 Day 4 

### JavaScript prototype

Let us try to understand JavaScripts prototype property.

- Lets start simple. 
- If we had to create a person object
- Lets say we keep name and energy of that person

```javascript
let person = {}
person.name = 'Jay'
person.energy = 10

person.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

person.sleep = function (time) {
  console.log(`${this.name} is sleeping.`)
  this.energy += time
}

person.code = function (time) {
  console.log(`${this.name} is coding.`)
  this.energy -= time
}
```

If we need multiple instances, we could wrap this in a function and use as a construtor

```javascript
function Person(name,energy){
  let person = {}
  person.name = name
  person.energy = energy
  
 person.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }

  person.sleep = function (time) {
    console.log(`${this.name} is sleeping.`)
    this.energy += time
  }

  person.code = function (time) {
    console.log(`${this.name} is coding.`)
    this.energy -= time
  } 
  return person
}

const sai = Person('Sai',15)
const jay = Person('Jay',12)

```
By using a constructor, now whenever we want to create a new instance or person, we can invoke the Person function, and passing the necessary arguments into it. 

Now this is simple and works.

But if you think about it, the three methods that are in the Person object are being created again with every instance. 

In this case, all the methods are common/general. Is there a way to save memory?

Instead of creating new methods on the go, we can group them together for the Person object.

```javascript
const personMethods = {
 eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(time) {
    console.log(`${this.name} is sleeping.`)
    this.energy += time
  },
  code(time) {
    console.log(`${this.name} is coding.`)
    this.energy -= time
  }  
}

function Person(name,energy){
  let person = {}
  person.name = name
  person.energy = energy
  person.eat = personMethods.eat
  person.sleep = personMethods.sleep
  person.code = personMethods.code

  return person
}

const sai = Person('Sai',15)
const jay = Person('Jay',12) 
```

Now we have made it better by using a shared function.

But we can make it better by using Object.create. 
it allows you to create an objects, using an existing object, and allows you to look into that object if there is a property which isnt available in child object.

[Object.create MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)


example
```javascript
const parent = {
  name:'parent',
  age:40,
  country:'India'
}

const child = Object.create(parent)
child.name = 'child'
child.age = 10
// Its quite similar to how you use new Person()
```

```javascript
const personMethods = {
 eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(time) {
    console.log(`${this.name} is sleeping.`)
    this.energy += time
  },
  code(time) {
    console.log(`${this.name} is coding.`)
    this.energy -= time
  }  
}

function Person(name,energy){
  let person = Object.create(personMethods)
  person.name = name
  person.energy = energy

  return person
}

const sai = Person('Sai',15)
const jay = Person('Jay',12) 
```

Now instead of storing this information inside a seperate object. 

Javascript has a feature, and its called `prototype`. Every function in JavaScript has a prototype property that references an object. 

This is called a `prototypal inheritance`

```javascript
function Person(name,energy){
  let person = Object.create(Person.prototype)
  person.name = name
  person.energy = energy

  return person
}

Person.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Person.prototype.sleep = function (time) {
  console.log(`${this.name} is sleeping.`)
  this.energy += time
}

Person.prototype.code = function (time) {
  console.log(`${this.name} is coding.`)
  this.energy -= time
}

const sai = Person('Sai',15)
const jay = Person('Jay',12) 
```

All JavaScript objects inherit properties and methods from a prototype:
`prototype` is a property that every function in JavaScript has. it allows us to share the methods across all instances of a function.

Now you have made a blueprint of your own object.

Note:

`Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.`

Thats a lot!

With ES6, JavaScript introduced something called `class`.

Classes allow you to create a blueprint for an object.

# 5. `Class`

Classes are syntactical sugar over the existing object oriented model in JavaScript. This means that it does not introduced any new features but improves upon old features. 

They are similar to function constructors that you have already studied but give you much more functionality with less code. 



**Example:**

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let box = new Rectangle(12, 13);
```


The `constructor` is a special function for initializing objects created with `class`. They work similar to function constructors.


They also support simple instance methods/functions with short declaration syntax. 

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area(){
    return this.height * this.width;
  }

}

let box = new Rectangle(12, 13);
box.area();
```

```javascript
class Person {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep(time) {
    console.log(`${this.name} is sleeping.`)
    this.energy += time
  }
  code(time) {
    console.log(`${this.name} is playing.`)
    this.energy -= time
  }
}

const sai = new Person('Sai', 15)
const jay = new Person('Jay', 12)
```


## 5.A. `Inheritance`

Classes also support inheritance which means they can take properties and functions from other classes. 

For example lets say we have `two` classes `Car` and `Sedan`. 

`Car:`

```javascript
class Car{
  constructor(horsePower){
    this.horsePower = horsePower;
    this.fuel = 100;
  }

  consumeFuel(amount){
    this.fuel -= amount;
  }
}
let myCar = new Car(102);
```

`Sedan`
```javascript
class Sedan{
  constructor(name){
    this.name = name;
  }
  printName(){
    console.log(this.name);
  }
}
var mySedan = new Sedan('Civic');
```

Right now they are independent. Lets say we want `Sedan` to inherit or get the properties and functions of the `Car` object.

We can use the `extends` keyword to make `Sedan` a child of the `Car` class. This will allow `Sedan` to get properties and methods/functions of the parent class `Car`.

```javascript
class Car{
  constructor(horsePower, name){
    this.horsePower = horsePower;
    this.fuel = 100;
    this.name = name;
  }

  consumeFuel(amount){
    this.fuel -= amount;
  }
}

class Sedan extends Car{
  printName(){
    console.log(this.name)
  }
}

let mySedan = new Sedan(150, 'Civic');
mySedan.consumeFuel(10);
console.log(mySedan.fuel);
mySedan.printName();
```
MDN documentation [Classes MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


## 5.B. `super`

Now what if we need to access the parent class's properties or functions in the child class? 

Also what if we want to declare a constructor for our child class?

The `super` keyword is used to access and call functions on an object's parent.

Lets update our above example with the super keyword. 
```javascript
class Car{
  constructor(horsePower, name){
    this.horsePower = horsePower;
    this.fuel = 100;
    this.name = name;
  }

  consumeFuel(amount){
    this.fuel -= amount;
  }
}

class Sedan extends Car{
  constructor(horsePower, name, numSeats){
    super(horsePower, name);
    this.numSeats = numSeats;
  }
  printName(){
    console.log(this.name);
  }

  updateHorsePower(input){
    super.horsePower = input;
  }
}

let mySedan = new Sedan(150, 'Civic', 4);

mySedan.updateHorsePower(300);

mySedan
```

It is important to note that when used in a constructor, the super keyword appears alone and must be used before the this keyword is used. 


Lets look at the first example we tried

```javascript

class Person {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep(time) {
      console.log(`${this.name} is sleeping.`)
      this.energy += time
    }
}
  
class Coder extends Person{
    constructor(name,energy){
        super(name,energy)
    }
    code(time){
        console.log(`${this.name} is coding`)
        this.energy -= time
    }
}


  const sai = new Coder('Sai', 15)
  const jay = new Person('Jay', 12)
  
  sai.code(10)
  jay.sleep(10)

```

[Codepen Example](https://codepen.io/albseb511/pen/MWgQPbe?editors=0011)
MDN documentation [super MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
