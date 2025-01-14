const express = require('express')
const router = express.Router()
const { home: homeController } = require('../controllers')

router.get('/', homeController.match)

module.exports = router
