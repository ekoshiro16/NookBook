const router = require('express').Router()
const {Villager} = require('../db/models')

// displays selected villager by id
router.get('/:id', async (req, res, next) => {
  try {
    const selectedVillager = await Villager.findByPk(req.params.id)
    if (selectedVillager) {
      res.status(200).json(selectedVillager)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// displays all villagers directory page
router.get('/', async (req, res, next) => {
  try {
    const villagers = await Villager.findAll()
    if (villagers) {
      res.status(200).json(villagers)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
