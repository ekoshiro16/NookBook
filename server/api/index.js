const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/creatures', require('./creatures'))
router.use('/creatures/fish', require('./fish'))
router.use('/creatures/bugs', require('./bugs'))
router.use('/creatures/bugs/:id', require('./bugs'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
