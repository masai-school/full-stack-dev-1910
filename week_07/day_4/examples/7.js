
class Person {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep(time) {
      console.log(`${this.name} is sleeping.`)
      this.energy += time
    }
}
  
class Coder extends Person{
    constructor(name,energy){
        super(name,energy)
    }
    code(time){
        console.log(`${this.name} is coding`)
        this.energy -= time
    }
}


  const sai = new Coder('Sai', 15)
  const jay = new Person('Jay', 12)
  
  sai.code(10)
  jay.sleep(10)
