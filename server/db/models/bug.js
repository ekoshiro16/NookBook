const Sequelize = require('sequelize')
const db = require('../db')

const Bug = db.define('bug', {
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
  priceFlick: {
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

module.exports = Bug
