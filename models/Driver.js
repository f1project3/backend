const mongoose = require("mongoose");

//models
const DriverSchema = new mongoose.Schema({
  driver_number: Number,
  broadcast_name: String,
  full_name: String,
  name_acronym: String,
  team_name: String,
  team_colour: String,
  first_name: String,
  last_name: String,
  headshot_url: String,
  country_code: String,
  session_key: Number,
  meeting_key: Number,
});

const Driver = mongoose.model("drivers", DriverSchema);

module.exports = Driver;
