## Week 19 Day 4

### SQL Part-9

**Relationships**

#### One-to-one

```
users: id, name, email
profile: id, picture, twitter, github, linkedin, user_id
```


#### One-to-many

```
users: id, name, email
blogs: id, title, text, user_id
```


#### Many-to-many

```
blogs: id, title, text, user_id
categories: id, name
blog_categories: blog_id, category_id
```

#### Self Referencing

```
categories: id, name, parent_id
```

**Data Types**

https://dev.mysql.com/doc/refman/8.0/en/data-types.html
