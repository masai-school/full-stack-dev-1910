# Week 6 - Day 1


## `Fetching Data From a Server`

All this time we have been making web applications but they don't actually connect to the web!

Whats the point in making an application if it can't send and retrieve data from the Internet?

In short, nothing! Web-applications (in my opinion) are only useful if they can send, retrieve, process and delete data using the Internet.

In this next part we are going to learn about the basics of the web and how to retrieve data from a server/API.

## `Some groundwork about the Web`

The web itself is a very complex network of billions of computers (possibly trillions), but thanks to advancements in software and web technology, it is an easy process for front-end developers to send and retrieve data from servers. 

### `Client Server Model`

**Real Life Explanation:**

Imagine you are at a restaurant and you want to get some food.

You look at the menu and **request** the waiter to **GET** you some dosa.

The waiter looks at your **request** and **responds** by giving you your dosa. 

**Technical Explanation:**

The client server model works in much the same way. 

You the client sends the server a HTTP **request** with the **GET** method and the server responds with a **HTTP** **response** with the data you requested. 

**GET** is one of many HTTP request methods you would use to **request** data from a web server.

This might be a lot to take in but I think it will get simpler once you are able to use it in JavaScript. 

## `The XMLHttpRequest`

The `XMLHttpRequest` object used to send and receive HTTP requests.

Lets take a look at a simple example where we send a simple `GET` request and retrieve some JSON data. 

[https://reqres.in/](https://reqres.in/) is a free api that lets you send and receive fake data to test your front end webpages.


Lets try and retrieve the weather information for Bangalore. 

```javascript
var xhr = new XMLHttpRequest(); 

  // This configures the object to perform a GET request to the given url
  // Notice how we pass page=2
  xhr.open('GET', 'https://reqres.in/api/users?page=2');
  // This will send the GET request to the server.
  xhr.send()
  // This function will be called after the information is retrieved
  xhr.onload = function (){
    // The HTTP 200 code is returned when your request is successful so we check for that
    if(xhr.status == 200){
        console.log(xhr.response) // Print the response from the server after a successful request
    }
    else{
        console.log("Error Code is:" + xhr.status)
    }
  }
```

**Output:**

```javascript
"{'page':2,'per_page':6,'total':12,'total_pages':2,'data':[{'id':7,'email':'michael.lawson@reqres.in','first_name':'Michael','last_name':'Lawson','avatar':'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg'},{'id':8,'email':'lindsay.ferguson@reqres.in','first_name':'Lindsay','last_name':'Ferguson','avatar':'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg'},{'id':9,'email':'tobias.funke@reqres.in','first_name':'Tobias','last_name':'Funke','avatar':'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg'},{'id':10,'email':'byron.fields@reqres.in','first_name':'Byron','last_name':'Fields','avatar':'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'},{'id':11,'email':'george.edwards@reqres.in','first_name':'George','last_name':'Edwards','avatar':'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg'},{'id':12,'email':'rachel.howell@reqres.in','first_name':'Rachel','last_name':'Howell','avatar':'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'}]}"
```

**CodePen Link:** [https://codepen.io/nrupuld/pen/ZEzygXv?editors=1011](https://codepen.io/nrupuld/pen/ZEzygXv?editors=1011)

As you can see we got a response from the server with some `JSON`. 

The `JSON` contains a lot of users data. You can parse it into a JavaScript Object and retrieve any data you want.

### Small note about the `onload` event

Something important to note is that `onload` is a JavaScript event just like `onclick` `onhover` etc. It is **not** a function!

This means that just like other events in JavaScript it is triggered by some action occurring on the browser. 

In `xhr.onload` the event it is triggered by is a successful HTTP request. Once the event is triggered it executes the callback function.

### `HTTP Codes`

When you send requests to servers you may get many different responses or HTTP status codes.

These codes mean many things and can be useful in debugging your program. 

**Some common HTTP status codes codes and their meanings:**

1. 200 : OK - This is the standard HTTP response when the request was successful. 
2. 400 : Bad Request- You will get this error when you make a "Bad" or "Incorrect" request. 
3. 404: Not Found - You will get this error when the resource you are looking for on the server is not found. 

There are many more error codes in HTTP which you can look at here [https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## `Now lets display the data!`

In the code below after a button is clicked the data will be displayed. 

We use callback functions to achieve this. 

**But why? Can I do this without callback functions?**

You could but, remember that web servers may take an unknown amount of time to retrieve data. 

While this data is being retrieved we still need our program to do other useful tasks like fetching data from another server or any other useful task really.

We don't want our entire webpage to halt or hang just because we are getting some data from a server.

**Program Flow:**
1. Button is clicked.
2. A HTTP GET request is sent to the server within the `getUserData` function.
3. The server looks at the request and sends an appropriate response. 
4. The function verifies the response and sends it to the display function.
5. The display function checks the input string and prints it to a p tag.  

**Example:**

**CodePen Link:**

https://codepen.io/nrupuld/pen/aboweYR?editors=1011

## What if we want the user data for a user?

We can also change the `url` string we pass to the `xhr.open` function to get the data of different user.

**CodePen Link:**

https://codepen.io/nrupuld/pen/xxKrvJm?editors=1011

### A few takeaways

Notice how we executed a chain of functions.

```
displayBtn.addEventListener -> callback anonymous function -> getUserData -> xhr.onload -> printUserData
```

**This is intentional!** 

We structured our code in such a way because everything needs to happen one after the other in `asynchronous` programming.

Also notice we only call the `printUserData` function after we get some data from the server! 

If we tried to store this data to a global variable or return it at the end of our function, our code will return an `undefined` variable.

This is why we chain our callback functions to perform tasks one after the other only after the data has been retrieved from the server.

## Other events in XMLHTTP requests

### `onerror`

The XMLHttpRequestEventTarget.onerror is the function called when an XMLHttpRequest transaction fails due to an error.

This is on of the more important events as error handling is crucial in any HTTP transaction. 

### `onprogress` 

The XMLHttpRequestEventTarget.onprogress is the function called periodically with information when an XMLHttpRequest before success completely .

This is useful when we want to show a loading bar or do something else while data is being received from the server. 

There are a few more useful events you can take a look at here [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget)

**CodePen Example:** https://codepen.io/nrupuld/pen/bGbRXRe?editors=1011

Change the url in the `xhr.open` to an invalid url to see the `onerror` working!

[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

### `onreadystatechange ` 

![https://i.imgur.com/L8WtlFz.png](https://i.imgur.com/L8WtlFz.png)

### `HTTP POST `

We don't just want to be getting data from a server, we also want to be sending or posting data to a server. 

We can do this with the HTTP `POST` method. 

Notice how we use the `XMLHttpRequest.setRequestHeader()` method to send some important header information to the server. 

**CodePen Example:** https://codepen.io/nrupuld/pen/mdbwNmb?editors=1010



### `HTTP headers`

**What are HTTP headers?**

HTTP headers allow the client and the server to pass additional information with the request or the response. An HTTP header consists of its case-insensitive name followed by a colon ':', then by its value (without line breaks).

This can often be useful when we need to send additional `Meta-data` to a server. 

We can use the `XMLHttpRequest.setRequestHeader(header, value)` method to do this. 

This can often be useful when you need to send tokens to authenticate your request. 

Remember to set your headers after you call the `open()` method but before you call the `send()` method.

**Example:**
```
xhr.open("POST", 'https://reqres.in/api/users')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(json);
```

Here the header is `Content-type` and the value is `application/json; charset=utf-8`.



<!-- PUBLIC APIS -->
<!-- limitations -->
<!--  -->