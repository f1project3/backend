const mongoose = require("mongoose");

//models
const TeamSchema = new mongoose.Schema({
  team_name: String
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;