const router = require('express').Router()
const {Fish} = require('../db/models')

// displays selected fish by id
router.get('/:id', async (req, res, next) => {
  try {
    const selectedFish = await Fish.findByPk(req.params.id)
    if (selectedFish) {
      res.status(200).json(selectedFish)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

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
