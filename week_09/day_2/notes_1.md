## `async await`

The purpose of async/await is to simplify using promises synchronously, and to perform some behavior on a group of Promises

An async function can contain an await expression that pauses the execution of the async function to wait for the passed Promise's resolution, then resumes the async function's execution and evaluates as the resolved value.

The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.

Syntax:
```javascript
async function name([param[, param[, ... param]]]) {
   statements
}
```

Example:

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
```

[async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## `Axios` and making HTTP requests in ReactJS

Front end applications that don't communicate with server seems a bit redundant. So lets connect our React Apps to a server. 

While we could use the good old `XMLHttpRequest`, its lack of inbuilt support for promises makes this a less than ideal option. 

Another viable option is the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) introduced in ES6 and expanded in ES7. 

However [Axios](https://github.com/axios/axios) is a preffered package because of its various advantages. If you want to know check this, [this medium post](https://medium.com/@jeffrey.allen.lewis/http-requests-compared-why-axios-is-better-than-node-fetch-more-secure-can-handle-errors-better-39fde869a4a6) explains it perfectly.

**Installing Axios:** 

`npm install axios`

**Writing your first request with Axios:**

Lets try to create an axios request in an App by using a randomuser generator api:

[Codesandbox](https://codesandbox.io/s/axios-7b6qc)

```javascript 
import axios from 'axios'

ComponentDidMount(){
    // This is placed inside 
    axios.get("https://randomuser.me/api/?results=10")
    .then(res => {
      const data = res.data.results;
      console.log(data);
      this.setState({
        data: data
      });
    })
    .catch(error=>console.log(error))
}
```




Lets try and get the local weather using the [FCC weather API](https://fcc-weather-api.glitch.me/).

```javascript
const axios = require('axios'); // This is an alternative to import statements, don't worry about it!
or
import axios from 'axios'


axios.get('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
    .then(response => console.log(response))
    .catch(err => console.log(err));
```

The most powerful part of Axios it the ability to pass request configuration through a JavaScript object literal.

```javascript
const axios = require('axios'); 
const requestParam = {
        method: 'get',
        url: 'https://fcc-weather-api.glitch.me/api/current',
        params : {
            lat : 12.9716,
            lon : 77.5946
        }
}
axios(requestParam)
     .then(response => console.log(response))
     .catch(err => console.log(err));
```

### Using Axios with React

The ideal place to place a http request is usually in `componentDidMount()`.

This because all your components are already mounted into the DOM and are waiting to receive some data. 

You could also do it in `componentDidUpdate()` after some user input. 

But **beware** using `setState` within `componentDidUpdate()` could cause an infinite loop since it once again invokes `componentDidUpdate()`.

To prevent this, make sure you are passing different props like this:

```jsx
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

Example weather app is located here 
[Codesandbox](https://codesandbox.io/s/axios-weather-api-f2ct4)


Axios 
```javascript

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  
```

Axios POST:

```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

[CheatSheet](https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index)