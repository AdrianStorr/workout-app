var express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var PORT = 3000;

var app = express();

app.use(logger("dev"));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/dbWorkout", { useNewUrlParser: true, useFindAndModify: false });

//app.use(require("./routes/api"));
app.use(require("./routes/view"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });