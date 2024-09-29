import express from "express";
import UserController from "./user.controller.js";

const userController = new UserController();

const userRoutes = express.Router();

userRoutes.get("/", userController.getAll);
userRoutes.post("/login", userController.login);
userRoutes.post("/signup", userController.signUp);

export default userRoutes;