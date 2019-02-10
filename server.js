// dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 3000;

const usersController = require("./controllers/users");
const sessionsController = require("./controllers/sessions");
// const datesController = require("./controllers/dates");

app.use(express.json());
app.use(express.static("public"));
app.use(
   session({
      secret: "feedmeseymour",
      resave: false,
      saveUninitialized: false
   })
);

app.use("/users", usersController);
app.use("/sessions", sessionsController);
// app.use("/dates", datesController);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + "sad"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
   console.log("connected to mongoose...");
});

app.listen(PORT, () => {
   console.log("listening on port:", PORT);
});
