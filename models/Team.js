const mongoose = require("mongoose");

//models
const TeamSchema = new mongoose.Schema({
  team_name: String,
  /* isFantasy: Boolean  */
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
