export default class postModel {
  constructor(postid, userid, postContent, postLikes) {
    this.postid = postid;
    this.userid = userid;
    this.postContent = postContent;
    this.postLikes = postLikes;
  }
  static getAllPosts() {
    return posts;
  }
  static addAPost(userid, postcontent, postLikes) {
    const aPost = new postModel(
      posts.length + 1,
      userid,
      postcontent,
      postLikes
    );
    posts.push(aPost);
    return aPost;
  }
  static getPostsByUser(userid) {
    const thePosts = posts.filter((post) => post.userid === parseInt(userid));
    console.log(thePosts);
    return thePosts;
  }
  static getThisPost(postid) {
    const thePost = posts.filter((post) => post.postid === parseInt(postid));
    console.log(thePost);
    return thePost;
  }
  static updatePost(postid, postContent) {
    const thePostIdx = posts.findIndex(
      (post) => post.postid === parseInt(postid)
    );
    console.log(thePostIdx);
    if (thePostIdx !== -1) {
      //update it
      posts[thePostIdx] = { ...posts[thePostIdx], ...postContent };
      return posts[thePostIdx];
    } else return "no post";
  }
  static deleteThisPost(postid) {
    const thePostIdx = posts.findIndex(
      (post) => post.postid === parseInt(postid)
    );
    console.log(thePostIdx);
    if (thePostIdx !== -1)
      return posts.filter((post) => post.postid === parseInt(postid));
    else return "no post with this id to delete";
  }
}
const posts = [
  new postModel(1, 1, "blablabla", 2),
  new postModel(2, 1, "another post", 4),
  new postModel(3, 3, "content", 2),
  new postModel(4, 4, "ek aur", 0),
];
