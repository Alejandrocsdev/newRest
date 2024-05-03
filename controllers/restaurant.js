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
    try {
      res.render('create')
    } catch (err) {
      console.error('Error:', err)
      res.status(500).send('Internal Server Error')
    }
  },
  readEdit: (req, res) => {
    res.send('read EDIT restaurant page')
  },
  create: async (req, res) => {
    try {
      console.log(req.body)
      const { name, name_en, category, image, location, phone, google_map, rating, description } =
        req.body
      await restaurantService.create({
        name,
        name_en,
        category,
        image,
        location,
        phone,
        google_map,
        rating,
        description
      })
      res.redirect('/home')
    } catch (err) {
      console.error('Error:', err)
      res.status(500).send('Internal Server Error')
    }
  },
  update: (req, res) => {
    res.send('update restaurant')
  },
  remove: (req, res) => {
    res.send('remove restaurant')
  }
}
