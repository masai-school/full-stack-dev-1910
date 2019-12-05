const personMethods = {
    eat(amount) {
       console.log(`${this.name} is eating.`)
       this.energy += amount
     },
     sleep(time) {
       console.log(`${this.name} is sleeping.`)
       this.energy += time
     },
     code(time) {
       console.log(`${this.name} is coding.`)
       this.energy -= time
     }  
   }
   
   function Person(name,energy){
     let person = Object.create(personMethods)
     person.name = name
     person.energy = energy
   
     return person
   }
   
   const sai = Person('Sai',15)
   const jay = Person('Jay',12) 

sai.eat(10)
jay.sleep(8)