const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const userSeed = require("../models/users_seed.js");
const bcrypt = require("bcryptjs");

// create route
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser) => {
    res.status(201).json({
      status: 201,
      message: "user created"
    });
  });
});

// seed route
router.get("/seed", (req, res) => {
  User.create(userSeed, (err, createdUsers) => {
    res.status(201).json({
      status: 201,
      message: "user database seeded"
    });
  });
});

// read route
router.get("/", (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.json(foundUsers);
  });
});

// delete route
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, removedUser) => {
    res.json(removedUser);
  });
});

// update route
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
    res.json(updatedUser);
  });
});

module.exports = router;
