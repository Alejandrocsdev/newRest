'use strict'

/** @type {import('sequelize-cli').Migration} */

const fs = require('fs')
const path = require('path')
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'public', 'json', 'restaurants.json'), 'utf8')
)

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rests', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rests', null)
  }
}
