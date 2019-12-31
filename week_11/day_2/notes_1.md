### `Testing`

#### Importance of testing

Writing tests take extra effort, and at the time it feels like you can test the functionality by manually. 

Here are some reasons why you start writing your own test

#### Debugging

- Decrease time to debug
- Unit tests narrow down bugs
- Improve quality of code

#### Collaboration

- When you collaborating with other members, during refactoring of code and there could be a chance that some code breaking.
- Unit tests allow you to detect any breakage during this process
- Unit tests also provides description to what your functions/UI elements/code does.

#### Guidelines

- Understanding the type of unit tests, as its important to understand what you are going to test
    - Presentational
    - Logic
    - Services
- Breaking down your functions into smaller components/functions will help you write better tests
- It is also important to write functional programming or follow Unix philosophy. Always try to write functions in a way you are able to test it
- Write tests in parallel with the code
    - Its harder to go through old code and write unit tests for those components
    - Time and effort are wasted
- Write code to that is meant to pass the test cases, rather than write test cases which will pass for the code/component/function
- Start practising test cases early so that while you are working on a real app, you would be able to understand better.

- Here are some examples of test:
    - testing api/network calls
    - testing UI of a component when user interacts with it
    - testing output of pure functions like redux


## [Jest](https://jestjs.io)

I believe the name originated as a short for Javascript test -> Jest

Jest is a non browser based unit testing which can be used across different frameworks.

ensure you have a npm initialised in your folder:

```javascript
npm init
// You will be asked a lot of questions. You can give default values
// End of it you will notice a package.json file
// This will contain information of all the 
```

Install Jest:
```
npm install --save-dev jest
```

What does `--save-dev` do?

--save-dev is used to save the package for development purpose.

This is different than `--save`

--save is used to save the package required for the application to run.

Lets write our first test:

`sum.js`
```javascript
function sum(a,b){
    return a+b
}

modules.exports = sum
```

node environment doesnt support `import` and `export` so you have use `modules.exports`

lets make a test file.

`sum.test.js`
```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
});
```

Add the following to your `package.json`
```json
{
  "scripts": {
    "test": "jest"
  }
}

```

The following command will run the test

```
npm run test
```


`Jest documentation:`

- [Getting started](https://jestjs.io/docs/en/getting-started)
- [Expect](https://jestjs.io/docs/en/expect)
- [Globals](https://jestjs.io/docs/en/api)
- [Async code](https://jestjs.io/docs/en/api)
