# Week 10 - Day 5

#### Redux 4

A simple API that allows you to register a user, login a user and view the profile of a user is given to you.

You can read the documentation here [https://github.com/masai-school/api-mocker/wiki/Authentication-API](https://github.com/masai-school/api-mocker/wiki/Authentication-API).

**Do the following:**

- Create a single page react application
- use `redux` to manage state of the react application
- use `redux-thunk` to manage the api requests.
- Seperate the files for actions, reducers and stores
- Use router-dom to manage routing
- Use redirect to push users from one page to another

#### Redux 4.1

1. Create a route for `Registration`
2. Create a simple ***registration page*** that will allow a user to register with the necessary details mentioned in the API docs. 
3. When the user `submits` the registration form, it must POST the data to the api and receive a 200 status code. It must also verify that all fields have been filled in.
4. If it receives an error status code of 401 it must tell the user an error has occurred. 


#### Redux 4.2

1. Create a route called `login`
2. Create a simple **login page** that allows a user to enter their username and password.
3. When the user submits their login details you must send the data to the api.
4. If the login data is correct, you must display all the profile information. You must also hide the login page elements.
5. On success move to another route `/dashboard`

