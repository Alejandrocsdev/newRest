const restaurants = require('../public/json/restaurants.json')

module.exports = {
  getAll: () => restaurants,
  getById: (id) => restaurants.find((restaurant) => restaurant.id === id)
}
