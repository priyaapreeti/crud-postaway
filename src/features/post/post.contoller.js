import postModel from "./post.model.js";

export default class postController{
    getAllPosts(req,res) {
        const AllPosts= postModel.getAllPosts()
        return res.status(200).send(AllPosts);
    }
    addAPost(req,res) {
        const {userid, postContent, likes} =req.body;
        const addedPost= postModel.addAPost(userid,postContent,likes);
        res.status(201).send(addedPost);
    }
    getPostsByUser(req,res) {
        const  userid=req.params.userid;
        console.log(userid);
        const theUserPost=postModel.getPostsByUser(userid);
        if(theUserPost) res.status(200).send(theUserPost);
        else res.status(400).send("no posts")
        
    }
    getThisPost() {}
    updatePost() {}
    deleteThisPost() {}
}