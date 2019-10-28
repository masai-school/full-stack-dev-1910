# Week 2 - Day 1

#### Coding Session 1

**The Linux Command Line (Part 3)**

**NOTE:** Follow the instructions carefully and follow coding discipline

Make sure you are working inside the folder  `~/coding/week_02/day_1/session1`

### FSD.CMD.3.1

- Download the file https://raw.githubusercontent.com/masai-school/assignments-data/master/data/junk/random_ids.txt 
- Rename the file `random_ids.txt` to `random_masai.txt`
- Count the number of times the word `masai` occurs in that file.

### FSD.CMD.3.2

- Download the file https://github.com/masai-school/assignments-data/raw/master/downloads/course.zip
- Unzip the file `course.zip`
- Count the number of files in the folders  `week_1` and `week_2`
- Count the total no of files in the folder `course` 
- List all the directories in the folder `course` to a file called `dir_list.txt`

### FSD.CMD.3.3

- Write your name to a file called `profile.txt` (HINT: use `echo`)
- Write the numbers `1` to `100` to a file called `numbers.txt`
- Write the alphabets `A` to `Z` to a file called `caps_alpha.txt`
- Write the alphabets `a` to `z` to a file called `small_alpha.txt`

### FSD.CMD.3.4

- Download the file <https://raw.githubusercontent.com/masai-school/assignments-data/master/data/junk/emails_rand.txt>
- Count the number of unique emails in the list `emails_rand.txt`
- Count the number of emails which have duplicates in the list `emails_rand.txt`
- Find the email which has the maximum number of duplicates in the list `emails_rand.txt`

### FSD.CMD.3.5

- Download the file https://raw.githubusercontent.com/masai-school/assignments-data/master/data/junk/random_ids.txt 
- Open the file `random_ids.txt` using `nano`
- Find all the occurrences of the word `masai` and change it to `school`
- Cut the lines 1,3,5,7 and paste them at line 9
- Navigate to line 200 and add a new line with the text `MASAI School`
- Navigate to line 500 and add a new line with the text `HELLO NANO`
- Save the file with the name `random_nano.txt`

### FSD.CMD.3.6

- Create a folder called `test`
- Create folders with the names `fol_a` to `fol_z` inside the folder `test`
- Inside each folders `fol_a` to `fol_z` create files `fil_1` to `fil_20`
- Create a tar with all the files and folders from the directory `test` with the name `test.tar`
- Delete the folder `test`
- Count the no of files inside the tar file `test.tar`
- Extract all the files from the file `test.tar`
- Rename the extracted folder with the new name `test_extract` 

### FSD.CMD.3.7

- Download the file https://raw.githubusercontent.com/masai-school/assignments-data/master/data/junk/marks_rand_2000.csv

The files contains marks the data of 2000 students from India and Pakistan one for each line in the below format separated by spaces `Marks Country StudentID`

``` 
23 India 5cf9c9be70765c6c741bd34a
43 Pakistan 5cf9c9be70765c6c741bd352
.
.

```

Create a file called marks_commands.txt (HINT: Use `nano`) and write the commands for how you achieve the answer for the following question (Only one line per question, means you have to use pipes `|`)

**You can check the commands if they are giving you the results before writing to the file**

1. Find the total number of students from India 
2. Find the total number of students from Pakistan
3. No of students from Pakistan who are in top 100 list based on the marks scored
4. No of students from India who are in top 100 list based on the marks scored
5. Top 3 students from India based on the marks scored
6. Top 3 students from Pakistan based on the marks scored
7. Bottom 5 students from Pakistan based on the marks scored
8. Bottom 5 students from India based on the marks scored

## SUBMISSION

- Copy the file  `marks_commands.txt` to the `cohort_3` repo cloned into `~/repos/cohort_3` inside the folder `submissions/<your_folder>/week_02/day_1/`  (create the folders if they don't exist). 
- Then, commit and push the file to the online GitHub repository.