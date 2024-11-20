const Joi = require("joi");

const profileValidate = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": "Name is required",
    }),

    email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email",
      "string.empty": "Email is required",
    }),

    phone: Joi.string().length(10).pattern(/^\d+$/).required().messages({
      "string.length": "Phone number must be 10 digits",
      "string.pattern.base": "Phone number must contain only digits",
      "string.empty": "Phone number is required",
    }),

    currentLocation: Joi.string().required().messages({
      "string.empty": "Current location is required",
    }),

    city: Joi.string().required().messages({
      "string.empty": "City is required",
    }),

    state: Joi.string().required().messages({
      "string.empty": "State is required",
    }),

    educationalQualifications: Joi.string()
      .custom((value, helpers) => {
        try {
          const qualifications = JSON.parse(value);

          const qualificationsSchema = Joi.object({
            highSchool: Joi.object({
              schoolName: Joi.string().required(),
              board: Joi.string().required(),
              percentage: Joi.number().min(0).max(100).required(),
              yearOfPassing: Joi.number()
                .min(1900)
                .max(new Date().getFullYear())
                .required(),
            }),
            intermediate: Joi.object({
              collegeName: Joi.string().required(),
              board: Joi.string().required(),
              percentage: Joi.number().min(0).max(100).required(),
              yearOfPassing: Joi.number()
                .min(1900)
                .max(new Date().getFullYear())
                .required(),
            }),
          });

          const { error } = qualificationsSchema.validate(qualifications);

          if (error) {
            return helpers.error("any.invalid");
          }

          return value;
        } catch (err) {
          return helpers.error("any.invalid");
        }
      })
      .required()
      .messages({
        "any.invalid": "Invalid educational qualifications format",
        "string.empty": "Educational qualifications are required",
      }),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
      error: error.details,
    });
  }
};

module.exports = profileValidate;
