## Week 19 Day 5

### SQL Part-10

**users**

```mysql
# id, name, email
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email)
);
```

**categories**

```mysql
# id, category_name
CREATE TABLE categories (
    id int NOT NULL AUTO_INCREMENT,
    category_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

**blogs**

```mysql
# id, title, user_id, category_id
CREATE TABLE blogs (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    user_id int NOT NULL,
    category_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

**comments**

```mysql
# id, comment, blog_id, user_id
CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    comment varchar(255) NOT NULL,
    user_id int NOT NULL,
    blog_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id)
);
```

**JOINS**

```mysql
## Get all the blogs along with the category name
select * from blogs join categories on blogs.category_id = categories.id;
## Get all the blogs along with the category name and author name
select blogs.id as blog_id, blogs.title, users.id as user_id, users.name, categories.id as category_id, categories.category_name from blogs join users on blogs.user_id = users.id join categories on blogs.category_id = categories.id;
## Get all the comments along with the user name for a particular blog
select * from comments join users on comments.user_id = users.id where comments.blog_id = 1;

## Get the users along with the blogs they have written (Did you get all the users?)
select * from users join blogs on users.id = blogs.user_id;
select * from user left join blogs on users.id = blogs.user_id;
## Aggregrations with joins
select users.id, name, count(blogs.id) as blogs_count from users left join blogs on users.id = blogs.user_id group by users.id;

## Get all the blogs along with the categories
select * from blogs join categories on blogs.category_id = categories.id;
select * from blogs left join categories on blogs.category_id = categories.id;
select * from blogs right join categories on blogs.category_id = categories.id;

## Category wise blog count
select categories.id, categories.category_name, count(blogs.id) as blogs_count from categories left join blogs on blogs.category_id = categories.id group by categories.id;
select count(blogs.id), categories.id, categories.category_name from blogs right join categories on blogs.category_id = categories.id group by categories.id;

## Get all the information about the blog including comments count
select blogs.id as blog_id, blogs.title, users.id as user_id, users.name, categories.id as category_id, categories.category_name, count(comments.id) as comments_count from blogs join users on blogs.user_id = users.id join categories on blogs.category_id = categories.id left join comments on comments.blog_id = blogs.id group by blogs.id;
```
