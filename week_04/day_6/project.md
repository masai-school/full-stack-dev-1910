### Week 3 - Day 6

#### Project Day

Design and code a game picked by you

**OPTIONS**

1. Hangman
2. Tic Tac Toe
3. Number Scrable
4. Snake & Ladders
5. Battle Ship
6. Sudoku
7. Chess
8. Expense Manager
9. Health Advisor
10. Bill Generator
11. Power Tracker
12. Stock Tracker
13. Marks Recorder
   

**COMPLEXITY LEVELS (POSSIBILITIES)**

1. Basic ability for two players to play 
2. Ask for the names of the players and show whose turn it is to play
3. Show any invalid operations or when the game ends

Feel free to add more features or options

### EXPENSE MANAGER

Design and implement a sytem to keep a  track of the income you are receiving and the expenditure you are making

- Should be able to add all the money earned from various sources (Eg: Salary - Rs 50,000)
- Should be able to record all the expenses made (Eg: Rent - Rs 10,000)
- Should show the total money earned and spent along with the balance amount
- Should show an indication (probably with different style when the balance is running low)


### HEALTH ADVISOR

Design and implement a system that keep a track of your calories intake and expenditure and suggests the weight you are gaining or loosing. 

- Should be able to add the food and calories corresponding to it (Eg: Juice - 200 Cal)
- Should be able to record the exercise and the calories spend (Eg: Cycling - 700 Cal)
- Should show the total calories consumed and spent, including the net gain or loss
- Should show the fat gain or loss (1kg of fat has approx 7000 Cal) with different styles for gain or loss


### BILL GENERATOR

Design and implement a system to generate the bill at a restaurant

- Should be able to add an entry of ordered items along with quantity. (Eg: Dosa - 40 * 2 = 80)
- Should have the ability to configure the tax percentage and add tips (Eg: Tax - 5%)
- Should have the facility to give discount to the customer (Eg: Friday Fun - Rs 500)
- Should show the total bill amount after the tax, tips and discount


### POWER TRACKER

Design and implement a system to showcase the electricity consumption and the bill amount for the usage

- Should be able to add an applicance entry, it's wattage and consumption on a daily/monthly basis (Eg: Bulb - 40W * 4hr/day, Oven - 2000W * 8hr/month)
- Should show the overall units consumption for the month 
- Should be able to show the total bill amount assume the unit rate varies for different slabs (Rs 4 below 100 units, Rs 5 below 300 units, Rs 7 below 500 units, Rs 10)

### STOCK KEEPER

Design and implement a system to keep a track of the stock of various items in a store

- Should be able to add an entry when the stock arrives. (Eg: Rice - 10kgs)
- Should be able to deduct from the stock when a sale is made (Eg: Rice - 2kgs)
- Should show the balance stock of various items in the store
- Should show a indication (probably with differnt style when the stock of an item is running low)


###  MARKS RECORDER

Desgin and implement a system to record the marks of a students and see basic analytics

- Should be able to add an entry for the student for a grade, section, exam type and subject
- Should be able to see the data aggregrated with any of the above filters and also basic statistics like average, minimum and maximum (probably with differnt style when the student is below average and above average)
- Should be able to see the individual students performance in a detailed fashion


**RULES**

- Write clean code and follow good naming convention

- All the javascript should be written in a seperate javascript file (See HINT below)

- You can use any of the things covered in the classes from Week 1 to Week 3


  ```javascript
  function random(number){
    return Math.floor(Math.random()*number);
  }
  ```

- You can use any of the events & DOM manipulations

- For some of the projects you can create the arrays with initial values you wanted


HINT: How to use a separate `css` file and `js` file

```html
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<script src="script.js"></script>
</body>
```

**HINTS**

- Remember the UNIX Philosophy
  - Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new features.
  - Expect the output of every program to become the input to another, as yet unknown, program. Don't clutter output with extraneous information. Avoid stringently columnar or binary input formats. Don't insist on interactive input.
  - Design and build software, even operating systems, to be tried early, ideally within weeks. Don't hesitate to throw away the clumsy parts and rebuild them.
  - Use tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you've finished using them.
- For all the projects you need to work mostly on array manipulations so you can refer to the below codepen for help https://codepen.io/nrupuld/pen/dybNEWJ?editors=1011
  

**SUBMISSION**

- Deadline 24 Aug 2019 17:00
- Create the project in `~/projects/masai/week_3`
- The name of the  page should be `index.html`
- The name of the `css` file should be `style.css`
- The name of the `js` file should be `script.js`
- Any images or icons you use should be put in a folder called `resources`
- The project should be made available on your github http://github.com account with the repository name `masai-week-3`



**DISQUALIFICATION**

- Copying code from stackoverflow or by Googling
- Seen browsing or referring any code or design related sites 


**RESOURCES**

We understand you need resources for some of the things so you can use these sites. But please make attributions where ever required

- Colours - <https://materialuicolors.co/>
- Fonts - <https://fonts.google.com/>
- Icons - <https://thenounproject.com/> 
- Stock Images - <https://unsplash.com/> 
- HTML & CSS Documentation - <https://developer.mozilla.org/en-US/>



**TIPS**

- Feel free to ask if you have any doubts
- Solve the paper first before getting started on the code
- Take a break or small walk every 45 minutes
- Don't forget to have lunch and your daily dose of water


<u>Don't disturb your neighbours they are also working on their project and have deadline</u>