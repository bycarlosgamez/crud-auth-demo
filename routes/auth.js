const express = require("express");
const passport = require("passport");
const router = express.Router();

// @description     Auth with Google
// @route GET       /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @description     Google auth callback
// @route GET       /auth/google.callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (rew, res) => {
    res.redirect("/dashboard");
  }
);

// @descrition      Logout User
// @route /auth/logout

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
