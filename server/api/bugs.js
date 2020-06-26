const router = require('express').Router()
const {Bug} = require('../db/models')

// displays all bugs directory page
router.get('/', async (req, res, next) => {
  try {
    const bug = await Bug.findAll()
    if (bug) {
      res.status(200).json(bug)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
