class User {
  constructor(public name: string) {}

  sayHello(): void {
    console.log(`Hello , this is ${this.name}`);
  }
}

const regularUser = new User("Prakash");
regularUser.sayHello();

class Admin extends User {
  constructor(name: string, public isAdmin: boolean = true) {
    super(name);
  }

  showAdminStatus(): void {
    console.log(`${this.name} is an admin : ${this.isAdmin}`);
  }
}

const adminUser = new Admin("Adarsh (admin)");
adminUser.sayHello();
adminUser.showAdminStatus();

class Guest extends User {
  constructor(name: string) {
    super(name);
  }
}

const guestUser = new Guest("Guest - 1");
guestUser.sayHello();
