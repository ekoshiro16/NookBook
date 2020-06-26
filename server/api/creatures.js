const router = require('express').Router()
const {Creatures} = require('../db/models')

//display selected creature by ID
router.get('/:id', async (req, res, next) => {
  try {
    const selectedCreature = await Creature.findByPk(req.params.id)
    if (selectedCreature) {
      res.status(200).json(selectedCreature)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

//display all creatures directory page
router.get('/', async (req, res, next) => {
  try {
    const creatures = await Creature.findAll()
    if (creatures) {
      res.status(200).json(creatures)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

//create new creature
router.post('/', async (req, res, next) => {
  try {
    // const {name, description, price, itemsInStock, imageURL} = req.body
    // const newProduct = await Product.create({
    //   name,
    //   description,
    //   price,
    //   itemsInStock,
    //   imageURL
    // })
    // res.json(newProduct)
  } catch (err) {
    next(err)
  }
})

// delete selected creature by ID
router.delete('/:creatureId', async (req, res, next) => {
  try {
    const selectedCreature = await Creature.findAll({
      where: {
        id: req.params.productId
      }
    })
    selectedCreature.destroy()
    res.json(`${selectedCreature} has been deleted.`)
  } catch (err) {
    next(err)
  }
})

module.exports = router
