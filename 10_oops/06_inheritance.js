class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //=> // Calls the constructor of the User class with the username parameter, 'super' is used inside a subclass constructor to call the constructor of its parent class. This is particularly useful when you want to access and use properties or methods defined in the parent class within the subclass constructor.
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse(); //=> A new course was added by chai

const masalaChai = new User("masalaChai");
//masalaChai.addCourse(); //=> ERROR, masalaChai.addCourse is not a function bcoz the addCourse method is defined within the 'Teacher' class, but not in the 'User' class. When you create an instance of 'User' (masalaChai), you can't call addCourse() on it because the addCourse() method is specific to the 'Teacher' class.

masalaChai.logMe(); //=> USERNAME is masalaChai

chai.logMe(); //=> USERNAME is chai

console.log(chai === masalaChai); //=> false because they are two separate instances

console.log(chai === Teacher); //=> false

console.log(chai instanceof User); // true because Teacher extends User

console.log(chai instanceof User); //=> true because chai is an instance of Teacher
