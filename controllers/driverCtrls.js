const mongoose = require('mongoose');
const db = require("../models");

const getDriver = (req, res) => {
  db.Driver.find({}).then((foundDriver) => {
    if (!foundDriver) {
      res.status(404).json({ message: "Cannot find driver" });
    } else {
      res.status(200).json({ message: "Found Driver: ", data: foundDriver });
    }
  });
};

const createDriver = (req, res) => {
  db.Driver.create(req.body).then((createDriver) => {
    if (!createDriver) {
      res.status(404).json({ message: "Cannot create driver" });
    } else {
      res.status(200).json({ data: createDriver, message: "Created Driver" });
    }
  });
};

const createMultipleDrivers = async (team_name,driversArray) => {
  try {

    if (!Array.isArray(driversArray)) {
      throw new Error('driversArray must be an array');
    }

    // Assign new unique ObjectIDs to each driver
    const driversWithNewIds = driversArray.map(driver => ({
      ...driver, // leaving all the other data unchanged, only changing values below
      _id: new mongoose.Types.ObjectId(),
      team_name
    }));
    // Uploading multiple objects at once
    const createdDrivers = await db.Driver.insertMany(driversWithNewIds);
    return createdDrivers;
  } catch (error) {
    console.error("Error in createMultipleDrivers:", error.message); // Log error message

    throw error;
  }
};

const updateDriver = (req, res) => {
  db.Driver.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateDriver) => {
      if (!updateDriver) {
        res.status(404).json({ message: "Cannot create driver" });
      } else {
        res.status(200).json({ data: updateDriver, message: "Updated Driver" });
      }
    }
  );
};

const deletedDriver = (req, res) => {
  db.Driver.findByIdAndDelete(req.params.id).then((deleteDriver) => {
    if (!deleteDriver) {
      res.status(404).json({ message: "Cannot create driver" });
    } else {
      res.status(200).json({ data: deleteDriver, message: "Deleted Driver" });
    }
  });
};

module.exports = {
  getDriver,
  createDriver,
  createMultipleDrivers,
  updateDriver,
  deletedDriver,
};
