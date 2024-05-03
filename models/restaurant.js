const restaurants = require('../public/json/restaurants.json')

module.exports = {
  getAll: () => {
    return restaurants
  },
  getById: (id) => {
    return restaurants.find((restaurant) => restaurant.id === id)
  }
}