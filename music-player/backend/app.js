const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
// const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const songsRouter = require("./routes/songs");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());
app.use(express.json());

const uri = process.env.ATLAS;
//const uri2 = "mongodb://localhost:27017/userDB";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/songs", songsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
