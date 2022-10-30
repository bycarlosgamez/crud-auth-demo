const express = require("express");
const router = express.Router();

// @description Login/Landing page
// @route GET /
router.get("/", (rew, res) => {
  res.render("login");
});

// @description Dashboard
// @route GET /dashboard
router.get("/dashboard", (rew, res) => {
  res.render("dashboard");
});

module.exports = router;
