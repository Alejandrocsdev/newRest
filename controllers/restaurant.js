const { restaurant: restaurantService } = require('../services')

module.exports = {
  readDetail: async (req, res) => {
    try {
      const id = req.params.id
      const restaurant = await restaurantService.getById(id)
      if (!restaurant) {
        res.status(404).send('Restaurant not found')
        return
      }
      res.render('restaurant', { restaurant })
    } catch (err) {
      console.error('Error:', err)
      res.status(500).send('Internal Server Error')
    }
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
