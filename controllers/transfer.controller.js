const Transfer = require('../models/transfer.model');
const catchAsync = require('../utils/catchAsync');

exports.transferUserAmount = catchAsync(async (req, res, next) => {
  const {senderUserId,accountNumber, amount } = req.body;

  const userRx = await Transfer.findOne({
    where: {
      status: true,
      accountNumber,
    },
  });

  const receiverUserId = userRx.id

  const userTx = await Transfer.findOne({
    where: {
      status: true,
      id: senderUserId
    },
  });

  if (amount > userTx.amount) {
    return res.status(400).json({
        status:'error',
        message:'amount exceeded '
    })
  }

  if (userRx.id === userTx.id) {
    return res.status(400).json({
        status:'error',
        message:'You can`t send money to yourself'
    })
  }

  const userTxAmountNew = userTx.amount - amount

  const userRxAmountNew = userRx.amount + amount

  await userRx.update({amount: userRxAmountNew})
  await userTx.update({amount: userTxAmountNew})

  await Transfer.create({amount, senderUserId, receiverUserId})

   res.status(200).json({
    status:'success',
    message:' Transfer Exit'
  })
});

