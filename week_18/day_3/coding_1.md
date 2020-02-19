## Week 18 Day 2

#### Flask Part 7

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_17/day_6/coding_1.md

Submission folder `submissions/<your_folder>/week_18/day_3/session_1`

Use the code from the previous assignment to build the additional functionality

#### FSD.FLSK.7.1

- Route `auth/login` (Use Blueprint `auth`)
- Login the user with the fields (`email, password`)
- Should return the `jwt` token with the user's id in the response

#### FSD.RCT-FLSK.7.2

- On successful login save the `jwt` token in the local storage 

#### FSD.FLSK.7.3

- Route `auth/details` this should send the details of the user based on the id from the token

#### FSD.RCT-FLSK.7.4

- Show the profile details of the user using the `auth/details` API (Along with the picture if available)

#### FSD.RCT-FLSK.7.5

- Profile details page should have a change/set picture option which will take the file input and save it to the server

#### FSD.FLSK.7.6

- Route `auth/picture` this should take the file input from the user and save the file in the file system and the path along with the user data in `csv` file