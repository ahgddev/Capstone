import Users from "../models/user.mjs";
import Posts from "../models/post.mjs";
import express from "express";
const router = express.Router();

// @route:   GET /postID
// @desc:    Get a specific post with an ID. If the post doesn't exist show a 404 component.
// @access:  Public
router.get("/:id", async (req, res) => {
    try {
      //Get the post
      let post = await Posts.findOne({post_id: req.params.id}, "-_id")
      //Get user data associated with the post
      // let postUser = await Users.findOne({user_id: post.user_id}, "-_id avatar username")
      if(post == null){
        res.json("No posts found")
      } else {
        let postInfo = [post]
        res.json(postInfo);
      }
    } catch (error) {
      console.log(error);
    }
  });

export default router;