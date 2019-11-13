## Week 3 - Day 5

### Coding 1

Submission folder `submissions/<your_folder>/week_3/day_5/session_2`

`Follow clean code principles`

### FSD.JS.5.7
- File `newUser.js` 
- Write a function which takes name, email and password as arguments
- return an Object of the new user

### FSD.JS.5.8
- File `hasEmail.js` 
- Write a function which will check if the property value of email is valid
- return true if valid, else false

Example of valid email id

    mysite@masaischool.com
    my.name@masaischool.org
    mysite@masai.school.net

Example of invalid email id

    masai.school.com [@ is not present]
    masai@.com.my [ tld (Top Level domain) can not start with dot "." ]
    @masai.school.net [ No character before @ ]
    name@gmail.b [ ".b" is not a valid tld ]
    name@.org.org [ tld can not start with dot "." ]
    .name@masaischool.org [ an email should not be start with "." ]
    masaischool()*@gmail.com [ only allows character, digit, underscore, and dash ]
    name..1234@yahoo.com [double dots are not allowed]

### FSD.JS.5.9
- File `propertyCheck.js` 
- Write a function which will check if the property/key exists in an object
- return true if valid, else false

### FSD.JS.5.10
- File `passwordVerify.js` 
- Write a function which will accept a user object, and a password as arguments
- Check if the users passwrod and the password is matching
- return true if its a match, else false

### FSD.JS.5.11
- File `propertyUpdate.js` 
- Write a function which will accept a user object, and property name, and a value for the property
- Update the user object key with the new value
- If the key value doesnt exist, create a new one

### FSD.JS.5.12
- File `addSkills.js` 
- Write a function which will accept a user object, and a skill
- Update/Add the user Skill property with the new value
- If the key value doesnt exist, create a new one

### FSD.JS.5.13
- File `changeStatus.js` 
- Write a function which will accept a user object, value for status
- Each user will have a status property, and a credit limit property
- If there is no status property in the user, then return invalid input as response
- Status can have the following options : `Basic`, `Premium`, `Platinum`
- `Basic` user will have a credit limit of Rs. 80,000
- `Premium` user will have a credit limit of Rs. 3,00,000
- `Platinum` user will have a credit limit of Rs. 6,00,000
- Update the credit limit according to the new status
- return the new object
