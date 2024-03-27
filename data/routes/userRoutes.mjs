import Users from "../models/user.mjs";
import express from "express";

const router = express.Router();

// @route:   GET /id
// @desc:    Get user data.
// @access:  Public
router.post("/:id", async (req, res) => {
    try {
      let userData = await Users.findById(req.params.id);
      res.json(userData);
    } catch (error) {
      console.log(error);
    }
  });

export default router