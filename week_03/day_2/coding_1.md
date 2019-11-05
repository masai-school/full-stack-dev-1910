# Week 3 - Day 2

**SUBMISSION:**
- Download this file
- Fill the answers
- Place the file into the location `~/repos/cohort_3/submissions/<your_folder>/week_3/day_2/session_1` 
- Push the file  back to the online repo

#### Coding Session 1

**Complete the questions by hand and submit your answers in the space provided**  

***You cannot and should not use any JavaScript compliers! Any use of online or offline compliers is considered cheating!***

#### Boolean Logic
##### Look at the code involving logical operators and evaluate the output. Your answers should be either `true` or `false`.
1. 
```javascript
true && true || false && false
```
Answer

```

```
2. 
```javascript
true == false || false == false
```
Answer

```

```
3. 

```javascript
9932494354545 % 2 != 1 
```
Answer

```

```
4. 
```javascript
190 + 20 >= 100 && 50 <= 50
```
Answer

```

```
5. 
```javascript
var A = true
var B = true 
!(A || B) == !A && !B
```
Answer

```

```
6. 
```javascript
!true || !true || true && true && !true
```
Answer

```

```
7.
```javascript
var A = true 
var B = false
var C = false 
var D = true
((A || B) && (C || D)) == ((A || B) && C) || ((A || B) && D)
```
Answer

```

```
8. 
```javascript
var x = false
var y = false 
var z = false
x && z || !x && y || z || y == x && z || !x && y
```
Answer

```

```
## If statements and Arithmetic Operators: 
9. What is the value of `d` ?
```javascript
var a = 50
var b = a + a
var c = b * b + 1
var d = c % 2
```
Answer

```

```
10. What is the value of `grade` ? 
```javascript
var marks = 1967
marks = marks % 100
var grade
if(marks > 90){
  grade = 'A'
}
else if(marks > 80 && marks <= 90){
  grade = 'B'
}
else if(marks > 70 && marks <= 80){
  grade = 'C'
}
else if(marks > 60 && marks <= 70){
  grade = 'D'
}
else{
  grade = 'F'
}
```
Answer

```

```
11. What does the following code print in the `alert` window?  
```javascript
var browser = 'Brave'
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```
Answer

```

```
12. What is the value of y?
```javascript
var x = 12 
var y = 12 + "12"
```
Answer

```

```