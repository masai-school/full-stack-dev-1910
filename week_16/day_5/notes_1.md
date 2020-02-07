## Week 16 Day 5

#### SQL Part-3

**SELECT SYNTAX **

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

**TABLE STRUCTURE**

```mysql
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int(11)     | YES  |     | NULL    |       |
| name       | varchar(50) | YES  |     | NULL    |       |
| gender     | varchar(50) | YES  |     | NULL    |       |
| shirt_size | varchar(50) | YES  |     | NULL    |       |
| language   | varchar(50) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
```

**WHERE CLAUSE**

```sql
/** Get all the users **/
SELECT * FROM user_data;

/** Get all the users where gender is Male **/
SELECT * FROM user_data WHERE gender = "Male";

/** Get all the users where gender is not Male **/
SELECT * FROM user_data WHERE NOT gender = "Male";
SELECT * FROM user_data WHERE gender != "Male";

/** Get all the users where gender is Male and language is Hindi **/
SELECT * FROM user_data WHERE gender = "Male" and language = "Hindi";

/** Get all the users where gender is Male and language is not Hindi **/
SELECT * FROM user_data WHERE gender = "Male" and NOT language = "Hindi";
SELECT * FROM user_data WHERE gender = "Male" and language != "Hindi";

/** Get all the users where shirt size is L or XL **/
SELECT * FROM user_data WHERE shirt_size = "L" or shirt_size = "XL";
SELECT * FROM user_data WHERE shirt_size IN ("L", "XL");

/** Combining multiple conditions **/
SELECT * FROM user_data WHERE (gender = "Male" and shirt_size = 'L') OR (gender = "Female" and shirt_size = 'M');
SELECT * FROM user_data WHERE ((gender = "Male" and shirt_size = 'L') OR (gender = "Female" and shirt_size = 'M')) AND language = "English";
SELECT * FROM user_data WHERE ((gender = "Male" and shirt_size = 'L') OR (gender = "Female" and shirt_size = 'M')) AND language IN ("English", "Hindi");
```



**NOTE: Import SQL file into your database**

```mysql
USE db_name;
\. <file_path>
```
