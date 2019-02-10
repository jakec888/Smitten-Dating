const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username: { type: String, required: true },
   password: { type: String, required: true },
   imgURL: { type: String },
   interested: [String],
   info: {
      name: String,
      age: String,
      height: String,
      location: String,
      bio: String
   }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
