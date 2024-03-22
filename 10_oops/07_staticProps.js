class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}
//In object-oriented programming, the static keyword is used to define a method or property that belongs to the class itself, rather than to instances of the class. This means that you can access static methods or properties directly on the class, without needing to create an instance of the class.

const hitesh = new User("hitesh");
//console.log(hitesh.createId());//=> hitesh.createId is not a function. In your code, you're trying to call the createId() method directly on instance of User class. However, createId() is a static method, meaning it belongs to the class itself, not its instances. Therefore, you should call it directly on the class, not on instances.

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe(); //=> Username: iphone
console.log(iphone.createId()); //iphone.createId is not a function. In your code, you're trying to call the createId() method directly on instance of Teacher class. However, createId() is a static method, meaning it belongs to the class itself, not its instances. Therefore, you should call it directly on the class, not on instances.
