## Week 18 Day 1

### SQL Part-6

**Min & Max**

```mysql
SELECT MIN(maths) FROM students_marks;
SELECT MAX(science) FROM students_marks;
SELECT MIN(maths) FROM students_marks WHERE class = "V";
SELECT MAX(science) FROM students_marks WHERE gender = "Female";
```

**Grouping**

COUNT, MAX, MIN, SUM, AVG

```mysql
SELECT COUNT(*) FROM students_marks GROUP BY gender;
SELECT COUNT(*), class, section FROM students_marks GROUP BY class, section;
SELECT AVG(maths), class, section FROM students_marks GROUP BY class, section;
```

**Having**

Filters on aggregation

```mysql
SELECT COUNT(*) as num,gender FROM students_marks GROUP BY gender HAVING num < 400;
SELECT COUNT(*) as num, class, section FROM students_marks GROUP BY class, section HAVING num > 20;
SELECT AVG(maths) as maths_avg, class, section FROM students_marks GROUP BY class, section HAVING maths_avg > 50;
```