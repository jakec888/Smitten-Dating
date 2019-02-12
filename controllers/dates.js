const express = require("express");
const router = express.Router();
const Dates = require("../models/dates.js");

router.post("/", (req, res) => {
   console.log(req.body);
});

module.exports = router;
