## Week 4 - Day 1

### Coding 2

### FSD.JS.6.7
- File `checkElementBefore.js`
- Write a funciton which accepts an array of integers
- By default a each element has a return value of 1
- If the element before it is greater than the element, then return -1
- Use map function

### FSD.JS.6.8
- File `squareElements.js`
- Write a funciton which accepts an array of integers
- Return the square of each element

### FSD.JS.6.9
- File `gradeStudents.js`
- Write a funciton which accepts an object
- Each object will contain, name and totalMarks as keys
- You will return the grade
- Create a new key and store the return information
- Your program should work for an array of objects

- If marks are above 90, return `A`
- If marks are between 80 and less than 90, return `B`
- If marks are between 60 and less than 80, return `C`
- If marks are between 40 and less than 60, return `D`
- If marks are below 40, return `F`

```javascript
// Example

students = [ {name:'Albert', marks:70},
              {name:'Pogo', marks:60}]


// Final output
[ {name:'Albert', marks:80, grade:'B'},
  {name:'Pogo', marks:60, grade:'C'}]

```