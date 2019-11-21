function Student(name,id,age){
    this.name = name
    this.id = id
    this.age = age
}

var student = new Student("masai","10001",25)

var s1 = {
    name: "s_name",
    id:"001",
    age:25
}

console.log(student.age)
console.log(s1)