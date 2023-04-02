/**
 * Date: 31/03/2023
 * Subject: Portfolio All auth controller
 * Auth: Ismile Sardar
 */

const jwt = require("jsonwebtoken");
const { hashPassword } = require("../helper/auth.js");
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
    // 6. create signed jwt
    // const token = jwt.sign({ _id: newUser._id }, process.env.JWT_KEY, {
    //   expiresIn: "7d",
    // });
    // 7. send response
    res.status(201).json({
      user: {
        name: newUser.userName,
        email: newUser.email,
        role: newUser.role,
      },
    //   token: token,
    });
  } catch (error) {
    console.log(error);
  }
};
