const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ContactRouter = require("./Router/ContactRouter");
require("dotenv").config();
require("./Models/db");
app.use(bodyparser.json());
app.use("/contact", ContactRouter);
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
