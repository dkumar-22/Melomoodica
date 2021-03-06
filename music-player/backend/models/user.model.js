const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    recent: {type: Array},
    liked : {type: Array}
  }
);

const User = mongoose.model("User", user);

module.exports = User;
