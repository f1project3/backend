// Dependencies

require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const routes = require("./routes/index");
const cors = require("cors");
// MiddleWare
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/", routes);
app.use((req, res) => {
  res.status(404).json({ message: "Not A Proper Route." });
});

//listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));