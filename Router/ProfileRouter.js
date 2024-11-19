const profileController = require("../controllers/ProfileController");
const uploadimage = require("../middleware/multerconfig");
const profileValidate = require("../middleware/ProfileValidate");

const router = require("express").Router();
router.post(
  "/",
  uploadimage.single("images"),
  profileValidate,
  profileController
);

module.exports = router;
