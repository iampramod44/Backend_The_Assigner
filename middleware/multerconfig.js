const multer = require("multer");
const path = require("path");

const fileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueFileName = Date.now() + "-" + file.originalname;
    req.photoUrl = `/images/${uniqueFileName}`;
    cb(null, uniqueFileName);
  },
});

const uploadimage = multer({ storage: fileStorageEngine });

module.exports = uploadimage;
