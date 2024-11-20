const ProfileModel = require("../models/profile");
const profileController = async (req, res) => {
  try {
    const existingUser = await ProfileModel.findOne({
      email: req.body.email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }
    const profileData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      currentLocation: req.body.currentLocation,
      city: req.body.city,
      state: req.body.state,
      educationalQualifications: JSON.parse(req.body.educationalQualifications),
      photo: req.photoUrl || null,
    };

    const newProfile = new ProfileModel(profileData);
    const savedProfile = await newProfile.save();

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: savedProfile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating profile",
      error: error.message,
    });
  }
};
module.exports = profileController;
