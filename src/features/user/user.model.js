export default class userModel {
  constructor(id, name, email, pass) {
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.id = id;
  }
  static getAll() {
    return users;
  }
  static signup(name, email, pass) {
    const newUser = new userModel(users.length + 1, name, email, pass);
    // console.log(newUser);
    users.push(newUser);
    return newUser;
  }
  static login(email, pass) {
    return users.find((user) => user.email === email && user.pass === pass);
  }
}
const users = [
  new userModel(1, "preeti", "preeti@gmail.com", "preeti"),
  new userModel(2, "admin", "admin@gmail.com", "admin"),
];
