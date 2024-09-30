import express from "express";
import PostController from "./post.contoller.js";

const postController= new PostController();

const postRoutes=express.Router();

postRoutes.get("/",postController.getAllPosts);
postRoutes.post("/add",postController.addAPost);
postRoutes.get("/:userid",postController.getPostsByUser);
postRoutes.get("/:postid",postController.getThisPost);
postRoutes.put("/:postid",postController.updatePost);
postRoutes.delete("/:postid",postController.deleteThisPost);

export default postRoutes;