const { restaurant: restaurantService } = require('../services')

module.exports = {
  readDetail: (req, res) => {
    const id = req.params.id
    res.render('restaurant', { restaurant: restaurantService.getRestaurantById(id) })
  },
  readCreate: (req, res) => {
    res.send('read CREATE restaurant page')
  },
  readEdit: (req, res) => {
    res.send('read EDIT restaurant page')
  },
  create: (req, res) => {
    res.send('create restaurant')
  },
  update: (req, res) => {
    res.send('update restaurant')
  },
  remove: (req, res) => {
    res.send('remove restaurant')
  }
}
