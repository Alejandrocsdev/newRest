const express = require('express')
const router = express.Router()
const { restaurant: restaurantController } = require('../controllers')

router.get('/create', restaurantController.readCreate)
router.post('/create', restaurantController.create)
router.get('/:id', restaurantController.readDetail)
router.get('/:id/edit', restaurantController.readEdit)
router.put('/:id', restaurantController.update)
router.delete('/:id', restaurantController.remove)

module.exports = router
