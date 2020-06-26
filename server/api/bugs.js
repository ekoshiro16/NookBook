const router = require('express').Router()
const {Bug} = require('../db/models')

// displays all bugs directory page
router.get('/', async (req, res, next) => {
  try {
    const bugs = await Bug.findAll()
    if (bugs) {
      res.status(200).json(bugs)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
