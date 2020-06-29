const Sequelize = require('sequelize')
const db = require('../db')

const Fossil = db.define('fossil', {
  name: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  fileName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  museumPhrase: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageURI: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Fossil
