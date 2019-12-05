function Person(name,energy){
    let person = Object.create(Person.prototype)
    person.name = name
    person.energy = energy
  
    return person
  }
  
  Person.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  
  Person.prototype.sleep = function (time) {
    console.log(`${this.name} is sleeping.`)
    this.energy += time
  }
  
  Person.prototype.code = function (time) {
    console.log(`${this.name} is coding.`)
    this.energy -= time
  }
  
  const sai = Person('Sai',15)
  const jay = Person('Jay',12) 

sai.code(10)
jay.code(10)