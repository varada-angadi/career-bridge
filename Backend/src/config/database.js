const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
  } 
  catch (err) {
    console.error("Error connecting to Database", err);
  }
}

module.exports = connectToDb;
