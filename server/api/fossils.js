const router = require('express').Router()
const {Fossil} = require('../db/models')

// displays selected fossil by id
router.get('/:id', async (req, res, next) => {
  try {
    const selectedFossil = await Fossil.findByPk(req.params.id)
    if (selectedFossil) {
      res.status(200).json(selectedFossil)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// displays all fossils directory page
router.get('/', async (req, res, next) => {
  try {
    const fossils = await Fossil.findAll()
    if (fossils) {
      res.status(200).json(fossils)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
