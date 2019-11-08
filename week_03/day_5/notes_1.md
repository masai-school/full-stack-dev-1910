### Week 3 - Day 5


## Introduction to Objects and revisiting types

### More Types!

We have already discussed a few types of **primitive** data in JavaScript like `string` `number` `boolean`.

Lets discuss a few more:  

`null` : **null** is a special **primitive** data type that signifies that a there is 'no value' or that there is a lack of value. 

It is important to note that JavaScript will never assign a `null` value to anything, only you the programmer can do that. This is because `null` is used to represent the **intentional** absence of any object value. 

`null` is often useful when you want to return nothing from a function. This is especially useful for handling errors!

**Example:**

```javascript
var x = null

console.log(x)

if(x == null){
    console.log('x is null!')
}
else{
    console.log('x is not null!')
}

```

`undefined`: **undefined** is a another special primitive type that signifies that a variable has not been assigned any value. This is a **default** value that JavaScript assigns.

This is often useful if you want to check if a variable contains a value yet.

**Example:**

```javascript
var num;

console.log(num)
```

`null` and `undefined` are not the same in Javascript. If you want to read more about their difference visit this link [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

[https://codepen.io/albseb511/pen/vYYjVEv](https://codepen.io/albseb511/pen/vYYjVEv)

## Introduction to Objects

We have learnt that Arrays are data containers that hold multiple values, or collections of data. Objects are similar to Arrays. Objects also hold a lot of information, but is generally used to hold a lot of information about one thing. While arrays are used to hold multiple items which are related to each other. 

- For example, arrays can hold information of all the marks.
- Objects can hold a lot of information about a single student.
- Both Objects and Arrays can store all kinds of data inside it
- We use curly braces, `{}` to define Objects.

```javascript
    const newObj = {};
```

We have studied around 5 **[primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)** types in JavaScript. There are two more but we can get to them later. 

Other than the 7 **primitive types** almost everything else in JavaScript is an `object`.

Some examples of objects you might have seen before:

- `Math` Object.
- `String` wrapper object. 
- `Number` wrapper object. 
- Every `function` in JavaScript is also a `Function` object!
- `Array` is also an object.

Nearly everything in JavaScript is an `object` or acts like an object in the case of wrapper objects like `String` or `Number`.

`objects` are a collection of properties. These properties can be modified by functions/methods that these `objects` provide you with. 

For example you have already seen the `string.length` property and the `array.length` property which gives you the length of arrays and objects. 

### Key:Value pairs

One of the biggest difference between an Array and Object is that Objects store information as `key value pairs`. What this means is that for every value, there is a meaningful key name associated with it.
We can use many key:value pairs, and are seperated by a comma. 

- Keys are unique in an object. There will not be multiple instances of keys with the same name. 
- Multiple keys can have same values. 
- Values can be any data type in Javascript. string, number, boolean, array, function or even another object.

A person may several properties like:

- Name
- Age 
- Height
- Gender
- Hobbies

We can define an object called `person` with several properties like so.

**Code**:
```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Male",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}
```
Now you have a person with several properties. Notice how the properties are different JavaScript types. 

Example:
```javascript
    const user = {
        username: 'masai',
        password: 'admin123',
        admin: true,
        loginCount: 20,
    };
```

Example:
```javascript
// 
    const video = {
        videoUrl: 'https://youtu.be/x45wedsf',
        title: 'Masai School',
        kind:'youtube#video'
        id:'x45wedsf',
        publishedAt:string,
        duration:string,
        viewCount:number,
        likeCount:number,
        channelDetails:{
            channelName:'Masai',
            channelId:'1rfwef3',
        }
        tags: [ tag1, tag2, tag3 ],
        licensedContent: true
    };
```

### Accessing Object properties

We can access the values created by calling the object name and the key. 

We can access by the following ways:

- dot notation - `objName.propertyName`
- bracket notation - `objName["length"]`

```javascript
console.log(person.name)

console.log(person.age)

console.log(person.hobbies[1])
```

**Output:**

```
Sidharth
100
Weight Lifting
```

Notice the syntax of the `object`. Each object is made up of multiple members.

Each member has a **key** or **name** and a value. We calls these key-value pairs in programming. 

Example:
```javascript
    var user = {
        username: 'masai',
        password: 'admin123',
        admin: true,
        loginCount: 20,
    };

    user.username; // masai
    user["admin"]; // true
    // we need to use a string inside the bracket notation. 
    // we can do this by using quotes
    value = "admin"
    user[value] // also works
```

### Assigning Values, Adding new keys, modifying existing names/keys

You can add new names/keys to an object with the following syntax. You can also modify values with the same syntax. We can assign them while creating, or use bracket / dot notation to give some values to it.

```javascript
objectname.name = value
```

**Example:**
```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Male",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}

person.name = "newName"
person.age = 23
```

## Methods

In objects, values can be set to functions. Functions saved on an object are called methods. `.length` etc. are all methods. We can set a key to a name, and the value to a function. 

```javascript
var person = {
    name: 'Masai',
    display: function(){
        console.log("You have called the display function")
    }
}

// try this
    name = 'Masai'
    console.log(name["length"] )
// Check what the output is

```


### Removing Properties

If we want to remove a property we can do it using the `delete` keyword:

```javascript
    var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Male",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}

    delete person.hobbies;
```

instead of delete the general practise is to change the value to `undefined`


## looping through objects with for...in loop

We already know how to loop through arrays. Objects do not contain numerical indexes, so the standard loop will not work for objects. Javascript has a different type of loop in built called `for...in` loop. 

The syntax is as follows:

```javascript
    var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Male",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}

    for (key in person){
        console.log(key)
        console.log(person[key])
    }
    // Output:
    // name
    // Sidharth
    // age
    // 100
    // height
    // 6 Ft 12 In
    // gender
    // male
    // hobbies
    // [ "Coding", "Weight Lifting", "Running", "Eating"]
```


## The 'this' Keyword

Objects have a self referential keyword that may be applied in each object called `this`. When called inside of an object it is referring to that very object. `this` can be used to access other keys in the same object, and is especially useful in methods:

```javascript
    var person = {
        name: 'Siddharth',
        age: 23,
        details: function(){
            console.log( this.name + ' age is ' + this.age);
        },
    };

    person.details(); 
    // Siddharth age is 23
```

## Object methods

Here are some object methods which are quite useful.

The [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method returns an array of a given object's own property names

`Object.keys(objName)` // This returns an array of all the keys in the Object

The [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) method returns an array of a given object key values

`Object.values(objName)` // This returns an array of all the values in the Object

```javascript
var person ={
    name:'Sid',
    age:23
}
console.log(Object.keys(person)) // [ 'name' , 'age' ]
console.log(Object.values(person)) // [ 'Sid' , 23 ]

```

Codepen Example:
[https://codepen.io/albseb511/pen/pooVZYY](https://codepen.io/albseb511/pen/pooVZYY)

- [Object MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- [this MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

- [for...in Loop: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
