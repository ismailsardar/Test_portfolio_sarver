/**
 * Date: 2/04/2023
 * Subject: Portfolio All router
 * Auth: Ismile Sardar
 */
//third-parity module require
const express = require("express");
const auth = require("../controllers/auth");
const experience = require("../controllers/experience");
const { isSigning } = require("../middleware/auth");
const router = express.Router();

router.post("/add-experience", isSigning, experience.addExperience);
// update experience
router.post("/update-experience/:id", isSigning, experience.updateExperience);

router.post("/delete-experience/:id", isSigning,experience.deleteExperience);

module.exports = router;
