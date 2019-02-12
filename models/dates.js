const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema({
   time: { type: String, required: true },
   description: { type: String, required: true },
   currentUserID: { type: String, required: true },
   currentUserimgURL: { type: String, required: true },
   currentUsername: { type: String, required: true },
   currentUserage: { type: String, required: true },
   currentUserlocation: { type: String, required: true },
   intrestedUserID: { type: String, required: true },
   intrestedUserimgURL: { type: String, required: true },
   intrestedUsername: { type: String, required: true },
   intrestedUserage: { type: String, required: true },
   intrestedUserlocation: { type: String, required: true },
   location: {
      lat: String,
      lng: String
   }
});

const Dates = mongoose.model("Dates", dateSchema);

module.exports = Dates;
