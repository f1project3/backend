const mongoose = require("mongoose");

//models
const PlayerSchema = new mongoose.Schema({
  name: String,
  team: String,
  description: String,
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
