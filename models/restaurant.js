const restaurants = require('../public/json/restaurants.json')

module.exports = {
  getAll: () => restaurants,
  getById: (id) => restaurants.find((restaurant) => restaurant.id === Number(id)),
  getMatched: (keyword) =>
    keyword
      ? restaurants.filter((restaurant) =>
          Object.values(restaurant).some((property) => {
            if (typeof property === 'string') {
              return property.toLowerCase().includes(keyword.toLowerCase())
            }
            return false
          })
        )
      : restaurants
}
