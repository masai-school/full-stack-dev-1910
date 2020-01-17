## Week 13 - Day 5

### Coding 1

Submission folder `submissions/<your_folder>/week_13/day_5/session_1`

**NOTE: Write clean code and break the problem into smaller functions (UNIX Philosophy)**

### FSD.W13.5.1_1
- File `strings_play.py` 
- Should have the following functions `camel_case` `snake_case` `hypen_case` which takes a string as input and returns the string the respective case
- You cannot use any inbuilt functions, the only things you can use are the `len` `append` 

### FSD.W13.5.1_2
- File `tax_calculator.py` 
- Should be able to calculate the tax based on the income and savings

**Rules for tax calculations**

- Below 2,50,000 no tax
- Amount earned between 2,50,000 and 5,00,000 - 10% of the amount earned in this slab
- Amount earned between 5,00,000 and 10,00,000 - 20% of the amount earned in this slab
- Amount earned above 10,00,000 - 30% of the amount earned in this slab

The rules for the rebate based on the savings is mentioned below

- 50% of the savings amount can be deducted from the total income if the total income is below 5,00,000
- 30% of the savings amount can be deducted from the total income if the total income is below 10,00,000
- 10% of the savings amount can be deducted from the total income if the total income is above 10,00,000 the maximum cap of the deduction is 50,000

### FSD.W13.5.1_3
- File `pyramid_play.py`
- Should have three functions to print the pyramid , inverse pyramid  and rhombus based on the given level

**Sample Level 4 Pyramid**

```
....O....
...O.O...
..O.O.O..
.O.O.O.O.
```

**Sample Level 4  Inverse Pyramid**

```
.O.O.O.O.
..O.O.O..
...O.O...
....O....
```

**Sample Level 4 Rhombus**

```
....O....
...O.O...
..O.O.O..
.O.O.O.O.
..O.O.O..
...O.O...
....O....
```
### FSD.W13.5.1_4
##### Signup for [this](https://www.hackerrank.com/masai-python-practice) contest and solve following challenges in Python:
###### Write functions to solve individual tasks

* ```Masai Divisors```
* ```Masai Airline```
* ```Odd Sum Below N```
* ```Factorial - Recursion```
* ```Number of ways problems```

### FSD.W13.5.1_5

Download the mentioned file (Remeber `wget`) https://github.com/masai-school/assignments-data/blob/master/data/junk/random_ids.txt

- File `count_masai.py`
- Count the number of times the word `masai` appears in the file

### FSD.W13.5.1_6

Download the mentioned file (Remember `wget`) https://raw.githubusercontent.com/masai-school/assignments-data/master/data/junk/marks_rand_2000.csv

The files contains marks the data of 2000 students from India and Pakistan one for each line in the below format

``` 
23 India 5cf9c9be70765c6c741bd34a
43 Pakistan 5cf9c9be70765c6c741bd352
.
.

```

- FIle `marks_stats.py`
- Read the data from the file, write functions to accomplish the below tasks
  - Count the number for students from India and Pakistan
  - Total no of students who scored below 50 marks 
  - Total no of students who scored above 50 marks
  - No of students who scored exactly 50 marks (Country wise)
- Create a file called `marks_india.txt` and `marks_pakistan.txt` based on the country of the students (They should not have the country name in the file)
- Create a file called `marks_100.txt` with all the ids of the students who scored 100 marks (It should not have the marks column)

### FSD.W13.5.1_7

Download the file https://github.com/masai-school/assignments-data/blob/master/data/junk/emails_rand.txt

- File `email_stats.py`
- Read the data from the file and find out the count of unique email address from the file
- Create a file called `duplicate_emails.txt` with all the emails that are duplicates along with the count of no of times they are repeated

### FSD.W13.5.1_8
##### Signup for [this](https://www.hackerrank.com/masai-python-practice) contest and solve following challenges in Python:
###### Write functions to solve individual tasks

* ```Longest Repeated Odd```
* ```Catch that 420!```
* ```Sum of Special Pairs```
* ```Following 2!```
* ```Count Words#```