## Sprint-5 Evaluation-2

- Submission folder `submissions/<your_folder>/week_11/day_1`
- The end time for submission is 3:30PM or 16:30 hours, 6th Jan, 2019.
- Push package.json, src, public folders to git 
- Update README.md with your name

###  Create the following pages and link them in your App.js with the given functionality:

Folder structure:
```
- src
    - index.js
    - App.js
    - Components
        - common            # keep common components in this folder
        - auth              # keep components specific to auth page inside this if applicable
    - Routes                # Keep routes and pages in this folder
        - Routes.js
App.js
```

### `REACT.JS`:
- Making a Single Page Website by using React Framework
- Clean code with comments, proper variable names and indentation
- Make seperate Components and use Class based Components wherever necessary. 
- Seperate the App into smaller components

### REACT-ROUTER-DOM:
- Use proper routes
- Use dynamic routing 
- When uploading to netlify make sure _redirects file should be made

### REDUX
- use react-redux
- use connect
- write actions, reducer and store in different files

### `CSS`:
- Use Material-UI and all the pages should be responsive
- Use of inline styles is not allowed
- Use css modules / js styling

### `OTHER NOTES`:
- Follow clean code practises
- Follow Unix philosophy
- Think in React

#### `DISQUALIFICATION`:

- Copying code from stackoverflow or by Googling
- Browsing or referring any code other than the documentation



- In the `dashbaord page` a user has a few buttons which redirect him to different pages
    - ADD NEW USERS
    - VIEW ALL USERS
- In the `user add page` should be able to add information of `users`
    - name
    - age
    - email 
    - CIBIL Score
    - Loan amount
    - loan type (personal, educational, car, home etc.)
- In the view users page, show data in a tabular form.
- User should be able to do the following things as well:
    - Feature to `sort` `CIBIL Score` and `Loan amount` in `ascending` or `descending` order
    - Feature to `filter` based on `loan type` also should be made
    - User should be able to `delete` a particular user
    - Add pagination for 5 per page
    - Show no of pages as well. 
- When you click on the name of a user, you should be `redirected to a page with only that users information`
    - User should be able to `update` information from this page
    - On update, give a success message stating update was successful
    - Add an option on this page to `go back` to all users page
- On the `landing page` You need to check if the user is logged in.
- If hes not logged in `redirect` him to `/login` Login page
- use default username: `admin` and password: `admin`


#### `RESOURCES`

We understand you need resources for some of the things so you can use these sites. But please make attributions where ever required

- HTML, CSS & JS Documentation - <https://developer.mozilla.org/en-US/>
- React.js documentation - <https://reactjs.org>
- Bootstrap Documentation - https://getbootstrap.com/
- React Router - https://reacttraining.com/react-router/web/guides/quick-start
- Redux - https://redux.js.org/
- React redux - https://react-redux.js.org/
- Notes - https://github.com/masai-school/full-stack-dev-1910