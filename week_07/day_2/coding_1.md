# Week 7 Day 2

### Session 1

### FSD.JS.15.1

- Create an index.html page
- Add the following features
- Take user information:
    - first name (optional)
    - last name (optional)
    - username
    - password
    - email 
    - address (optional)
    - phone no (optional)
    - type (user/admin)
- Give default vales for the user
- Create an object for the user

### FSD.JS.15.2

- Add another section where you can select users created from a dropdown
- Once selecting the user use a function to populate the html pages
- Show different information for user, and admin
- For ex. 
```javascript
    function fillInfo(user){
        return `<div>
                    <div> Hello ${user.name}, welcome back </div>
                    <div> Registered email is ${user.email}</div>
                </div>`
    }

    var doc = document.getElementById('userInfo')
    doc.innerHTML = fillInfo(allUsers[0])
```
- Use your creativity to fill different info for user and admin

### FSD.JS.15.3

- Make a table to list all the users
- You should be able to sort the users based on asc / desc order of usernames or names
- Filter them based on all / admin / user