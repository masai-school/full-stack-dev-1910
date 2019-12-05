// classes

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  let box = new Rectangle(12, 13);

//   methods in classes

class Rectangle {
constructor(height, width) {
    this.height = height;
    this.width = width;
}

area(){
    return this.height * this.width;
}

}

let box = new Rectangle(12, 13);
box.area();


// two classes


class Car{
    constructor(horsePower){
      this.horsePower = horsePower;
      this.fuel = 100;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  let myCar = new Car(102);

  class Sedan{
    constructor(name){
      this.name = name;
    }
    printName(){
      console.log(this.name);
    }
  }
  var mySedan = new Sedan('Civic');

//   inheritance

  class Car{
    constructor(horsePower, name){
      this.horsePower = horsePower;
      this.fuel = 100;
      this.name = name;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  
  class Sedan extends Car{
    printName(){
      console.log(this.name)
    }
  }
  
  let mySedan = new Sedan(150, 'Civic');
  mySedan.consumeFuel(10);
  console.log(mySedan.fuel);
  mySedan.printName();


  // super 

  class Car{
    constructor(horsePower, name){
      this.horsePower = horsePower;
      this.fuel = 100;
      this.name = name;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  
  class Sedan extends Car{
    constructor(horsePower, name, numSeats){
      super(horsePower, name);
      this.numSeats = numSeats;
    }
    printName(){
      console.log(this.name);
    }
  
    updateHorsePower(input){
      super.horsePower = input;
    }
  }
  
  let mySedan = new Sedan(150, 'Civic', 4);
  
  mySedan.updateHorsePower(300);
  
  mySedan