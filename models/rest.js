'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Rest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rest.init(
    {
      name: DataTypes.STRING,
      name_en: DataTypes.STRING,
      category: DataTypes.INTEGER,
      image: DataTypes.STRING,
      location: DataTypes.STRING,
      phone: DataTypes.STRING,
      google_map: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Rest'
    }
  )
  return Rest
}
