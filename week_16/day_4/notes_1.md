## Week 16 Day 4

#### SQL Part-2

**Show Databases**

```mysql
SHOW DATABASES;
```

**Create Database**

```mysql
CREATE DATABASE masai;
```

**Work on a database**

```mysql
USE masai;
```

**Show Tables**

```mysql
SHOW TABLES;
```

**Create Table**

```mysql
CREATE TABLE students (
    code char(6),
    name varchar(255),
    email varchar(50),
    batch varchar(20)
);
```

**Table Information**

```mysql
DESCRIBE students;
```

**Delete Table**

```mysql
DROP TABLE students;
```

**Reset Table Data**

```mysql
TRUNCATE TABLE students;
```

**Delete Database**

```mysql
DROP DATABASE masai;
```

**Create Data**

```mysql
INSERT INTO students (code, name, email, batch)
VALUES ("vk_001", "Ajay", "ajay@gmail.com", "VIKINGS");
```

**Read Data**
```mysql
SELECT * FROM students;
SELECT name FROM students where code = "vk_001";
```

**Update Data**

```mysql
UPDATE students SET batch = "Cohort-1";
UPDATE students SET batch = "Cohort-1" where code = "vk_001";
```

**Delete Data**

```mysql
DELETE FROM students;
DELETE FROM students where code = "vk_001";
```


**Data Types**

`int` - A standard integer  
`char` - A fixed-length string  
`varchar` - A variable-length string  
`date` - A date value in `YYYY-MM-DD` format  
`time` - A time value in `hh:mm:ss` format  
`datetime` - A date and time value in `YYYY-MM-DD hh:mm:ss` format