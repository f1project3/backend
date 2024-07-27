const mongoose = require("mongoose");

//models
const DriverSchema = new mongoose.Schema({
  name: String,
  team: String,
  description: String,
});

const Driver = mongoose.model("driver", DriverSchema);

module.exports = Driver;
