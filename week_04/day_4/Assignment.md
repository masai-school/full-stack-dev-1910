# Week 4 - Day 4

**NOTE:** Follow the instructions carefully and follow coding discipline

**SUBMISSION:**

- Folder `~/cohort_3/submissions/<your_folder>/week_4/day_4/assignments` 

## FSD.M2.C.1

- Create the file `leaderboard.html` so that it looks similar to the link ![https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_03/day_3/templates/leaderboard.jpg](https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_03/day_3/templates/leaderboard.jpg)
- Functionality
  - By clicking on any number it shows up in the score box joined to any previous numbers already present (Eg: To enter a score of `423` you have to press `4` `2` `3`)
  - Once the button `ENTER` is pressed the score gets compared with the `MIN` and `MAX` boxes, if the current score is less than the `MIN` score it gets updated with the current score, if the current score is greater than the `MAX` score it gets updated with the current score
  - The `SCORE` box will be reset with empty value



## FSD.M2.C.2

- Create the file `registration.html` so that it looks similar to the link (also responsive the black box should be show below in mobile screen size) 

![https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_3/day_3/templates/registration.jpg](https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_03/day_3/templates/registration.jpg)
- Functionality
  - The user should be able to fill the three fields in the form
  - Once the register button is clicked it should perform the below validations
    - Name show be more than 3 characters and less than 10 characters
    - The email should be valid one you can use the function from the coding session
    - The mobile must only consist of 10 digits
  - If any of the validations fail you should show the error messages below that particular field
  - If all the validations pass, the filled values should appear on the right side black box and the form should be reset to blank values


`PART II`

**SUBMISSION:**

- Create a file `products.html`
- Copy  the file into a folder `assignments` inside `submissions/<your_folder>/week_4/day_4`
- Complete all the problems given below in the `products.html` file.
- Push your completed folder back to the online repo


**JavaScript**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You have only been given a basic html file. YOU MUST FILL`id` and other basic attributes for all tags!

**NOTE4:** Use CSS to style your page. Use selectors, combinators and psuedo-classes and pseudo-elements wherever you can


## FSD.M2.C.3

- ADD

- Create a `form` on the left half of a page that can take in a product name, image url, and price
- You should add the new product on by clicking on `SUBMIT` of the information.
- Once added, the information should be dispalyed in a tabular form in the right half of your page
- Show the image with a size which is appropriate for the tables


## FSD.M2.C.4

- DELETE

- Each table should have a delete button
- On click of the delete button the item for which you have clicked should be removed


## FSD.M2.C.5

- EDIT

- Each table should have an edit button
- On click of the edit button of an item, the `form` on the left half should be filled in with the information of the particular item.
- The button label on the form should be updated to `UPDATE` instead of `SUBMIT`