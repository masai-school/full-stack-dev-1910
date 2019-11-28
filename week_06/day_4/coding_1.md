# Week 6 - Day 4

**Session-1**

**NOTE:** Follow the instructions carefully and follow coding discipline

**SUBMISSION:**

- Folder `~/cohort_3/submissions/<your_folder>/week_6/day_4/session_1` 

**Use jQuery to build the whole functionality and Bootstrap for the design use of any custom classes and inline styles is not allowed**

### FSD.JQRY.3.1
- Create the file `registration.html` so that it looks similar to the file in the templates folder 
- Workflow
  - Intially only the Name field should be visible as the users starts typing you should do a live validation and show the error message once the name is valid, the error message should be gone and  the email field should be shown
  - Once the email field is being filled, live validation should be shown and if its valid the mobile field should appear
  - Once the mobile field is filled and valid the Submit button should appear
  - On clicking the submit button this form should disappear and the right block should appear
  - Fields Validation Rules
     - Name show be more than 3 characters and less than 10 characters
     - The email should be valid one you can use the function from your previous assignments
     - The mobile must only consist of 10 digits

HINT: Use show(), hide(), after(), events to achieve the end result

You must set up your own API server, follow the instructions here [https://github.com/masai-school/api-mocker/wiki](https://github.com/masai-school/api-mocker/wiki).

### FSD.JQRY.3.2

An simple API that allows you to showcase the different codenames of the versions of the choosen operating systems.  

You can read the documentation here https://github.com/masai-school/api-mocker/wiki/Operating-Systems-API

**Do the following**

1. Create a file called `os.html` and a file called `os.js`. Link `os.js` from `os.html`.

2. Create a simple dropdown with different names of operating systems
3. When the users clicks submit get the data using the API and showcase the version numbers and names in the form of a table

------

A simple API that allows you to register a user, login a user and view the profile of a user is given to you.

You can read the documentation here [https://github.com/masai-school/api-mocker/wiki/Authentication-API](https://github.com/masai-school/api-mocker/wiki/Authentication-API).

### FSD.JQRY.3.3

**Do the following:**

1. Create a file called `register_api.html` (You can use code from the FSD.JQRY.3.1) and a file called `register_api.js`. Link `register.js` from `register.html`.
2. Create a simple ***registration page*** that will allow a user to register with the necessary details mentioned in the API docs. 

### FSD.JQRY.3.4

**Do the following:** (HINT: Use **beforeSend** in jQuery ajax to send the headers information)

1. Create a file called `login.html` and a file called `login.js`. Link `login.js` from `login.html`.
2. Create a simple **login page** that allows a user to enter their username and password.
3. When the user submits their login details you must send the data to the api.
4. If the login data is correct, you must display all the profile information. You must also delete the login page elements.
5. If the login data is incorrect you must tell the user `The username or password was incorrect, please try again!`
