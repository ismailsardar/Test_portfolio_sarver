/**
 * Date: 2/04/2023
 * Subject: Portfolio All Models
 * Auth: Ismile Sardar
 */
const mongoose = require("mongoose");

const introSchema = new mongoose.Schema(
  {
    welcomeText: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Intro = mongoose.model("intro", introSchema);
module.exports = Intro;
