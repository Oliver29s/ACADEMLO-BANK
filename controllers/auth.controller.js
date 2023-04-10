const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.singup = catchAsync(async (req, res, next) => {

  const accountNumber = Math.ceil(Math.random() * 1000000);

  const amount = 1000;

  const { name, password } = req.body;

  const user = await User.create({
    name,
    password,
    accountNumber,
    amount,
  });
  res.status(201).json({
    status: 'succes',
    mesage: 'The user has ben created succesfully',
    user,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { accountNumber, password } = req.body;

  const user =  await User.findOne({
    where: {
      status: true,
      accountNumber,
      password,
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `User with account number: ${accountNumber} not found`,
    });
  }

  return res.status(200).json({
    status: 'success',
    user,
  });
});
