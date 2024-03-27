import Users from "../models/user.mjs";
import Posts from "../models/post.mjs";
import { postsseed, usersseed } from "../seeddata.mjs";
import express from "express";
const router = express.Router();
let currentUserID = "";


//Add data to the database.
router.route("/seed").get(async (req, res) => {
  await Users.deleteMany({});
  await Users.insertMany(usersseed);
  await Posts.deleteMany({});
  await Posts.insertMany(postsseed);

  res.send(`Database Seeded`);
});

// @route:   POST /signup
// @desc:    Allow a user to sign up.
// @access:  Public
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let checkUser = await Users.findOne({ email });
    if (checkUser) {
      return res.status(404).json({ msg: "This user already exists." });
    } else {
      // const user_id = Users.countDocuments() + 1;
      let newUser = new Users({
        username: username,
        email: email,
        password: password,
      });
      await newUser.save();
      let getNewUser = await Users.findOne({ username: req.body.username });
      currentUserID = getNewUser._id.toString();
      res.json({
        token: getNewUser._id.toString(),
        msg: "User sign up successful! Logging in...",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// @route:   POST /login
// @desc:    Allow a user to login.
// @access:  Public
router.post("/login", async (req, res) => {
  try {
    let checkUser = await Users.findOne({ username: req.body.username });
    currentUserID = checkUser._id.toString();
    res.json({
      token: currentUserID,
      msg: "User login successful! Logging in...",
      useravatar: checkUser.avatar,
      usersname: checkUser.username
    });
  } catch (error) {
    console.log(error);
  }
});


// @route:   POST /logout
// @desc:    Allow a user to logout.
// @access:  Public
router.post("/logout", async (req, res) => {
  try {
    //Delete the token on the server
    currentUserID = "";
    //Let the user know they've been logged out.
    res.json("User logged out");
  } catch (error) {
    console.log(error);
  }
});

// @route:   GET /search?tag={}&query={}
// @desc:    Allow a logged in user and guest to search for posts.
// @access:  Public
router.get("/search", async (req, res) => {
  let invalidQuery = ["", " ", null, undefined];
  // const allPosts = await Posts.find({}).sort("-date").limit(10);
  try {
    let textquery = req.query.q;
    //Make sure the search queries aren't invalid.
    if (
      invalidQuery.indexOf(textquery) == -1
      // && invalidQuery.indexOf(tagquery) == -1
    ) {
      const foundPosts = await Posts.find({
        $or: [
          { tags: textquery },
          { title: { $regex: `${textquery}`, $options: "i" } },
          { text: { $regex: `${textquery}`, $options: "i" } },
        ],
      });
      res.json(foundPosts);
    } else {
      res.status(404).json(null);
    }
    //If none are found show a "No posts Found" Component
  } catch (error) {
    console.log(error);
  }
});

// @route:   GET /dashboard
// @desc:    Allow a logged in user to see their dashboard.
// @access:  Public
router.get("/dashboard", async (req, res) => {
  //Check if the user is logged in
  console.log("DashID" + currentUserID)
  const loggedInUser = await Users.findById(currentUserID).select("-password");
  if (!loggedInUser) {
    //Show a 404 page if they're not logged in.
    res.json(null);
  } else {
    try {
      //Get their posts
      const loggedInUserPosts = await Posts.find({
        user_id: loggedInUser.user_id,
      })
        .sort("-date")
        .limit(10);
      //Get posts from people they follow
      const followingPosts = await Posts.find({
        user_id: loggedInUser.following,
      }).sort("-date");
      //Get recently updated tags
      const recentTags = await Posts.aggregate([
        {
          $sort: {
            post_date: -1,
          },
        },
        {
          $limit: 10,
        },
        {
          $project: {
            tags: 1,
            _id: 0,
          },
        },
        {
          $group: {
            _id: "$tags",
          },
        },
      ]);
      let filteredTags = [
        ...new Set(recentTags.map((items) => items._id).flat(1)),
      ];
      res.json([loggedInUserPosts, followingPosts, filteredTags]);
    } catch (error) {
      console.log(error);
    }
  }
});

// @route:   GET /
// @desc:    Website front page. Load the Home page and send in params to let React know there's a user logged in if there is one.
// @access:  Public
router.post("/", async (req, res) => {
  let yourPostData = [];
  let recentPostData = [];
  let currentUserID = req.body.data.id;
  try {
    const allPosts = await Posts.find({}).sort("-date").limit(10);
    //Check if they're logged in

    if (currentUserID) {
      //If Logged in
      const loggedInUser = await Users.findById(currentUserID).select(
        "-password"
      );
      
      if (loggedInUser.following) {
        //Get recent posts from people they follow
        recentPostData.push(await Posts.find({
          user_id: loggedInUser.following,
        }).sort("-date").limit(10));
      } else {
        //If they don't follow anyone, just return recent posts from the DB
        recentPostData.push(allPosts);
      }

      //Get posts the user has posted. Otherwise, show a "No Posts from You" component
      const userPosts = await Posts.find({ user_id: loggedInUser.user_id });

      if (userPosts) {
        yourPostData.push(userPosts);
      } else {
        yourPostData == [0];
      }
    } else if (!currentUserID) {
      //Get recent posts from the DB
      recentPostData.push(allPosts);
    }
    res.json([yourPostData, recentPostData]);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log(error);
  }
});

export default router;
