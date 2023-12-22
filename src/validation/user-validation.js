import Joi from 'joi';

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  full_name: Joi.string().max(150).required(),
  password: Joi.string().max(100).required(),
  name: Joi.string().max(100).required(),
  role: Joi.string().max(100).required(),
});

const loginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
}).options({ abortEarly: false, allowUnknown: false });

const getUserValidation = Joi.string().max(100).required();

const updateUserValidation = Joi.object({
  user_id: Joi.number().min(1).positive().required(),
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).optional(),
  name: Joi.string().max(100).optional(),
  role: Joi.string().max(100).required(),
});

export {
  registerUserValidation,
  loginUserValidation,
  getUserValidation,
  updateUserValidation,
};
