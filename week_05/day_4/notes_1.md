
## Constructors in JavaScript

We made one person object with several properties but if we wanted to make another person we need to write the same bit of code over and over. 

JavaScript actually makes it very easy to create an object `constructor`.   

Think of a `constructor` as a skeleton of our person. It has no properties, but we can use it to create any number of new `person` objects!

**Important note!:** According to mozilla "A constructor function name usually starts with a capital letter — this convention is used to make constructor functions easier to recognize in code."

So always name you constructor functions starting with a capital letter!

**Example:**
```javascript
function Person(name, age, height, gender, hobbies){
    this.name = name;
    this.age  = age 
    this.height = height 
    this.gender = gender
    this.hobbies = [hobbies]
}

var sid = new Person("Sidharth", 90, "7 ft 9 in", "Male", ["swimming", "boxing"]);
var sam = new Person("Sam", 67, "2 ft 3 in", "Male", ["dancing", "running"]);

console.log(sid)
console.log(sam)

```

***Output:**

```javascript
Person {
  name: 'Sidharth',
  age: 90,
  height: '7 ft 9 in',
  gender: 'Male',
  hobbies: [ [ 'swimming', 'boxing' ] ] }

Person {
  name: 'Sam',
  age: 67,
  height: '2 ft 3 in',
  gender: 'Male',
  hobbies: [ [ 'dancing', 'running' ] ] }

```
As you can see `sid` and `sam` are both `Person` objects but they have different attributes!

You can make new objects from `constructors` using the `new` keyword.

## CodePen:
[https://codepen.io/steviekong/pen/ZdaBxN](https://codepen.io/steviekong/pen/ZdaBxN)




