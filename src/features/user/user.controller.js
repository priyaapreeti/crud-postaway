import userModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  getAll(req, res) {
    const allUsers = userModel.getAll();
    res.status(200).send(allUsers);
  }
  signUp(req, res) {
    //destructure body data
    const { name, email, pass } = req.body;
    // send to the controller
    const addeduser = userModel.signup(name, email, pass);
    // return res of successful send
    res.status(201).send(addeduser);
  }
  login(req, res) {
    //take req, destructure
    console.log(req.body);
    const { email, pass } = req.body;
    //send to model to check in db
    const checkuser = userModel.login(email, pass);
    //get the result from model and then just validate
    if (!checkuser) {
      res.status(400).send("User not found");
    } else {
      const token = jwt.sign(
        { userId: checkuser.id, email: checkuser.email },
        "secureKey",
        { expiresIn: "1D" }
      );
      return res.status(200).json({
        status: 200,
        message: "welcome back, your session token is :",
        token: token,
      });
    }
  }
}
