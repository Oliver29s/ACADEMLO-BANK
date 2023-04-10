const authController = require('../controllers/auth.controller')


const express = require('express');
const validations = require('../middlewares/validations.middlewares');

const router = express.Router();



router.post('/sigunp',validations.createUserValidation,authController.singup)


router.post('/login',validations.findOneUserValidation,authController.login)

module.exports = router