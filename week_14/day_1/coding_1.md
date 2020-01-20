## Week 14 - Day 1

### Coding 1

Submission folder `submissions/<your_folder>/week_14/day_1/session_1`

### FSD.PY.6.1

- File `rectangle_class.py`
- Create a class, Rectangle. Its __init__() method should take self, angle1, angle2, angle3, angle4 as arguments.
- Inside the class, create a variable named number_of_sides and set it equal to 4.
- Create a method named check_angles. The sum of a rectangle’s 4 angles should return True if the sum of all the angels is equal 360, and False otherwise.
- Create a variable named my_rectangle and set it equal to a new instance of your Rectangle class. Pass it 4 angles  (e.g. 90, 30, 60, 90).
- Apply check_angles method on my_rectangle
- Create a class named Square that inherits from Rectangle.
- Inside Square, create a member variable named angle and set it equal to 90.
- Create an __init__() function with only the parameter self, and set self.angle1, self.angle2, self.angle3 and self.angle4 equal to self.angle (since a square's angles will always be 90˚).


### FSD.PY.6.2

- File `bike_class.py`
- Define a new class named “Bike”
- Below your Bike class, create a new object named my_bike that is an instance of Bike
- Inside your Bike class, create member variable named condition and give it an initial value of the string "new"
- Define the __init__() function of the Bike class to take four inputs: self, model, color, and average. Assign the last three inputs to member variables of the same name by using the self keyword.
- Then, modify the object my_bike to provide the correct inputs at initialization
- print color of my_bike
- Inside the Bike class, add a method named display_bike to Bike that will reference the bike’s member variables to return the string, "This is a [color] [model] with [average] average."
- Apply display_bike method on your my_bike object


### FSD.PY.6.3

- File `cart_class.py`
- Define a new class named "ShoppingCart"
- Declare an attribute of this class called items_present_in_cart which is 'dict' type container that stores name and price of product as key-value
- Define the __init__() function of the ShoppingCart class to take two inputs: self, customer_id
- Add two methods to the class: add_item and remove_item
- add_item methods receives parameters product and price and if that product is not already present in the cart (items_present_in_cart) then add that item and print "[Name of the product] Added", else print "[Name of the product] is already present"
- Similarly, remove_item method removes product from cart in case it is already there and prints the same. If that product is not present, it prints "[Name of the product] not present in cart"


##### Signup for [this](https://www.hackerrank.com/masai-python-practice) contest and solve following challenge in Python:

* ```Class 2 - Find the Torsional Angle```
