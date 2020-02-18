## Week 18 Day 2

### SQL Part-7

**Primary Key & Auto Increment**

**Primary Key** - Unique Identifier

```mysql
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

```mysql
CREATE TABLE countries (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

**Foreign Key**

```mysql
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    country_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (country_id) REFERENCES countries(id)
);
```

#### Data Types & Functions

**Numeric**

https://dev.mysql.com/doc/refman/8.0/en/numeric-types.html
https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html

**String**

https://dev.mysql.com/doc/refman/8.0/en/string-types.html
https://dev.mysql.com/doc/refman/8.0/en/string-functions.html

**Date & Time**

https://dev.mysql.com/doc/refman/8.0/en/date-and-time-types.html
https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html