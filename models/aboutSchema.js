/**
 * Date: 2/04/2023
 * Subject: Portfolio All Models
 * Auth: Ismile Sardar
 */
const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    lottieURL: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const About = mongoose.model("about", aboutSchema);
module.exports = About;
