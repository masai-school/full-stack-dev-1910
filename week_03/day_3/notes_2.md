### Week 3 - Day 3

#### Session 2

### `Strings` built-in `methods`:

```javascript
name = 'Masai'
name.length // returns length
name.toUpperCase() // MASAI
name.slice(3,5) // ai
name.indexOf('i') // 4
```

Extracting strings:

```javascript
name.slice(3,5) // ai
name.substr(2,3) // sai
```

[https://codepen.io/albseb511/pen/JjjLaxv](https://codepen.io/albseb511/pen/JjjLaxv)

Other methods available for strings

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

[https://www.w3schools.com/js/js_string_methods.asp](https://www.w3schools.com/js/js_string_methods.asp)

### `Arrays`:

An array is a special variable, which can hold more than one value at a time.

Arrays in simple language means a list of information. This is very useful when working on large datasets.

Arrays in JavaScript are objects. 

Syntax:

```javascript
var array_name = [item1, item2, ...];    
```

```javascript
var fruits = [ 'banana', 'mango', 'jackfruit'] 
// or

var fruits = [
    'banana',
    'mango',
    'jackfruit'
]

//Empty array

var arr = []
```

Using string.split() to make arrays:

```javascript
var sentence = 'I am from Masai School'
var words = sentence.split(' ')
console.log('using split method in strings, we can get arrays',words)
```


`Accessing` information in an Array:

```javascript
arr = [ 100, 200, 300]
// 1st position 
arr[0] // 100
// 2nd position 
arr[1] // 200
// 3rd position 
arr[2] // 300
arr[ arr.length - 1 ] // last position
// arr.length will give you size of the array
```

Array elements can store any values

- It can contain numbers, strings, boolean, arrays and other objects as well


Array `methods`:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Lemon"); // adds 'Lemon' into the last index

fruits[fruits.length] = "Guava";

output = fruits.join('*')  // Banana*Orange*Apple*Mango*Guava

fruits.pop() // pops the last element from the array

fruits.shift();   // removes the first index from the array

fruits.unshift('Pineapple') // adds Pineaplpe to the first index
```


[https://www.w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[https://www.w3schools.com/js/js_array_methods.asp](https://www.w3schools.com/js/js_array_methods.asp)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Looping through an array:

```javascript

var fruits = ["Banana", "Orange", "Apple", "Mango"];

for(i=0; i<fruits.length; i++){
    console.log(fruits[i])
}


// nesting of for loops

for( i=3; i<fruits.length; i++){
  for(j=0; j<fruits[i].length; j++){
    console.log('nested for loop',fruits[i][j])
  }
}

```
Codepen Example:

[https://codepen.io/albseb511/pen/bGGvmbE](https://codepen.io/albseb511/pen/bGGvmbE)