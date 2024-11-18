const mongoose = require("mongoose");
const mongo_url = process.env.MONGO_CONN;

mongoose
  .connect(mongo_url, {
    dbName: "Contact-us",
  })
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.log("MongoDb Connection");
  });
