### Flask Part-5

#### Flask Blueprints

https://flask.palletsprojects.com/en/1.1.x/blueprints/

**server.py**

```python
from flask import Flask
from blueprint_user import user
from blueprint_book import book

app = Flask(__name__)
app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(book, url_prefix="/book")

@app.route('/')
def home():
    return 'Masai Home Page'
```

**blueprint_book.py**

```python
from flask import Blueprint

book = Blueprint("book", __name__)

@book.route("/create")
def create():
    return "Create Book"

@book.route("/details/<isbn>")
def details(isbn):
    return "ISBN " + isbn
```

**blueprint_user.py**

```python
from flask import Blueprint

user = Blueprint("user", __name__)

@user.route("/create")
def create():
    return "Create User"

@user.route("/details/<username>")
def details(username):
    return "Hello " + username

```