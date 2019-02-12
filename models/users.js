const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username: { type: String, required: true },
   password: { type: String, required: true },
   imgURL: { type: String },
   interested: [String],
   dates: [String], // list of id's of dates
   info: {
      name: String,
      age: Number,
      height: String,
      location: String,
      bio: String
   }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
