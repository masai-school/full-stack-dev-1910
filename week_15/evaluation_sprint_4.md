## Sprint-4 Evaluation

- Submission folder `submissions/<your_folder>/week_15/day_1`
- The end time for submission is 7:30PM or 19:30 hours, 13th Jan, 2019.
- Push package.json, src, public folders to git 
- Update README.md with your name

###  Create the following pages and link them in your App.js with the given functionality:

Folder structure:
```
- src
    - index.js
    - App.js
    -Components
        - Login
            - Login.js
            - Form.js
        - Web
            - BBInstant.js
        - Product
            - Cart.js
            - CartTable.js
            - CartForm.js

```

- `Login.js` `Form.js` (both class components) - COMPULSORY
  - Login.js will hold the Form.js
  - Form.js will have its internal state and submit button
  - Login.js will contain information of fake username details, and a function to check if the login details are correct. If correct, hide the login form and show ac omponentin the browser SIGN-IN SUCCESSFUL
  - Keep username as `admin`, password as `admin`
  ![https://i.imgur.com/5hNEpfS.png](https://i.imgur.com/5hNEpfS.png)

- `Booking.js` COMPULSORY
- Create a page with the following features 
    - make a new booking (`Booking.js`)
        - customer name
        - customer phone no
        - service
        - category ['insurance','banking','account opening']
        - date
        - time
    - Display (`BookingTable.js`) tabular form data
    - User should be able to select bookings only based on a category or show all
    - User should be able to Select a date, and show how many bookings are made on that date

- `BBinstant.js`
  - Recreate a static webpage of http://bbinstant.bigbasket.com/ using bootsrap (as similar as possible)
  - Make the page responsive so that it looks good in all screen sizes
  - Try to keep the use of custom CSS to very minimal
  - Make seperate Components and use Class based Components wherever necessary. 
  - Reuse components wherever possible



### `CSS`:
- Use twitter bootstrap and all the pages should be responsive
- Use of inline styles is not allowed
- Use css modules

### `REACT.JS`:
- Making a Single Page Website by using React Framework
- Clean code with comments, proper variable names and indentation
- Make seperate Components and use Class based Components wherever necessary. 
- Seperate the App into smaller components


### `OTHER NOTES`:
- Follow clean code practises
- Follow Unix philosophy
- Think in React

#### `DISQUALIFICATION`:

- Copying code from stackoverflow or by Googling
- Browsing or referring any code other than the documentation

#### `RESOURCES`

We understand you need resources for some of the things so you can use these sites. But please make attributions where ever required

- HTML, CSS & JS Documentation - <https://developer.mozilla.org/en-US/>
- React.js documentation - <https://reactjs.org>
- Bootstrap Documentation - https://getbootstrap.com/
- Notes - https://github.com/masai-school/full-stack-dev-1910
