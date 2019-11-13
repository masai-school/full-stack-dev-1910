
### 2D arrays


```javascript
// Declare 2D arrays

// initialise 2D array
arr = []
arr[0] = [ 1, 2]
arr[1] = [ 3, 4]
console.log(arr)


// converting input string to 2D array
value = '1 2\n3 4\n5 6'
value = value.split('\n').map(function(val){
    val = val.split(' ')
    return [parseInt(val[0]), parseInt(val[1])]
})

console.log(value)

// accessing information

for (i=0; i<value.length; i++){
    console.log(value[i])
}

// accessing information 2

for (i=0; i<value.length; i++){
    console.log('accessing the first value of the ' +i +'th index',value[i][0])
    console.log('accessing the second value of the ' +i +'th index',value[i][1])
    console.log(value[i].join(' '))
}

// 2D array nested for loop
arr = [ [1,2], [1,2,3,4,5], [1,2,3], [1,2,45,6,75,5], [1,2], [1,2]]

for(var i=0; i<arr.length; i++){

    for(var j=0; j<arr[i].length; j++){
        console.log(arr[i][j])
    }

}

```

