const express = require('express')
const router = express.Router()

const homeRouter = require('./home')
const restaurantRouter = require('./restaurant')

router.use('/home', homeRouter)
router.use('/restaurant', restaurantRouter)

module.exports = router