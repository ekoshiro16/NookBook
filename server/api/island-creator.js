const router = require('express').Router()

//display island creator page
router.get('/', async (req, res, next) => {
  try {
    const island = await Island.findAll()
    if (island) {
      res.status(200).json(island)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
