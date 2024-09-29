import express from "express";
import userRoutes from "./src/features/user/user.routes.js";
import bodyParser from "body-parser";

const app= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(4000, ()=>console.log("Server started at port 4000"));

app.get("/",(req,res)=>res.send("home base"))

app.use("/api/v1/users",userRoutes);