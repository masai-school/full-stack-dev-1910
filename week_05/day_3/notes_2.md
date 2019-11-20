### Week 5 Day 3

## Session 2

## JSON (JavaScript Object Notation)

JavaScript Object Notation

**So what is JSON?**

According to Mozilla - "JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax." [1]

**Why should we use JSON?**

JSON is one of the most commonly used data formats to transmit data in web applications. Moreover, its not just JavaScript that supports JSON, many commonly used languages on the Web including PHP, Python, C/C++, Java etc., also support JSON. 

Thus, JSON can be used to send data from the front-end to the back-end, and vice-versa. Many popular databases like MongoDB, CouchDB, MySQL, Oracle and PostgreSQL also have extensive support for JSON.

Think of JSON as an almost universal data format on the Internet.

### What Does JSON look like ?

A JSON string's format is very similar to a regular JavaScript Object literal which we have studied before. 

It also consists of `key` - `value` pairs.

It supports the 6 common data types in JavaScript, `String` `Number` `Array` `Boolean` `Null` `Object`.

Lets look at an example of a JSON object below:

```javascript
var emp = 

{
    "Employees" : [
        {
        "userId":"sqwert",
        "jobTitleName":"Developer",
        "firstName":"Sam",
        "lastName":"Pat",
        "preferredFullName":"Samuel Patrick",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"123-4567890",
        "emailAddress":"abc@gmail.com"
        },
        {
        "userId":"amir1337",
        "jobTitleName":"Front-end Developer",
        "firstName":"Amir",
        "lastName":"Khan",
        "preferredFullName":"Amir Khan",
        "employeeCode":"E2",
        "region":"MA",
        "phoneNumber":"098-7654321",
        "emailAddress":"xyz@gmail.com"
        }
    ],
    "count": 2
}

console.log(emp["Employees"][0]["region"])
console.log(emp["Employees"][1]["phoneNumber"])
```

**Output:**
```javascript
CA
098-7654321
```

In the above example, the JSON contains a key called `Employees` which is an array. It contains 2 objects with several fields. 

Any data from the above object can be accessed in the same way as a regular JavaScript object literal as you can see from the example.

However, notice that in the JSON format all the `keys` are surrounded by double quotes!

### Important notes about JSON:

1. JSON is just a data format and does not contain any properties or functions/methods.
2. JSON requires double quotes to be used around strings and property names. **Single quotes are not valid.**
3. Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. 
4. Unlike JavaScript code in which object properties may be unquoted, in JSON, only quoted strings may be used as properties.

### Converting between JSON and JavaScript object literals
You may often want to convert between JSON and JavaScript object literals, especially for sending and receiving data across the Internet.

To convert from a JavaScript Object to a JSON string we can use the `JSON.stringify` method. 

To convert from a JSON string to a JavaScript Object we can use the `JSON.parse` method.

**Example:**

```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}

var json = JSON.stringify(person)

console.log(json)

var regularObject = JSON.parse(json)

console.log(regularObject)
```

**Output:**

```javascript
{"name":"Sidharth","age":100,"height":"6 Ft 12 In","gender":"Female","hobbies":["Coding","Weight Lifting","Running","Eating"]}

{
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]}

```
JSON will become more relevant when we learn about API's and retrieving data from them.

**Codepen Link:**
[https://codepen.io/albseb511/pen/YzzBMgb](https://codepen.io/albseb511/pen/YzzBMgb)


### Citations

[1] Mozilla, 2019, Working with JSON, https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON  


## `localStorage` 
            

`localStorage` property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. `localStorage` is similar to `sessionStorage`, except that while data stored in `localStorage` has no expiration time, data stored in `sessionStorage` gets cleared when the page session ends — that is, when the page is closed.

The keys and the values stored in localStorage are always `strings` (note that, as with objects, integer keys will be automatically converted to strings).


`Syntax`
```javascript

myStorage = window.localStorage;

A Storage object which can be used to access the current origin's local storage space.
```

`Example`
```javascript
// The following snippet accesses the current domain's local Storage object and adds a data item to it using Storage.setItem().
localStorage.setItem('myCat', 'Tom');

// The syntax for reading the localStorage item is as follows:
var cat = localStorage.getItem('myCat');

// The syntax for removing the localStorage item is as follows:
localStorage.removeItem('myCat');

// Clear all items
localStorage.clear();

// use JSON.parse() to convert the string to an object
loadVal = JSON.parse(localStorage.getItem('name'))

// use JSON.stringify() to convert an object to a string.
localStorage.setItem('name',JSON.stringify(users))
```

[https://codepen.io/albseb511/pen/Rwwvmja?](https://codepen.io/albseb511/pen/Rwwvmja?)

![https://i.imgur.com/UuddOPG.png](https://i.imgur.com/UuddOPG.png)

[localStorage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

Also read on [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
