## Week 20 Day 1

### SQL Part-11

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
    PRIMARY KEY (id)
);
```

**blog_categories**

```mysql
# id, blog_id, category_id
CREATE TABLE blog_categories (
	id int NOT NULL AUTO_INCREMENT,
    blog_id int NOT NULL,
    category_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    CONSTRAINT blog_category UNIQUE (blog_id, category_id)
);
```

**JOINS**

```mysql
# Get all the blogs along with teh categories
SELECT blogs.id, title, category_name FROM blogs JOIN blog_categories ON blogs.id = blog_categories.blog_id JOIN categories ON categories.id = blog_categories.category_id;

# Blogs with no categories
SELECT blogs.id, title, category_name FROM blogs LEFT JOIN blog_categories on blogs.id = blog_categories.blog_id LEFT JOIN categories on categories.id = blog_categories.category_id;

# One row per blog
SELECT blogs.id, title, GROUP_CONCAT(category_name) FROM blogs JOIN blog_categories ON blogs.id = blog_categories.blog_id JOIN categories ON categories.id = blog_categories.category_id GROUP BY blogs.id;
```


#### Hierarchical Data

https://www.slideshare.net/billkarwin/models-for-hierarchical-data