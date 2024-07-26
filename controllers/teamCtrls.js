const db = require("../models"); // where mongoose connection and models lives

const getTeam = (req, res) => {
  db.Team.find({}).then((foundTeam) => {
    if (!foundTeam) {
      res.status(404).json({ message: "Cannot find Team" });
    } else {
      res.status(200).json({ data: foundTeam });
    }
  });
};
const getTeamDrivers = (req, res) => {
  db.Player.find({})
    .then((allDrivers) => {
      const id = req.params.id;
      // Creating a deep copy of the allDrivers array (creating a new array that we would be able to manipulate with). Without it, we would only be able to read allDrivers, but not manipulate data. taking json data, turning into a string, and then parsing it into a new json array that we can modify.

      const driverData = JSON.parse(JSON.stringify(allDrivers));

      // Filtering based on id (map v filter: map will always return the same amount of array items, but it will change desired object. in contrast, we use filter to filter out things based on a condition.)

      const filteredData = driverData.filter(
        (driver) => driver.team_name === id
      );
      //if cannot find anything in database
      if (!allDrivers) {
        res.status(404).json({ message: "Cannot find People" });
      } else {
        //return
        res.status(200).json({ data: filteredData });
        console.log(filteredData)
      }
    })
    //error
    .catch((error) => {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    });
};

const createTeam = (req, res) => {
  db.Team.create(req.body).then((createdTeam) => {
    if (!createdTeam) {
      res.status(400).json({ message: "Cannot create Team" });
    } else {
      res.status(201).json({ data: createdTeam, message: "Team created" });
    }
  });
};

const updateTeam = (req, res) => {
  db.Team.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedTeam) => {
      if (!updatedTeam) {
        res.status(400).json({ Message: "Could not update Team" });
      } else {
        res.status(200).json({ Data: updatedTeam, Message: "Team updated" });
      }
    }
  );
};

const deleteTeam = (req, res) => {
  db.Team.findByIdAndDelete(req.params.id).then((deletedTeam) => {
    if (!deletedTeam) {
      res.status(400).json({ Message: "Could not delete Team" });
    } else {
      res.status(200).json({ Data: deletedTeam, Message: "Team deleted" });
    }
  });
};
module.exports = {
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
  getTeamDrivers,
};
