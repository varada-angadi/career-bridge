const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenBlackListModel = require("../models/blacklist.model");

/**
 * @name registerUserController
 * @description register a new user, expecting username, email and password
 * @route POST /api/auth/register
 * @access Public
 */
async function registerUserController(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "Account already exist with this username or email",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

/**
 * @name loginUserController
 * @description login a user, expecting email and password
 * @route POST /api/auth/login
 * @access Public
 */

async function loginUserController(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Account does not exists",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);
  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

/**
 * @name logoutUserController
 * @description blacklisting the token and removing token from cookie
 * @route GET /api/auth/logout
 * @access Public
 */
async function logoutUserController(req, res) {
  try {
    const token = req.cookies.token;
    if (token) {
      await tokenBlackListModel.create({ token });
    }
    res.clearCookie("token");
    res.status(200).json({
      message: "User logged out successfully.",
    });
  } catch (err) {
    console.error("Logout error:", error);
  }
}

/**
 * @name getMeController
 * @description get the current logged in user details
 * @route GET /api/auth/get-me
 * @access private
 */
async function getMeController(req, res) {
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        message:"User detailes fetched succesfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
    
}

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController
};
