const Sequelize = require('sequelize')
const db = require('../db')

const BGM = db.define('bgm', {
  fileName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hour: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  weather: {
    type: Sequelize.STRING,
    allowNull: false
  },
  musicURI: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = BGM
