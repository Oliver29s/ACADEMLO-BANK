const User = require('../models/user.model');

exports.findAllUsers = async (req, res, next) => {
  const users = await User.findAll({
    where: {
      status: true,
    },
  });
  return res.status(200).json({
    status: 'succes',
    results: users.length,
    users,
  });
};

exports.findOne = async (req, res, next) => {
  const { user } = req;

  return res.status(200).json({
    status: 'succes',
    user,
  });
};

exports.update = async (req, res, next) => {
  const { user } = req;

  const { name, password } = req.body;
  if(!name){
    return res.status(400).json({
      status:'fail',
      message:'Name is required'
    })

  }

  if(!password){
    return res.status(400).json({
      status:'fail',
      message:'Password is required'
    })

  }

  await user.update({ name, password });

  return res.status(201).json({
    status: 'succes',
    user,
  });
};

exports.delete = async(req,res,next)=>{
    const {user} = req

    await user.update({status:false})

    return res.status(200).json({
        status: 'succes',
        message: 'The user has been deleted',
      });
}
