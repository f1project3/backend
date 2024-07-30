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
      res.status(200).json({ data: createDriver ,  message: "Created Driver"});
    }
  });
};

const updateDriver = (req, res) => {
  db.Driver.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateDriver) => {
      if (!updateDriver) {
        res.status(404).json({ message: "Cannot create driver" });
      } else {
        res.status(200).json({ data: updateDriver,  message: "Updated Driver" });
      }
    }
  );
};

const deletedDriver = (req, res) => {
  db.Driver.findByIdAndDelete(req.params.id).then((deleteDriver) => {
    if (!deleteDriver) {
      res.status(404).json({ message: "Cannot create driver" });
    } else {
      res.status(200).json({ data: deleteDriver,  message: "Deleted Driver" });
    }
  });
};
module.exports = {
  getDriver,
  createDriver,
  updateDriver,
  deletedDriver,
};