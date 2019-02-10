const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema({
   time: { type: String, required: true },
   description: { type: String, required: true },
   location: {
      lat: String,
      lng: String
   }
});

const Dates = mongoose.model("Dates", dateSchema);

module.exports = Dates;
