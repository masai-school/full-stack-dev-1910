## Week 16 - Day 2

### Python Flask - 3

```python
from flask import request

@app.route('/users')
def users():
  page = request.args.get('page', default = 1, type = int)
```

**Pagination Backend**

```python
total_items = []
curr_page = 1
per_page = 10
total_pages = math.ceil(total_items.len()/per_page)
prev_page_end = (curr_page-1) * per_page
curr_page_end = curr_page * per_page
curr_page_items = total_items[prev_page_end:curr_page_end]
```

### Databases

**SQL**

- Oracle
- MySQL
- Microsoft SQL Server
- PostgreSQL

**NoSQL**

- MongoDB
- Redis
- Cassandra