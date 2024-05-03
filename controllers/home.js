const { restaurant: restaurantService } = require('../services')

module.exports = {
  list: (req, res) => {
    res.render('home', { restaurants: restaurantService.getAllRestaurants() })
  }
}
