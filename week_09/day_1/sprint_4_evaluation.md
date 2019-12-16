## Sprint-4 Evaluation-1

- Submission folder `submissions/<your_folder>/week_9/day_1`
- The end time for submission is 6:30PM or 18:30 hours, 16th Dec, 2019.
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
            - Uber.js
        - Product
            - Product.js
            - ProductTable.js
            - ProductForm.js

```

- `Login.js` `Form.js` (both class components)
  - Login.js will hold the Form.js
  - Form.js will have its internal state and submit button
  - Login.js will contain information of fake username details, and a function to check if the login details are correct. If correct, hide the login form and say SIGN-IN SUCESSFUL

  ![https://i.imgur.com/5hNEpfS.png](https://i.imgur.com/5hNEpfS.png)

- `Product.js` Create a page with the following features 
    - Create new Products (`ProductForm.js`)
        - product name
        - product id
        - seller name
        - category
        - COD applicable? (checkbox)
        - Qty
    - Display (`ProductData.js`) tabular form data of based on cetegory and COD. 
    - User should be able to select the category and COD, and the table should change.
        - (For example, user should be able to select category and select a COD enabled item, and filter only those valid)
    - Show total Qty, total value of inventory in each category

- `Uber.js`
  - Recreate a static webpage of https://www.uber.com/in/en/ using bootsrap (as similar as possible)
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
