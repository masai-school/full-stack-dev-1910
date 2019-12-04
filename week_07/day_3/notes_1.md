# Week 7 - Day 3

![](https://img.shields.io/badge/MASAI-SPARTANS-red?logo=&style=for-the-badge)

![](https://img.shields.io/badge/WEEK6-DAY1-green)

<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" width="100" height="100" /> <img src="https://miro.medium.com/max/1200/1*aeFzjKB-7Y804GicKxk5Rg.jpeg" height="100" />


`Arrow Function`

Arrow functions are a simpler and more compact way of writing functions in JavaScript.
Two factors influenced the introduction of arrow functions: 
the need for shorter functions and the behavior of the this keyword.

### `ES5 Syntax`
```javascript
function (argument) {
    ...
    do something
    ...
}
```

### `ES6 Syntax`
```javascript
(args) => {
    do something
}
```
or...
```
(arg) => {} 
// the parantheses () are sometimes optionsal depending on no of arguments you have
// The curly brackets {} are also sometimes optional 
```

```javascript
double = (x) => {
    return x*2
    }
//or
double = x => x*2
//or
double
//is the same as

function double(x){
    return x*2
}
```
<img src="https://miro.medium.com/max/1200/1*o-wasL_EjWk4g8velrI8bg.jpeg" height="300" />

`Codepen Examples:`

[Arrow Functions](https://codepen.io/albseb511/pen/mdbOmPa?editors=0112)

[MDN example](https://codepen.io/albseb511/pen/wvwovbm?editors=1112)

[this example](https://codepen.io/albseb511/pen/MWgbmpb?editors=0012)

The new arrow functions also ensures that 'this.' is handled better

### Example taken from MDN
[Link to MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Shorter_functions)

```javascript
var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  var a,b,c,d,e,f,g;

  // This statement returns the array: [8, 6, 7, 9]
  a = elements.map(function(element) {
    return element.length;
  });
  
  // The regular function above can be written as the arrow function below
  b = elements.map((element) => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When there is only one parameter, we can remove the surrounding parentheses
  c = elements.map(element => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When the only statement in an arrow function is `return`, we can remove `return` and remove
  // the surrounding curly brackets
  d = elements.map(element => element.length); // [8, 6, 7, 9]
  
  // This destructuring parameter assignment can also be written as seen below. However, note that in
  // this example we are not assigning `length` value to the made up property. Instead, the literal name
  // itself of the variable `length` is used as the property we want to retrieve from the object.
  e = elements.map(({ length }) => length); // [8, 6, 7, 9]

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);

```

Arrow functions do not have their own this property.

```javascript
var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  
  obj.b(); // prints undefined, Window {...} (or the global object)
  obj.c(); // prints 10, Object {...}
```

[https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

## `Spread`

```javascript
function sum(x, y, z) {
  return x + y + z; 
}
// Pass each elem of array as argument
sum(...[1,2,3]) == 6

// x = 1
// y = 2
// z = 3
```
In the example below the var abc and contains 3 values each.
The spread operator basically lays out the entire array into seperate elements.
alpha contains 6 elements.

```javascript
var abc = ['a', 'b', 'c'];
var def = ['d', 'e', 'f'];
var alpha = [ ...abc, ...def ];
console.log(alpha)// alpha == ['a', 'b', 'c', 'd', 'e', 'f'];
```

## `Rest`
The example below shows how the arguments after the first is combined into an array.
```javascript
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6
```

In the example below, the arguments 2, 3 & 4 are taken into an array others.
```javascript
function sum( first, ...others ) {
    for ( var i = 0; i < others.length; i++ )
        first += others[i];
    return first;
}
console.log(sum(1,2,3,4))// sum(1, 2, 3, 4) == 10;
```