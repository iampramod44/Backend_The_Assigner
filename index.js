const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ProfileRouter = require("./Router/ProfileRouter");
require("dotenv").config();
require("./Models/db");
app.use(bodyparser.json());

app.use("/profile", ProfileRouter);
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
