const ContactModel = require("../models/contact");
const contactPost = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new ContactModel({
      name,
      email,
      subject,
      message,
    });
    const savedContact = await newContact.save();
    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      data: savedContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
module.exports = contactPost;
