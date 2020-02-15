## Week 17 Day 6

Submission folder `submissions/<your_folder>/week_17/day_6/session_1`

#### FSD.FLSK.6.1

- Route `auth/signup` (Use Blueprint `auth`)
- Register the user with the fields (`name, email, password`) (Should not be able to register if the email is already present)
- Save the details is `csv` with the fields `id,name,email,salt,password_hash` (Use any of the hash functions with salt and some iterations)

#### FSD.FLSK.6.2

- Route `auth/login` (Use Blueprint `auth`)
- Login the user with the fields (`email, password`)
- Should check the password with the stored `password_hash`

#### FSD.RCT-FLSK.6.3

- Build the react frontend for the user signup using the signup API
- It should show the proper messages based on the server response 

#### FSD.RCT-FLSK.6.4

- Build the react frontend for the user login using the login API
- It should show the proper messages based on the server response