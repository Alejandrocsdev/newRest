const { restaurant: restaurantService } = require('../services')

module.exports = {
  list: (req, res) => {
    res.render('index', { restaurants: restaurantService.getAllRestaurants() })
  }
}
