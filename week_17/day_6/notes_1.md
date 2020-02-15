## Week 17 Day 6

**Hashing & Security**

Common Algorithms

https://docs.python.org/3/library/hashlib.html

- md5
- sha1
- pbkdf2


**Process Flow**

- Generate a random string (SALT) during registration 
- Prepend or Append the salt to the password and perform the hash (can add iterations)
- Save the salt and generated hash for the user 
- During login get the user details and hash the provided password with the stored hash



https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/
