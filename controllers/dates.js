const express = require("express");
const router = express.Router();
const Dates = require("../models/dates.js");
const User = require("../models/users.js");

router.post("/", (req, res) => {
   // console.log(req.body);

   // Initializes Data Inside Variables
   const time = req.body.time;
   const description = req.body.description;

   const currentUserID = req.body.currentUserID;
   const currentUserimgURL = req.body.currentUserimgURL;
   const currentUsername = req.body.currentUsername;
   const currentUserage = req.body.currentUserage;
   const currentUserlocation = req.body.currentUserlocation;

   const intrestedUserID = req.body.intrestedUserID;
   const intrestedUserimgURL = req.body.intrestedUserimgURL;
   const intrestedUsername = req.body.intrestedUsername;
   const intrestedUserage = req.body.intrestedUserage;
   const intrestedUserlocation = req.body.intrestedUserlocation;

   // Validates
   console.log(
      currentUserID,
      currentUserimgURL,
      currentUsername,
      currentUserage,
      currentUserlocation
   );

   console.log(
      intrestedUserID,
      intrestedUserimgURL,
      intrestedUsername,
      intrestedUserage,
      intrestedUserlocation
   );

   const date = {
      time: time,
      description: description,
      currentUserID: currentUserID,
      currentUserimgURL: currentUserimgURL,
      currentUsername: currentUsername,
      currentUserage: currentUserage,
      currentUserlocation: currentUserlocation,
      intrestedUserID: intrestedUserID,
      intrestedUserimgURL: intrestedUserimgURL,
      intrestedUsername: intrestedUsername,
      intrestedUserage: intrestedUserage,
      intrestedUserlocation: intrestedUserlocation
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
         intrestedUserID,
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
