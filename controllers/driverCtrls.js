const db = require("../models");

const getDriver = (req, res) => {
  db.driver.find({}).then((founddriver) => {
    if (!founddriver) {
      res.status(404).json({ message: "Cannot find driver" });
    } else {
      res.status(200).json({ data: founddriver });
    }
  });
};

const createDriver = (req, res) => {
  db.driver.create(req.body).then((createddriver) => {
    if (!createddriver) {
      res.status(404).json({ message: "Cannot create driver" });
    } else {
      res.status(200).json({ data: createddriver });
    }
  });
};

const updatedDriver = (req, res) => {
  db.driver.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateddriver) => {
      if (!updateddriver) {
        res.status(404).json({ message: "Cannot create driver" });
      } else {
        res.status(200).json({ data: updateddriver });
      }
    }
  );
};

const deletedDriver = (req, res) => {
  db.driver.findByIdAndDelete(req.params.id).then((deleteddriver) => {
    if (!deleteddriver) {
      res.status(404).json({ message: "Cannot create driver" });
    } else {
      res.status(200).json({ data: deleteddriver });
    }
  });
};
module.exports = {
  getDriver,
  createDriver,
  updatedDriver,
  deletedDriver,
};
