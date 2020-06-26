const router = require('express').Router()
const {Fish} = require('../db/models')

// displays all fish directory page
router.get('/', async (req, res, next) => {
  try {
    const fish = await Fish.findAll()
    if (fish) {
      res.status(200).json(fish)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
