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
  static getThisPost() {}
  static updatePost() {}
  static deleteThisPost() {}
}
const posts = [
  new postModel(1, 1, "blablabla", 2),
  new postModel(2, 1, "another post", 4),
];
