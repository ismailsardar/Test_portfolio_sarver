/**
 * Date: 2/04/2023
 * Subject: Portfolio All Models
 * Auth: Ismile Sardar
 */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please add email"],
      unique: true,
      match: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "please enter a valid emile",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      trim: true,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
