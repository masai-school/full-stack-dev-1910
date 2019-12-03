# Week 7 - Day 2

![](https://img.shields.io/badge/MASAI-SPARTANS-red?logo=&style=for-the-badge)

![](https://img.shields.io/badge/WEEK6-DAY1-green)

<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" width="100" height="100" /> <img src="https://miro.medium.com/max/1200/1*aeFzjKB-7Y804GicKxk5Rg.jpeg" height="100" />


JavaScript Basics notes:

# Introduction to ES6 and Beyond

JavaScript is an ever growing languages and new features are introduced all the time. 

The ES6 or ECMAScript 2015 introduced tons of new useful features. All modern JavaScript frameworks use many features from from ES6 and you will have to write in ES6 to be able to use them. 

Part I

1. let/const
2. Tempelate Literals
3. default values

# 1. `let/const`

To understand var,let and const,

We need to understand the following terms properly:
- variable declerations vs initialisation
- hoisting
- scope (function scope)

### 1. declaration vs initialisation:

initialises a new identifier

```javascript
var name 
// declaration

console.log(name)

name = 'masai'
// this is an initialisation
```   


### Hoisting:

    Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

```javascript
x = 5; // Assign 5 to x

var x
```

### Scope:

    If a variable is declaration is inside a function, then it is said that the variable is defined with function local scope in that function.
    So this variable is accesible in that function, and any of its nested functions.
    Otherwise it has a global scope ie. they are members of the global object.

```javascript
function getName(){
    var name = 'masai'
    return name
}
getName()
console.log(name)
```


`Example of scope`: [Codepen Example](https://codepen.io/albseb511/pen/gOYLobG?editors=0011)

So we have understood declaration vs initialisation, hoisting, function local scope.

- let follows a block scope. var doesnt follow block scope.
- If var is used inside a for loop, it is still accessible outside it.
- let throws a Reference error when accessing the variable outside of a for loop or any block scope (written inside `{ ... }` )
- let also throws an error when you try to access a variable before its declared
- let trows an error when you redeclare a variable
- const is the same as let, except it needs a value to be assigned while declaring, and does not allow reassigning values to a variable. 

Summary

```
var vs. let vs. const

var: 
  function scoped
  undefined when accessing a variable before it's declared

let: 
  block scoped
  ReferenceError when accessing a variable before it's declared
  Syntax errror when redeclaring a variable again

const:
  block scoped
  ReferenceError when accessing a variable before it's declared
  Syntax errror when redeclaring a variable again
  Type errror when reassinging a variable again
```

[Further Reading](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)


# 2. `Template literals`



Template literals are string literals that allow you to embed expressions and values within strings.

Template literals are enclosed by the back-tick (` `) or grave accent
character instead of double or single quotes. 

**Example:**

```javascript

let x = "Hello world!" //This is a regular string literal
let y = `Hello World!` //This is a template literal

```

Template strings allow you to:
- write expressions within it
- multiline strings

**Some Cool features of template literals:**

Makes it really easy to write Multi-line strings:

```javascript
`This is the first line
and this is the second line.`
```
**Output:**

```javascript
'This is the first line\nand this is the second line.'
```
Notice how the `\n` newline character is automatically inserted.

The key feature is expression interpolation or the ability to embed expressions within strings. 

```javascript
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
```
This saves time on writing and managing a lot of `+` operators within strings.

You can also call functions within these expressions.

There are a few more cool features that you can read about on MDN [Template Literals MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 



3. Default values

when writing a function, If the values arent given any values, you need to assign default values for arguments that weren’t passed to the function when it was invoked.

Lets take an example of sum marks
```javascript
function sum (maths, english, science){
    return maths + english + science
}

total = sum(50,80,80)
// 210
```
This code would break if we do not pass any one of the marks
Normally if we had to give default values we would do the following

```javascript
function sum(maths, english, science){
    maths = maths || 0
    english = english || 0
    science = science || 0

    return math + english + science
}

sum(80,80)
// 160
```

with default values in ES6 we can write in a much simpler manner

```javascript

function sum(maths=0, english=0, science=0){
    return maths + english + science
}
```