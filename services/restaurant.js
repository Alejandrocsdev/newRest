const db = require('../models')
const Rest = db.Rest

const attributes = [
  'id',
  'name',
  'name_en',
  'category',
  'image',
  'location',
  'phone',
  'google_map',
  'rating',
  'description'
]

module.exports = {
  getAll: () => Rest.findAll({ attributes, raw: true }),
  getById: (id) => Rest.findByPk(id, { attributes, raw: true }),
  create: (body) => Rest.create(body)
}
