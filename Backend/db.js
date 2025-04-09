const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI).catch((err) => console.log(err));
  console.log("Connected to Mongo Successfully");
};

module.exports = connectToMongo;
