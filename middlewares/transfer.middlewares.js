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

exports.transferAmount=[
    body('amount')
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage('The amount must be a minimum of 3 character'),
    body('senderUserId')
    .notEmpty()
    .withMessage('It cant be empty'),
    body('accountNumber')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('The account must be a minimum of 6 character'),
    valiFields
]