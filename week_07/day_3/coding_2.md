
Use the following to import data
Copy the students.json file from this directory

```javascript
var students = require('./students.json')
```

- Cretae an index.html page
- Import the json file and populate it in a tabular column
- Use bootstrap for the UI

### FSD.JS.16.2
- The user should be able to select the total no of results per page.
    - provide the following options
        - 10, 25, 50, 100
- By clicking each page you should populate with the corresponding page information
    - for ex. if the page was 3, and per page was 25,
        then you should show users from 76-100
- Create one more column with total marks

### FSD.JS.16.3
- Provide an option to sort based on first name or last name, or email, ascending or descending
- Provide an option to list only male, only female or all genders
- Provide an option to sort based on low to high and high to low on each individual marks or total marks

### FSD.JS.16.4
- Provide a search option where user can:
    - search by name
        if it matches partly on firstname or lastname list those users
    - search by domain
        if it matches domain name, list all users from that domain name
    - search by email
        if it matches email, list user
    