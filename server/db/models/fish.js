const Sequelize = require('sequelize')
const db = require('../db')

const Fish = db.define('fish', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  availability: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  shadow: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  priceCJ: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  catchPhrase: {
    type: Sequelize.STRING,
    allowNull: false
  },
  museumPhrase: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING
  },
  iconURL: {
    type: Sequelize.STRING
  }
})

module.exports = Fish
