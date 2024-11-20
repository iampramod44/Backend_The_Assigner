const mongoose = require("mongoose");
const EducationalQualificationSchema = new mongoose.Schema({
  highSchool: {
    schoolName: { type: String, required: true },
    board: { type: String, required: true },
    percentage: { type: Number, required: true, min: 0, max: 100 },
    yearOfPassing: { type: Number, required: true },
  },
  intermediate: {
    collegeName: { type: String, required: true },
    board: { type: String, required: true },
    percentage: { type: Number, required: true, min: 0, max: 100 },
    yearOfPassing: { type: Number, required: true },
  },
});
const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    educationalQualifications: {
      type: EducationalQualificationSchema,
      required: true,
    },
    currentLocation: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    photo: { type: String },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("profile", ProfileSchema);
module.exports = ProfileModel;
