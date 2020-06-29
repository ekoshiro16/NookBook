const Sequelize = require('sequelize')
const db = require('../db')

const Villager = db.define('villager', {
  fileName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  personality: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.STRING,
    allowNull: false
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  catchPhrase: {
    type: Sequelize.STRING,
    allowNull: false
  },
  iconURI: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURI: {
    type: Sequelize.STRING,
    allowNull: false
  },
  catchTranslations: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = Villager
