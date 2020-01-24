## Week 14 - Day 5

### Coding 1

Submission folder `submissions/<your_folder>/week_14/day_5/session_1`

#### FSD.PY.5.1

- File `registration.py` (NOTE: User `DictReader`)
- It should take the username and password as input and store the data in the file `users.csv` (Headers: username, password)
- Upon successful saving it should print the message `Registration Successful`
- If a user with the same username exists it should print the message `User Already Exists`

#### FSD.PY.5.2

- File `login.py` (NOTE: User `DictReader`)
- It should take the username and password as input and check with the existing data in  `users.csv`
- If the username and password matches it should print the message `Login Successful`
- If a user with the provided username doesn't exists it should print the message `User Not Found`
- If the username and password doesn't match it should print the message `Wrong Password`

#### FSD.PY.5.3

- File `weather_analysis.py`
- This file contains the US Weather History Data https://github.com/fivethirtyeight/data/blob/master/us-weather-history/KCQT.csv
- Link for the raw file download https://raw.githubusercontent.com/fivethirtyeight/data/master/us-weather-history/KCQT.csv
- Use `csv.reader` and `csv.writer` to create a file called `summary.csv` with the below headers and criteria
  - Headers (year, month, min_temp, max_temp)
  - min_temp - The minimum of `actual_min_temp` for the corresponding year & month
  - max_temp - The maximum of `actual_max_temp` for the corresponding year & month