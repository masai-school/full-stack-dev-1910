## Sprint-5,6,7 evaluation

- Submission folder `submissions/<your_folder>/week_17/day_1`
- The end time for submission is 7:00PM or 19:00 hours, 10th Feb, 2020.
- Push package.json, src, public folders to git 
- Update README.md with your name
- `Use zoom to record a video of max 1 minute long showing the front end application`
- All the functionalities should be shown in the video

###  Create the following pages and link them in your App.js with the given functionality:

Folder structure:
```
- src
    - index.js
    - App.js
    - components
        - common            # keep common components in this folder
        - auth              # keep components specific to auth page inside this if applicable
    - routes                # Keep routes and pages in this folder
        - Routes.js
    - redux                 # redux folder
App.js
```

### `REACT.JS`:
- Making a Single Page Website by using React Framework using Create React App
- Clean code with comments, proper variable names and indentation
- Make seperate Components and use Class based Components wherever necessary. 
- Seperate the App into smaller components

### `REACT-ROUTER-DOM:`
- Use proper routes
- Use dynamic routing 
- When uploading to netlify make sure _redirects file should be made
- Use Switch, build a 404 page

### `REDUX`
- use react-redux
- use connect
- write actions, reducer and store in different files
- use redux thunk for handling api calls
- persistance of data with localStorage can be done

### `CSS`:
- All the pages should be responsive
- Use css modules / js styling
- You can use bootstrap
- Grids flexes with selectors and combinators should be used

### `OTHER NOTES`:
- Follow clean code practises
- Follow Unix philosophy
- Think in React

#### `DISQUALIFICATION`:

- Copying code from stackoverflow or by Googling
- Browsing or referring any code other than the documentation

### `CODING ASSIGNMENT`

- use `https://github.com/masai-school/api-mocker` to manage the login and register page
- If hes not logged in `redirect` him to `/login` Login page
- There should be a logout button as well

Your aim is to build a meeting room booking application

- In the `home page` a user can see a list of all meeting rooms available for booking
- Create some placeholder data.
- In the `home page` should be able to search information of `available` meeting rooms
- The following details are mandatory for each laptop(add thumbnails to make it look better)
    - floor on which the room is located
    - meeting room name
    - capacity
    - price per day
- Show the token after login in a navbar of the page
- Navbar should contain `home` page, and a `orders` page

- A user can select start date and end date and search for meeting rooms that fit in that timeframe
- Once a selection is made, a user should be shown a `booking page` where a bill with the booking id, and transaction details should be shown to the user
- Once confirmed, a user is sent to a confirmation page showing success where in 5 seconds after going to confirmation page, they are sent back to the dashboard page
- If a user searches again during that time frame, the meeting room which was booked should not be shown in the results

- User should be able to do the following things as well:
    - Feature to `sort` based on `price` `capacity` in `ascending` or `descending` order
    - Feature to `filter` based on `floor` also should be made.
    - Add pagination for 5 per page results
    - Show no of pages as well. 

EXTRA FEATURES (DO ONLY IF YOU HAVE EXTRA TIME):

- User should be able to see all bookings from a `orders` page. 
- You can see bookings made by other users also (without the price)
- If the booking is made by a user then he can click on that room see their bill. 
- The user can delete that booking from there


#### `RESOURCES`

We understand you need resources for some of the things so you can use these sites. But please make attributions where ever required

- HTML, CSS & JS Documentation - <https://developer.mozilla.org/en-US/>
- React.js documentation - <https://reactjs.org>
- Bootstrap Documentation - https://getbootstrap.com/
- React Router - https://reacttraining.com/react-router/web/guides/quick-start
- Redux - https://redux.js.org/
- React redux - https://react-redux.js.org/
- Notes - https://github.com/masai-school/full-stack-dev-1910