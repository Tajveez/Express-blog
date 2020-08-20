const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("In articles....");
});

router.get("/writeforus", (req, res) => {
  res.send("In write for us....");
});

module.exports = router;
