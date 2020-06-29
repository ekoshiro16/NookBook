const router = require('express').Router()
const {Song} = require('../db/models')

// displays selected song by id
router.get('/:id', async (req, res, next) => {
  try {
    const selectedSong = await Song.findByPk(req.params.id)
    if (selectedSong) {
      res.status(200).json(selectedSong)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// displays all songs directory page
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
