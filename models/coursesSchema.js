/**
 * Date: 2/04/2023
 * Subject: Portfolio All Models
 * Auth: Ismile Sardar
 */
const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Course = mongoose.model("course", coursesSchema);
module.exports = Course;
