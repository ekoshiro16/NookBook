const router = require('express').Router()
const {Song} = require('../db/models')

// displays all music directory page
router.get('/', async (req, res, next) => {
  try {
    const songs = await Song.findAll()
    if (songs) {
      res.status(200).json(songs)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
