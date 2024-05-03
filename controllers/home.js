const { restaurant: restaurantService } = require('../services')

module.exports = {
  list: async (req, res) => {
    try {
      const restaurants = await restaurantService.getAll()
      res.render('home', { restaurants })
    } catch (err) {
      console.error('Error:', err)
      res.status(500).send('Internal Server Error')
    }
  },
  match: async (req, res) => {
    try {
      const keyword = req.query.search?.trim()
      const create = true
      const restaurants = await restaurantService.getAll()
      const matched = keyword
        ? restaurants.filter((restaurant) =>
            Object.values(restaurant).some((property) => {
              if (typeof property === 'string') {
                return property.toLowerCase().includes(keyword.toLowerCase())
              }
            })
          )
        : restaurants
      res.render('home', { restaurants: matched, keyword, create })
    } catch (err) {
      console.error('Error:', err)
      res.status(500).send('Internal Server Error')
    }
  }
}
