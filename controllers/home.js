const { restaurant: restaurantService } = require('../services')

module.exports = {
  list: (req, res) => {
    const keyword = req.query.search?.trim()
    res.render('home', { restaurants: restaurantService.getMatchedRestaurants(keyword), keyword })
  }
}
