/**
 * Date: 2/04/2023
 * Subject: Portfolio add experience
 * Auth: Ismile Sardar
 */

const Experience = require("../models/experienceSchema");

exports.addExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    // console.log(experience)
    res.status(200).send({
      success: true,
      message: "Experience updated successfully",
      data: experience,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete experience
exports.deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({
      success: true,
      message: "Experience deleted successfully",
      data: experience,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
