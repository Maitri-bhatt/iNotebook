const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
// const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/test");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
