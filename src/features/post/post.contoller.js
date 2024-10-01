import postModel from "./post.model.js";

export default class postController {
  getAllPosts(req, res) {
    const AllPosts = postModel.getAllPosts();
    return res.status(200).send(AllPosts);
  }
  addAPost(req, res) {
    const { userid, postContent, likes } = req.body;
    const addedPost = postModel.addAPost(userid, postContent, likes);
    res.status(201).send(addedPost);
  }
  getPostsByUser(req, res) {
    const userid = req.params.userid;
    console.log(userid);
    const theUserPost = postModel.getPostsByUser(userid);
    if (theUserPost) res.status(200).send(theUserPost);
    else res.status(400).send("no posts");
  }
  getThisPost(req, res) {
    const postid = req.params.postid;
    console.log(postid);
    const thePost = postModel.getThisPost(postid);
    if (thePost) res.status(200).send(thePost);
    else res.status(404).send("post not found");
  }
  updatePost(req, res) {
    const postid = req.params.postid;
    const newPostData = req.body;
    console.log(postid);
    console.log(newPostData);
    // check if the post exists, if not, send response that it does not exist
    const thePost = postModel.getThisPost(postid);
    // if it does update the post and return the updated
    if (thePost) {
      //update it
      const updated = postModel.updatePost(postid, newPostData);
      res.status(200).send(updated);
    } else res.status(404).send("no post with this id");
  }
  deleteThisPost(req, res) {
    const postid = req.params.postid;
    console.log(postid);
    const thePost = postModel.getThisPost(postid);
    if (thePost) {
      //delete it
      const deleted = postModel.deleteThisPost(postid);
      res.status(200).json({"message": "post deleted succesfully",
        "Deleted-data":deleted
      });
    } else res.status(404).send("no post with this id");
  }
}