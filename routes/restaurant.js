const express = require('express')
const router = express.Router()
const { restaurant: restaurantController } = require('../controllers')

router.get('/:id', restaurantController.read)

module.exports = router
