const express = require("express");
const router = express.Router();
const Dates = require("../models/dates.js");
const User = require("../models/users.js");

router.post("/", (req, res) => {
   // console.log(req.body);

   // Initializes Data Inside Variables
   const currentUserID = req.body.currentUserID;
   const userID = req.body.userID;
   const time = req.body.time;
   const description = req.body.description;

   // Validates
   console.log(currentUserID, userID, time, description);

   const date = {
      time: time,
      description: description
   };

   // Creates Date And Updates Each User With The Same Data _id
   Dates.create(date, (error, createdDate) => {
      // https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
      User.findByIdAndUpdate(
         currentUserID,
         { $push: { dates: createdDate._id } },
         { new: true },
         (err, updatedUser) => {
            console.log(updatedUser);
         }
      );

      User.findByIdAndUpdate(
         userID,
         { $push: { dates: createdDate._id } },
         { new: true },
         (err, updatedUser) => {
            console.log(updatedUser);
         }
      );
   });

   res.status(201).json({
      status: 201,
      message: "successfully created a date"
   });
});

module.exports = router;
