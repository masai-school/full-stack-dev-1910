# Week 6 - Day 1
![](https://img.shields.io/badge/MASAI-SPARTANS-red?logo=&style=for-the-badge)

![](https://img.shields.io/badge/WEEK6-DAY1-green)

![](https://img.shields.io/badge/CODING-SESSION2-red)

**SUBMISSION:**
- Create the files into the location `~/repos/cohort_2/submissions/<your_folder>/week_6/day_1/session_2/` 
- Push the file  back to the online repo


#### Coding Session 2 A

Create the following files
- index.html
- index.js

Using HTML:
Make a page that will take input from a user of a Car:
- Car make, Model, Top Speed.
- Use a form to submit the information to create a new class with the details which is given in the next section.
- Create one more input form where you can select your Car which will take the details of a ride, time and speed of that car.
- You should have one more button for showing current status of that car which will return the information of the car and the total distance travelled so far.
- You should also be able to view all the details of all Cars and trips taken so far.


Create a class `Car`:
It should have the following variables: use the names as per given
1. carMake - will contain the Car company
2. model - will contain info of the model
3. topSpeed - top speed in km/hr
4. avgSpeed - avg speed of car 
5. dist - initialise with 0
6. trips - initialise with empty array

It should have the following functions:
1. `Constructor`:
- Take car_make, model and top_speed and initialise while creating new Class. 
- Fill it with invalid for wrong inputs for strings and for numbers fill with 0 if not defined. dist is initialised as 0.

2. `trip`(time,dist):
- it should take time travelled by the car and at what distance as arguments, if not defined, then time will be given default value of 1 hour, and speed is given as half of top speed. 
- The function stores the trip details the distance and returns the details of the time, distance and average speed of the trip. 
- You should also update the avgSpeed of the car based on the all the trips you have made

3. `presentStatus` 
- This will return all the variables as string in the same line with one space between each. Give units as per value
    example `Honda CRV-05 110km/hr 120km`

   

#### Coding Session 2 B

Create a class `Student`:
It should have the following variables: use the names as per given
1. name - name of student
2. email - email of student
3. phone - phone no

It should have the following functions:
1. `Constructor` - Take name, email and phone as input arguments and fill it with invalid if no argument is passed. 

2. `assignMarks`(args) this function should take multiple inputs, and assign all of this into a variable marks in the class.

3. `highestMarks` this function checks highest mark and returns the value

4. `totalSubjects` this function returns total no of subjects as response.

5. `showMarks` this function returns the marks as an array.

6. `average` returns the average of the marks

6. `low` will return the lowest marks 

Please follow the names and instructions strictly. 


**SUBMISSION:**
- Create a new file `test.md` and copy these two questions into it, and write your answers into that. 
- Explain the answer as well.


10. What is the value of `a`, `b`, `c`?
```javascript

class Room{
    constructor(l = 0,b = 0, h = 0,t = 0 ){
        this.len  = l;
        this.br   = b;
        this.ht   = h;
        this.tempC = t;
    }
    toKelvinFromCelsius( a = 0){
        this.tempC =  this.tempC || a
        return this.tempC+273.15;
    }
    toFarFromCelsius(){

    }
}

s1 = new Room(10,10,10)

c =s1.toKelvinFromCelsius()
a = s1.toKelvinFromCelsius(100)
b = s1.toKelvinFromCelsius(200)

```
Answer

```

```
11. What is the output from the following program
```javascript
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
```
Answer

```

```
