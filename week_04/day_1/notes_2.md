```
A large program is a costly program, and not just because of the time it takes to build. Size almost always involves complexity, and complexity confuses programmers. Confused programmers, in turn, introduce mistakes (bugs) into programs. A large program then provides a lot of space for these bugs to hide, making them hard to find.
```

### Week 4 Day 1

## Callback functions

A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. [2]

Lets take a look at an example to see what this means in more detail.

**Example:**

```javascript
function sum(x, y, callBack){
    var total = x + y
    callBack(total)
}

var print = function(toPrint){
    console.log(toPrint)
}

sum(4, 5, print)
```

**Output:**
```javascript
9
```

As you can see we passed the print function as an argument to the sum function. First the sum function calculated the sum of `x` and `y` and then the print function was called after the sum was calculated to print the sum to the `console`.

**Codepen Link**
[https://codepen.io/albseb511/pen/MWWBpVN](https://codepen.io/albseb511/pen/MWWBpVN)

### SetTimeout, SetInterval, clearTimeout, clearInterval

```javascript
setTimeout( function(){
    ...
}, 1000)
// the second argument is the time in ms after which,
// the function in the first argument gets executed 

setInterval( function(){
    ...
}, 1000)
// the second argument is the time period in ms which,
// the function in the first argument gets executed repeatedly

timeoutVar =setInterval( function(){
    ...
}, 1000)

intVar =setInterval( function(){
    ...
}, 1000)

clearTimeout(timeoutVar)
// Clear the timout. or stops the setTimeout from executing
clearInterval(intVar)
// Clear the interval. or stops the setInterval from executing
```


### Higher Order Functions

`Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.`

Here are some commonly used inbuilt methods for arrays.
- array.forEach()
- array.map()


each of these takes an argument.

`forEach`:

The forEach() method executes a provided function once for each array element.

Syntax
```javascript
array.forEach(function(element){
    console.log(element)
})
array.forEach(function(currentElement, currentIndex, array){...})
// It takes a function as an argument
// currentElement
//     The current element being processed in the array.
// currentIndex || optional
//     The index of the current element being processed in the array.
// array || optional
// The original array forEach() was called upon.
```

```javascript
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']

names.forEach(function(element){
    console.log(element)
})
// Nrupul
// Albert
// Sid
// Aman
```


`map`:

The map() method creates a new array with the results of calling a provided function on every element in the calling array.

Syntax
```javascript
array.map(function(element){
    console.log(element)
})
array.map(function(currentElement, currentIndex, array){...})
// It takes a function as an argument
// currentElement
//     The current element being processed in the array.
// currentIndex || optional
//     The index of the current element being processed in the array.
// array || optional
// The original array map() was called upon.

```

Arguments:
```javascript
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']

newNames = names.map(function(element, index){
    return [element ,index]
})
console.log(newNames)
// [ ["Nrupul", 0], ["Albert", 1], ["Sid", 2], ["Aman", 3] ]
```

```
The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice.
```

[https://codepen.io/albseb511/pen/rNNrmBL](https://codepen.io/albseb511/pen/rNNrmBL)