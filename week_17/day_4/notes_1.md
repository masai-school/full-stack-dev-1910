## Week 17 Day 4

### SQL Part-4

```mysql
SELECT
    [ALL | DISTINCT | DISTINCTROW ]
      [HIGH_PRIORITY]
      [STRAIGHT_JOIN]
      [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]
      [SQL_CACHE | SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]
    select_expr [, select_expr ...]
    [FROM table_references
      [PARTITION partition_list]
    [WHERE where_condition]
    [GROUP BY {col_name | expr | position}
      [ASC | DESC], ... [WITH ROLLUP]]
    [HAVING where_condition]
    [ORDER BY {col_name | expr | position}
      [ASC | DESC], ...]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
    [PROCEDURE procedure_name(argument_list)]
    [INTO OUTFILE 'file_name'
        [CHARACTER SET charset_name]
        export_options
      | INTO DUMPFILE 'file_name'
      | INTO var_name [, var_name]]
    [FOR UPDATE | LOCK IN SHARE MODE]]
```



**WHERE OPERATORS**

```mysql
SELECT * FROM students_marks WHERE maths > 50;
SELECT * FROM students_marks WHERE science >= 75;
SELECT * FROM students_marks WHERE english < 40;
SELECT * FROM students_marks WHERE maths <= 50;
/** Both the starting and ending values are included **/
SELECT * FROM students_marks WHERE maths BETWEEN 50 AND 75;
```

**COUNT FUNCTION**

```mysql
SELECT COUNT(id) FROM students_marks WHERE gender = 'Male';
SELECT COUNT(id) FROM students_marks WHERE maths >= 75;
```

**ORDERING RESULTS**

```mysql
SELECT * FROM students_marks WHERE gender = 'Male' ORDER BY maths ASC;
SELECT * FROM students_marks WHERE gender = 'Female' ORDER BY science DESC;
SELECT * FROM students_marks ORDER BY maths ASC, science DESC;
```

**LIMIT & OFFSET**

```mysql
SELECT * FROM students_marks LIMIT 10;
/** The first value is offset (skip) count the second value is limit count **/
SELECT * FROM students_marks LIMIT 20,10;
```
