const { restaurant: restaurantService } = require('../services')

module.exports = {
  read: (req, res) => {
    const id = req.params.id
    res.render('restaurant', { restaurant: restaurantService.getRestaurantById(id) })
  }
}
