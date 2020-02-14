## Week 17 Day 5

### SQL Part-5

**LIKE**

`%` and `_`

`%` - Any number or characters  

`_` - Single character

```mysql
SELECT * FROM students_marks WHERE name LIKE 'a%';
SELECT * FROM students_marks WHERE name LIKE '%a';
SELECT * FROM students_marks WHERE name LIKE '_a%';
SELECT * FROM students_marks WHERE name LIKE '%a_';
SELECT * FROM students_marks WHERE name LIKE '___a%';
```

**DISTINCT**

```mysql
SELECT DISTINCT company FROM employee_salary;
SELECT DISTINCT company, departmement FROM employee_salary;
SELECT COUNT(DISTINCT company) FROM employee_salary;
```

**SUM & AVG**

```mysql
SELECT AVG(maths) FROM students_marks;
SELECT AVG(maths), AVG(science) FROM students_marks;
SELECT SUM(salary) FROM employee_salary;
```

**OPERATIONS**

`+,-,*,/,%`

```mysql
SELECT (maths+science+english) AS total_marks FROM students_marks;
SELECT (maths+science+english)/3 AS avg_marks FROM students_marks;
```
