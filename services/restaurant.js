const { restaurant: restaurantModel } = require('../models')

module.exports = {
  getAllRestaurants: () => restaurantModel.getAll(),
  getRestaurantById: (id) => restaurantModel.getById(id),
  getMatchedRestaurants: (keyword) => restaurantModel.getMatched(keyword)
}
