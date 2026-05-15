const express = require("express");
const authRouter = express.Router();

/** Require all the controllers here */
const {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController,
} = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middleware");

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 */
authRouter.post("/login", loginUserController);

/**
 * @route GET /api/auth/logout
 * @description clear cookie from user cookie and add token in blacklist
 * @access public
 */
authRouter.get("/logout", logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me", authUser, getMeController);

module.exports = authRouter;
