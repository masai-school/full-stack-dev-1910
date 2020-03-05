## Week 20 - Day 4

### Notes 1


### Different kinds of import

Importing the library
```
import library
```

Importing a function of the library
```
from library import functions
```

Importing all the functions of the library
```
from library import *
```

Importing a function of the library as 
```
from library import functions as func
```

Importing a file from another folder 
```
from folder import file
```
Make sure that folder is having blank `__init__.py`


### Decorator
Example:
```
def test_decorator(func):
    def inner1(*argv, **kwargs):
        print('-------')
        func(*argv, **kwargs)
        print('-------')

    return inner1

@test_decorator
def print_hello(ii, aa, key = 'test'):
    print('hello %s %s'%(ii, aa))

#print_hello = test_decorator(print_hello)

print_hello('masai', 'school')
```
