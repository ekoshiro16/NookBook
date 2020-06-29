const router = require('express').Router()
const {BGM} = require('../db/models')

// displays selected background music by id
router.get('/:id', async (req, res, next) => {
  try {
    const selectedBGM = await BGM.findByPk(req.params.id)
    if (selectedBGM) {
      res.status(200).json(selectedBGM)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// displays all background music directory page
router.get('/', async (req, res, next) => {
  try {
    const bgms = await BGM.findAll()
    if (songs) {
      res.status(200).json(bgms)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
