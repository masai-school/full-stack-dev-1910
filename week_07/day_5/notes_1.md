### Week 7 Day 5


### `call apply bind`

With the call() method, you can write a method that can be used on different objects.


```javascript
var person = {
    name:'haren',
    age:25,
    type:'person',
    display:function(){
        console.log(`${thsi.type} is ${this.name}`)
    },
    company:{
        name:'masai',
        type:'organisation',
        display:function(){
            console.log(`${this.type} is ${this.name}`)
        }
    }
}

person.display()
person.company.display()

display(){
    console.log(`${this.type} is ${this.name}`)
}

var person = {
    name:'haren',
    age:25,
    type:'person',
    company:{
        name:'masai',
        type:'organisation'
    }   
}
// invokes the function with context of the object passed in the argument
display.call(person)
diplay.call(person.company)

display.call(person, argument1, argument2)

// invokes the function with context of the object passed in the argument along with array of arguments
display.apply(person, [arg1,arg2])
display.apply(person.company,[arg1,arg2])

// bind returns a new function with context of the object passed in the argument that can be invoked later
d1 = display.bind(person)
d2 = display.bind(person.company)

// d1 will invoke diplay with person in context
d1()
// d2 will invoke display with person.company in context
d2()
```


“call”, "apply", "bind" is a method on every function that allows you to invoke the function specifying in what context the function will be invoked.


### `Promises`

```
A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
```

```javascript
let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
    setTimeout(function(){
        reject("Rejected!")
    },100)
  });

console.log(myFirstPromise)

myFirstPromise
.then(res=>console.log('Yay',res))
.catch(err=>console.log('oops',err))

```

- Imagine going to a restaurant which is full, and you are waiting for a table.
- The reception asks you for your number.
- Since you are busy, you have told them that you can only wait for 30 minutes
- If there is a table they will call you and inform you. 
- If it takes more than 30 minutes, they will call you and tell you that there is no seat
- If there is a table you can take a decision at that time to sit down or go elsewhere

Promise has 3 methods that can be used:
1. .catch()
2. .then()
3. .finally()

It has 3 states
- `pending`
- `fulfilled`
- `rejected`

![promise](https://mdn.mozillademos.org/files/15911/promises.png)

This asynchronous function returns a meaningful value. This is the main advantage of promises—they simplify the use of asynchronous functions. Instead of having to pass around callbacks, promise-based functions look similar to regular ones: they take input as arguments and return their output. The only difference is that the output may not be available yet.

One of the most pressing problems with the callback style of asynchronous programming is that it makes it extremely difficult to make sure failures are properly reported to the callbacks.

Promises make this easier. They can be either resolved (the action finished successfully) or rejected (it failed). Resolve handlers (as registered with then) are called only when the action is successful, and rejections are automatically propagated to the new promise that is returned by then. And when a handler throws an exception, this automatically causes the promise produced by its then call to be rejected. So if any element in a chain of asynchronous actions fails, the outcome of the whole chain is marked as rejected, and no success handlers are called beyond the point where it failed.

[Codepen Example](https://codepen.io/albseb511/pen/yLBEPOO?editors=1011)

[Using Promises MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

[Promise MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Example Promise loading image with XMLHttpRequest](https://github.com/mdn/js-examples/tree/master/promises-test)

[See the above example in action](https://mdn.github.io/js-examples/promises-test/)

### `Fetch`

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.

The fetch specification differs from jQuery.ajax() in two main ways:

    The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.
    By default, fetch won't send or receive any cookies from the server, resulting in unauthenticated requests if the site relies on maintaining a user session (to send cookies, the credentials init option must be set).
    Since Aug 25, 2017. The spec changed the default credentials policy to same-origin. Firefox changed since 61.0b13.

`Syntax`:
```javascript
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

[Codepen Example](https://codepen.io/albseb511/pen/GRKGOmL?editors=1111)

[XHR BAD EXAMPLE](https://codepen.io/albseb511/pen/bGNdRNj?editors=1011)

[XHR A LITTLE BETTER](https://codepen.io/albseb511/pen/RwNPgjM?editors=1011)

[fetch api](https://codepen.io/albseb511/pen/KKwpqRP?editors=1111)


[Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)