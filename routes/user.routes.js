const userController = require('../controllers/user.controller')
const userMiddlewares = require('../middlewares/user.middlewares')
const express = require('express');

const router = express.Router();

router.get('/',userController.findAllUsers)

router
.route('/:id')
.get(userMiddlewares.validExisterUser,userController.findOne)
.patch(userMiddlewares.validExisterUser,userController.update)
.delete(userMiddlewares.validExisterUser,userController.delete)

module.exports = router