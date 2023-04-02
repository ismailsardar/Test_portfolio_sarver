/**
 * Date: 31/03/2023
 * Subject: Portfolio All auth controller
 * Auth: Ismile Sardar
 */

const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helper/auth.js");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    // 1. destructure name, email, password from req.body
    const { userName, email, password } = req.body;
    // 2. all fields require validation
    if (!userName.trim()) {
      return res.status(404).json({ error: "Name is Required!" });
    }
    if (!email.trim()) {
      return res.status(404).json({ error: "E-mail is Required!" });
    }
    if (!password.trim() || password.length < 6) {
      return res
        .status(404)
        .json({ error: "Password must be at least 6 characters long!" });
    }
    // 3. check if email is taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ error: "E-mail is already taken!" });
    }
    // 4. hash password
    const passwordHash = await hashPassword(password);
    // 5. register customer
    const newUser = await new User({
      userName,
      email,
      password: passwordHash,
    }).save();

    // 7. send response
    res.status(201).json({
      user: {
        name: newUser.userName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    let password = req.body.password;
    let email = req.body.email;
    // 3. check if email is taken
    const existingUser = await User.findOne({ email });
    //  console.log(existingUser);
    if (!existingUser) {
      return res.status(404).json({ error: "user not found!" });
    }
    const match = await comparePassword(password, existingUser["password"]);
    if (!match) {
      return res.status(404).json({ error: "Rona password!" });
    }
    existingUser["password"] = "";

    // 6. create signed jwt
    const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_KEY, {
      expiresIn: "7d",
    });
    if (match) {
      res.status(200).json({
        success: true,
        message: "Login successfully",
        data: existingUser,
        token: token,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
