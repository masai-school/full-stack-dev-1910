## Week 7 day 2 

### Session 2

### Object & Array destructuring

We know that we can add a single property, extract a property as well as add multiple properties to an object.

```javascript

var person = {}
person.name = 'karthik';
person.id = 'sm_090';
person.location = 'India';
// creating property one by one

const name = person.name
const id = person.id
// extracting property one by one

// creating multiple properties together by using object literal notation
var person = {
    name:"karthik",
    id:"sm_090",
    location:"India"
}

var name = person.name
var id = person.id
var location = person.location
```

Destructuring allows us to extract multiple properties from an object

```javascript

const { name, id, location } = person;
// The code can now be written in a better way now
```

- You can also destructure from return values from other functions.
- If you have an api call and it returns a large object.

```javascript
var { count, url } = getData()
```

We can do the same with arrays as well
```javascript

// array destructuring

// standard way 
const arr = ['MASAI','INDIA','EDTECH']
var name = arr[0]
var location = arr[1]
var desc = arr[2]

// es6
var [name,location,desc] = arr
console.log(name,location,desc)

// using destructuring in split
name = 'albert sebastian'
const [fname, lname] = name.split(' ')
console.log(fname, lname)
```

Renaming field names:
```javascript

// use const
var person = {
    f:'albert',
    l:'sebastian',
    i:'albseb511'
}

var {f:fname,l:lname,i:id} = person
```


Implementing in function arguments:
```javascript


function fetchData(baseUrl,query,maxResults,orderby){

}

fetchData(' https://www.googleapis.com/youtube/v3/search','masai',10,'date')

// This can cause issues because we need to pass the exact order, and can make the function complicated
// Also this function doesnt handle default values

```

We can use object destructuring:

```javascript
function fetchData({baseUrl,query,maxResults,orderby}){

}

// we can change the order
fetchData({
    baseUrl:'https://www.googleapis.com/youtube/v3/search',
    orderby:'date',
    maxResults:10,
    query:'masai'
    
})
```

combining with default values:
```javascript
function fetchData({baseUrl,query='',maxResults=null,orderby=null}){

}

// pass only some variables
fetchData({
    baseUrl:'https://www.googleapis.com/youtube/v3/search',
    query:'masai'
    
})

// combine with default parameters

```