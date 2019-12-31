const axios = require('axios')

function sum(num1, num2){
    return num1 + num2
}

function average(arr){
    return parseFloat(arr.reduce((a,c)=>a+c,0)/arr.length)
}

function createUser(name,age,place){
    return {
        name,
        age,
        place
    }
}

function getUser(){
    return axios.get('https://reqres.in/api/users/2').
                then(res=>res.data.data)
                .catch(err=>'error')
}

// union of arrays

function unionArrays(arr1,arr2){
    var obj = {}
    arr1.forEach((el)=>obj[el]=el)
    arr2.forEach((el)=>obj[el]=el)
    return Object.values(obj)
}

module.exports= {
    sum,
    average,
    createUser,
    getUser,
    unionArrays
}