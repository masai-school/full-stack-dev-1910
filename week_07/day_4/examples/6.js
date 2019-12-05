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
  code(time) {
    console.log(`${this.name} is playing.`)
    this.energy -= time
  }
}

const sai = new Person('Sai', 15)
const jay = new Person('Jay', 12)

sai.code(10)