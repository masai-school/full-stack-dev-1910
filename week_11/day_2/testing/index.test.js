const {sum,average,createUser,getUser,unionArrays} = require('./index')

describe('test cases for sum function', ()=>{

    test('sum function exists', () => {
        expect(sum).toBeDefined()
    });

    test('sum of 5 and 10 should be 15',()=>{
        expect(sum(5,10)).toBe(15)
    })
});

describe('test cases for average function',()=>{

    test('average function exists', () => {
        expect(average).toBeDefined()
    });

    test('average of 1,2,3,4,5 should be 3',()=>{
        expect(average([1,2,3,4,5])).toBe(3)
    })
})

describe('createUser tests', () => {
    test('createUser should return {name:"albert",age:"24",place:"bangalore"}',()=>{
        var name = 'albert'
        var age = 24
        var place = 'bangalore'
        var obj = {
            name,
            age,
            place
        }
        expect(createUser(name,age,place)).toEqual(obj)

    })
});

describe('<= test case',()=>{
    test('100+200 <= 300',()=>{
        var m = 100
        var n = 200
        expect(n+m).toBeLessThanOrEqual(300)
    })  
})

// Arrays
describe('array contains',()=>{
    test('checking if array contains masai',()=>{
        let username = ['masai','admin','mschool']
        expect(username).toContain('masai')
    })
    
})

// network request
describe('Network request, getUser', () => {
    test('async test 1',()=>{
        return getUser().then(res=>{
            expect(res.first_name).toBe("Janet")
        })
    })

    test('async test 2',async ()=>{
        // assertions
        expect.assertions(1)
        const data = await getUser()
        expect(data.first_name).toBe('Janet')
    })
});


// union of arrays
describe('Union of arrays test',()=>{
    test('function defined true',()=>{
        expect(unionArrays).toBeDefined
    })
    test('[1,2,3],[3,4,5] should return [1,2,3,4,5]',()=>{
        let arr1 = [1,2,3]
        let arr2 = [3,4,5]
        let arr3 = [1,2,3,4,5]
        expect(unionArrays(arr1,arr2)).toEqual(arr3)
    })
    test('[1,1,1,1,1,1] and [3,3,3] should return [1,2,3,4,5]',()=>{
        let arr1 = [1,1,1,1,1,1]
        let arr2 = [3,3,3]
        let arr3 = [1,3]
        expect(unionArrays(arr1,arr2)).toEqual(arr3)
    })
    test('[],[] should return []',()=>{
        let arr1 = []
        let arr2 = []
        let arr3 = []
        expect(unionArrays(arr1,arr2)).toEqual(arr3)
    })
    test('[1,3,3],[] should return [1,3]',()=>{
        let arr1 = [1,3,3]
        let arr2 = []
        let arr3 = [1,3]
        expect(unionArrays(arr1,arr2)).toEqual(arr3)
    })
})