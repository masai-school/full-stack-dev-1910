## Week 14 - Day 5

**Python CSV** 

https://docs.python.org/3/library/csv.html

**Read csv file**

```python
def read_csv():
    with open('data/file.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='"')
        for row in reader:
            print(row)
```

**Write csv file**

```python
def write_csv():
    with open('data/temp.csv', 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter=' ', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(['id', 'name'])
        for i in range(100):
            writer.writerow([i, "Masai " + str(i)])
```

**csv DictReader**

```python
def read_csv():
    with open('data/file.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            print(row)
```

**csv DictWriter**

```python
def write_csv():
    with open('data/temp.csv', 'w') as csvfile:
        fieldnames = ['id', 'name']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for i in range(100):
            writer.writerow({'id': i, 'name': 'Masai ' + str(i)})
```
