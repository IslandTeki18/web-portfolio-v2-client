import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc     Get Auth User and Token
//@route    GET /api/users/login
//@access   Public
const postAuthUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Username or Password!");
  }
});

//@desc     Get admin profile
//@route    GET /api/users/profile
//@access   Private
const getAdminProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc     Update User Settings
//@route    PUT /api/users/profile/settings
//@access   Private/Admin
const putUpdateAdmin = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    user.username = req.body.username || user.username;
    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedAdmin = await user.save()

    res.json({
      _id: updatedAdmin._id,
      username: updatedAdmin.username,
      isAdmin: updatedAdmin.isAdmin,
      token: generateToken(updatedAdmin._id)
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

export { postAuthUser, getAdminProfile, putUpdateAdmin };
