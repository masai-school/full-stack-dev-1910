
# Week 5 - Day 3

#### Coding Session 1

**SUBMISSION:**
- Create  the folder `session_1`  to `submissions/<your_folder>/week_5/day_3`
- Complete all the problems given below
- Push your completed folder back to the online repo
- use localStorage

### FSD.JS.12.1

- Create an `index.html` page.
- Create a login form which accepts the following
    - username
    - password
- Check if the username and password are correct.
    - redirect the page to another page `dash.html`
    - Read on how to redirect page with javascript [location - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) or [loaction - W3](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)

### FSD.JS.12.2

- In the `dash.html` show the following:
    - h1 tag showing the username of the logged in user
    - a p tag with Login time
    - another p tag with end time for session (Keep 5 min from login as session end time)

### FSD.JS.12.3

- If you enter `dash.html` without logging in or if the time has expired, then you should redirect the user to the login page

### FSD.JS.12.4

- Add a button for logout for dash.html.
- Once you click it, you will be logged out. and redirected to `index.html`


### FSD.JS.12.5

- Keep track of all the users who have tried to login and store their login time 
- Create a `admin.html` page where:
    - You can see all the users that have tried logging in
    - When selecting the user you should be able to show all the login times of each user in tabular form
- It is not required to have login for `admin.html`



Bonus:

- From the same login page, you should check if the user is admin or customer
- If admin, then redirect to `admin.html`
- If user, redirect to dash.html
- Only admins have access to `admin.html`.
- If you access `admin.html` directly, without logging in then, user should be logged out.