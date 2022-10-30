const express = require("express");
const router = express.Router();

// @desc Login/Landing page
// @route GET /
router.get("/", (rew, res) => {
  res.send("Login");
});

// @desc Dashboard
// @route GET /dashboard
router.get("/dashboard", (rew, res) => {
  res.send("Dashboard");
});

module.exports = router;
