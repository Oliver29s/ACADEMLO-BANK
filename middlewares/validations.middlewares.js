const { body, validationResult } = require('express-validator');

const valiFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createUserValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long'),

  valiFields,
];

exports.findOneUserValidation = [
  body('accountNumber')
    .notEmpty()
    .withMessage('accountNumber cannot be empty')
    .isLength({ min: 6 })
    .withMessage('accountNumber must be at least 6 character long'),
  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long'),
];
