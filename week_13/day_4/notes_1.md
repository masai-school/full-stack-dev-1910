## Python

**Strings**  

https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str

```python
name = "Masai School"
print(name[2]) # character at position 2 starts with 0
print(name[-1]) # negative from last position
print(name[2:5]) # string from position 2 (included) to position 5 (excluded)
print(name[3:]) # string from positon 3 to end
print(name[-5:-3]) # string from position -5 (included) to position -3 (excluded)
print(name[:-4]) # string from starting to -4 

## Length of the string
print(len(name))

## String methods

print(name.lower()) # lower case
print(name.replace("a", "@")) # find and replace

# Concatenation
tag = "A transformation in education"
heading = name + " " + tag

# Check sub string exists in string
if "School" in heading:
    print("School exists in heading")
    
if "for" not in heading:
    print("for doesn't exists in heading")
```

**Sequence Types**

https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range

Range

```python
range(10)
range(2, 20)
range(5, 50, 5)

range(start, stop, step) # default start is 0 default step is 1

# looping the range
for x in range(10):
    print(x)

# Checking for items in range
if 35 in range(5, 50, 5):
    print("35 exists in range")

if 32 not in range(5, 50, 5):
    print("32 does no exists in range")

# Size/length of range
len(range(5, 50, 5))
```

List

```python
students = ["Ajay", "Akshay", "Haren"]
alphabets = ["a", "b", "c", "d", "e"]
primes = [2, 3, 5, 7, 11, 13, 17, 19]

alphabets[2] ## Item at position 2
alphabets[4:] ## Items from position to end

## Size/Length of list
len(primes)

## looping the list
for x in students:
    print(x)
    
## Adding item at the end
students.append("Anusha")

## Adding the item at a particular position
students.insert(2, "Rahul")

## Removing item from the end
students.pop()

## Remove a particular position from the list
students.pop(index)
del students[index]

## Remove the specified item (first occurance)
students.remove(value)

## Remove all the elements of the list
del students
students.clear()

## Count all the occurances
students.count(value)

## Check for existance
if "Ajay" in students:
    print("Ajay is present in students")
    
if "Priyanshu" not in students:
    print("Priyanshu doesn't exist in the list of students")
```


## Python

**Lists**
*mutable - liable to change*

```python
students_1 = ["Ajay", "Akshay", "Anusha"]
students_2 = ["Anuj", "Amit", "Ravi", "Nitin"]

## Joining Lists
students = students_1 + students_2

## Merging Lists
students_1.extend(students_2)
```

**Tuples**
*immutable - unchanging over time*

```python
students = ("Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren")

students[1] ## Item at index 1
students[2:] ## Items from index 2 to end

students.index("Anusha") ## Gives the index of the item if found in the tuple
students.count("Vetri") ## The number of times the item appears in the tuple

len(students) ## Size/Length of the tuple
```



**Sets**

https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset

*Unordered collection of distinct items*

```python
students = {"Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren"}

## Add items to the set
students.add("Priyanshu")

## Add multiple items to the set
students.update(["Hasaan", "Sumanta", "Mousumi"])

## Adding or updating existing elements
students.add("Ajay")

len(students) ## Count of items in the set

student.remove("Ajay") ## Remove an item from the set
student.discard("Akshay") ## Discards an item from the set

## Difference between remove and discard
students.remove("Chandrashekhara") ## Raises Error
students.discard("Chandrashekhara") ## Doesn't raise error

## Remove the last item
students.pop() # Since the items are unordered you can't know which will be removed

## Inbuilt methods

set.union(set1, set2...) # returns a set that contains all items from the original set, and all items from the specified sets

set.intersection(set1, set2 ... etc) # returns a set that contains the similarity between two or more sets

set.difference(set1) # returns set contains items that exist only in the first set, and not in both sets

set.symmetric_difference(set1) # returns set contains a mix of items that are not present in both sets

set.isdisjoint(set1) # returns True if none of the items are present in both sets, otherwise it returns False

set.issubset(set1) # returns True if all items in the set exists in the specified set, otherwise it retuns False

set.issuperset(set1) # returns True if all items in the specified set exists in the original set, otherwise it retuns False
```

Union  
https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Venn0111.svg/220px-Venn0111.svg.png

Intersection  
https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Venn0001.svg/220px-Venn0001.svg.png

Difference  
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Venn0100.svg/220px-Venn0100.svg.png

Symmetic Difference  
https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Venn0110.svg/220px-Venn0110.svg.png

Subset & Superset  
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Venn_A_subset_B.svg/150px-Venn_A_subset_B.svg.png



**Dictionaries**

https://docs.python.org/3/library/stdtypes.html#mapping-types-dict

```python
student = {
    "name": "Ajay",
    "state": "Tamil Nadu",
    "gender": "Male",
    "married": False,
    "age": 23
}

## Accessing the items of a dictionary
print(student["age"]) # raises an error if the key is not present
print(student.get("age")) # doesn't raise an error if the key is not present

## Update/Set the values
student["age"] = 22
student.update({"age": 23, "city": "Chennai"})

## Removing vales from dictionary
student.pop("gender")
del student["state"]

## Empty the dictionary
student.clear()

## Length of the dictionary
len(student)

## Looping a dictionary
for x in student:
    print(x)
    print(students[x])
    
for key, value in student.items():
    print(key)
    print(value)
    
student.keys() ## returns the list of all keys
student.values() ## returns the list of all values

## Check existance
if "age" in student:
    print("Age is present")
    
if "designation" not in student:
    print("Designation is not present")
```



**NOTE: You can't concatenate strings and numbers in python to do that you can cast it**
```python
name = "Ajay"
age = 23
heading = name + " " + str(age)
```