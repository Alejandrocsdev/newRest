const restaurantModel = require('../models')

module.exports = {
  getAllRestaurants: () => {
    return restaurantModel.getAll()
  },
  getRestaurantById: (id) => {
    return restaurantModel.getById(id)
  }
}