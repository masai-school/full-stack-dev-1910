### Week 4 Day 2

## More Array methods!


`filter`:

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Syntax
```javascript
array.filter(function(element){
    return condition to check
})
var newArray = array.filter(function(currentElement, currentIndex, array){})
// It takes a function as an argument
// currentElement
//     The current element being processed in the array.
// currentIndex || optional
//     The index of the current element being processed in the array.
// array || optional
// The original array forEach() was called upon.
```

A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

Arguments:
```
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']

newNames = names.filter(function(element, index){
    return element.length>4
})
console.log(newNames)
// [ "Nrupul", "Albert" ]
```


`reduce`:

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

Syntax
```javascript
array.reduce(function(accumulator,element){
    return condition for accumulator
})
array.reduce(function(accumulator, currentValue, currentIndex, array){},0)
// It takes a function as an argument
// accumulator
//     The accumulating value which will be accumulated over time to be the final output
// currentValue || optional
//     The current element being processed in the array.
// currentIndex || optional
//     The index of the current Index being processed in the array.
// array || optional
// The original array forEach() was called upon.
// the value 0 after the function, is the initial value of the accumulator.

// What is accumulation?
// the acquisition or gradual gathering of something.
```

Arguments:
```javascript
array = [1, 2, 3, 4, 5]

array.reduce(function(a,c){
    return a + c
})
// 15
```


`sort`:


Arguments:
```javascript
array.sort(function(firstEl,secondEl){

})
// It takes a function as an argument
// firstEl
//     The first element for comparison.
// secondEl
//     The second element for comparison.
```

```javascript
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']
names.sort() // [ 'Albert', 'Aman', 'Nrupul', 'Sid']

var marks = [ 23, 85, 90, 75 ,12 , 58]
marks.sort(function(a,b){
    return a - b
    })
// [ 12, 23, 58, 75, 85, 90 ]

// Please note if you do marks.sort() on numbers you will get a wrong output.
var marks = [ 10000, 1232, 19, 75 ,12 , 58]
marks.sort()
// [ 10000, 12, 1232, 19, 58, 75 ]
```


### Chaining

Multiple commands can be chained together by using `. operator`
```javascript

value.[operation1].[operation2].[opeartion3]

example = '5 10 100 2 10'
example = example.split(' ').map(function(val){
                return parseInt(val)            
            })
console.log(example)
// [ 5, 10, 100, 2, 10]
// All the values have been converted from string to integers in this case

```


