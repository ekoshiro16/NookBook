const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  name: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  buyPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sellPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  isOrderable: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  musicURI: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURI: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Song
