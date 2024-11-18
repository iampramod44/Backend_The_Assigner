const contactPost = require("../controllers/ContactController");
const contactValidation = require("../middleware/contactValidate");

const router = require("express").Router();
router.post("/", contactValidation, contactPost);

module.exports = router;
