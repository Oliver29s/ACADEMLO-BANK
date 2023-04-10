const transferController = require('../controllers/transfer.controller')
const transferMiddlewares = require('../middlewares/transfer.middlewares')

const express = require('express');

const router = express.Router();

router
.route('/',)
.post(transferMiddlewares.transferAmount,transferController.transferUserAmount )

module.exports = router