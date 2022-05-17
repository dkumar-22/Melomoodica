const router = require("express").Router();
let Song = require("../models/song.model");

router.route("/add").post((req, res) => {
    console.log(req.body);
  const newSong = new Song({
    name: req.body.name,
    mood: req.body.mood,
    singer: req.body.singer,
    cover: req.body.cover,
    link: req.body.link,
  });

  newSong
    .save()
    .then(() => res.json("Song added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  Song.find({}, (err, rec) => {
    if (err) res.status(400).json("Error: " + err);
    else {
      res.send(rec);
    }
  });
});

router.route("/happy").get((req, res) => {
  Song.find({mood:"happy"}, (err, rec) => {
    if (err) res.status(400).json("Error: " + err);
    else {
      res.send(rec);
    }
  });
});

router.route("/neutral").get((req, res) => {
  Song.find({mood:"neutral"}, (err, rec) => {
    if (err) res.status(400).json("Error: " + err);
    else {
      res.send(rec);
    }
  });
});

router.route("/sad").get((req, res) => {
  Song.find({mood:"sad"}, (err, rec) => {
    if (err) res.status(400).json("Error: " + err);
    else {
      res.send(rec);
    }
  });
});

router.route("/angry").get((req, res) => {
  Song.find({mood:"angry"}, (err, rec) => {
    if (err) res.status(400).json("Error: " + err);
    else {
      res.send(rec);
    }
  });
});

module.exports = router;
