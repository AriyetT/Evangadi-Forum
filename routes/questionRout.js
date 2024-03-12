const express = require("express");
const router = express.Router();

// authentications middleware
const authMiddleware = require("../middleware/authMiddleware");

router.get("/all-questions", authMiddleware, (req, res) => {
  res.send("all questions");
});

module.exports = router;
