const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const song = new Schema({
  name: { type: String },
  mood: { type: String },
  singer: { type: String },
  cover: { type: String },
  link: { type: String },
});

const Song = mongoose.model("Song", song);

module.exports = Song;
