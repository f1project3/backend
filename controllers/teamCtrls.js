const db = require("../models"); // where mongoose connection and models lives
const {createMultipleDrivers } = require("./driverCtrls");


const createFantasyTeam = async (req, res) => {
  const { fantasy_team_name, favorites } = req.body;
  console.log('Request Body:', req.body); // Log request body to debug

  try {
    const createdTeam = await db.Team.create({ team_name: fantasy_team_name, isFantasy: true });
    await createMultipleDrivers(favorites);
    res.status(200).json({ data: createdTeam, message: "Fantasy team created successfully" });
  } catch (error) {
    console.error("Error creating fantasy team:", error);
    res.status(500).json({ message: "Failed to create fantasy team", error: error.message });
  }
};

const createTeam = async (team_name, isFantasy) => {
  await db.Team.create({ team_name, isFantasy }).then((createdTeam) => {
   console.log('createdTeam',createdTeam)
 
     if (!createdTeam) {
       res.status(400).json({ message: "Cannot create Team" });
     } else {
       res.status(200).json({ data: createdTeam, message: "Team created" });
     }
   });
 };

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
  db.Driver.find({ isFantasy:false })
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
        res.status(404).json({ message: "Cannot find Drivers" });
      } else {
        //return
        res.status(200).json({ data: filteredData});
      }
    })
    //error
    .catch((error) => {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    });
};

const getFantasyTeamDrivers = (req, res) => {
  db.Driver.find({ isFantasy: true })
    .then((allDrivers) => {

      const allDriversData = JSON.parse(JSON.stringify(allDrivers));


      // Group drivers by team name
      const groupedDrivers = allDriversData.reduce((acc, driver) => {
        const { team_name } = driver; // Extract team_name from the current driver

        // Check if the team_name key already exists in the accumulator

        
        if (!acc[team_name]) { // does the team name exist within the acc
          acc[team_name] = []; // If not, create a new array for this team_name
        }


        acc[team_name].push(driver); // Add the current driver to the appropriate team_name array



        return acc; // Return the accumulator for the next iteration
      }, {}); // Initialize the accumulator as an empty object


      

      res.status(200).json({ data: groupedDrivers });
    })
    .catch((error) => {
      res.status(500).json({ message: "An error occurred", error: error.message });
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
  createFantasyTeam,
  getFantasyTeamDrivers,
  getTeamDrivers,
};
