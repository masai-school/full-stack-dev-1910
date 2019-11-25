
# Week 6 - Day 1

#### Coding Session 1

**SUBMISSION:**

- Folder `~/cohort_3/submissions/<your_folder>/week_6/day_1/coding_1`
- Create a files as per the questions with your first name and last name
- Once you complete the coding session push that file to the online repo

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You must not write any JavaScript code within the `html`file! ***All*** your JS must be in the `js` file! Use the script tag to link your JS file from your HTML file. 

You must set up your own API server, follow the instructions here [https://github.com/masai-school/api-mocker/wiki](https://github.com/masai-school/api-mocker/wiki).

### FSD.JS.14.1

An simple API that allows you to showcase the different codenames of the versions of the choosen operating systems.  

You can read the documentation here https://github.com/masai-school/api-mocker/wiki/Operating-Systems-API

**Do the following**

1. Create a file called `os.html` and a file called `os.js`. Link `os.js` from `os.html`.

2. Create a simple dropdown with different names of operating systems
3. When the users clicks submit get the data using the API and showcase the version numbers and names in the form of a table

**BONUS**

1. Try to complete the problem without the submit button (HINT: Event Listeners)
2. Try the store the data if fetched once and store it in some variables to reduce the number of API calls made

------

A simple API that allows you to register a user, login a user and view the profile of a user is given to you.

You can read the documentation here [https://github.com/masai-school/api-mocker/wiki/Authentication-API](https://github.com/masai-school/api-mocker/wiki/Authentication-API).

### FSD.JS.14.2

**Do the following:**

1. Create a file called `register.html` and a file called `register.js`. Link `register.js` from `register.html`.

2. Create a simple ***registration page*** that will allow a user to register with the necessary details mentioned in the API docs. 
3. When the user `submits` the registration form, it must POST the data to the api and receive a 200 status code. It must also verify that all fields have been filled in.
4. If it receives an error status code of 401 it must tell the user an error has occurred. 

### FSD.JS.14.3

**Do the following:**

1.Create a file called `login.html` and a file called `login.js`. Link `login.js` from `login.html`.

2.Create a simple **login page** that allows a user to enter their username and password.

3. When the user submits their login details you must send the data to the api.

4. If the login data is correct, you must display all the profile information. You must also delete the login page elements.

5. If the login data is incorrect you must tell the user `The username or password was incorrect, please try again!`