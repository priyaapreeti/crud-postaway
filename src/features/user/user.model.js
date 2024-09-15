export default class userModel {
  constructor(id, name, email, pass) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.pass = pass;
  }
  static getAll(){
    return users;
  }
  static register(){

  }
  static login(){
    
  }
}
const users = [
    new userModel(1, "preeti", "preeti@gmail.com", "preeti"),
    new userModel(2, "admin", "admin@gmail.com", "admin"),
  ];