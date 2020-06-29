const User = require('./user')
const Bug = require('./bug')
const Fish = require('./fish')
const Song = require('./song')
const BGM = require('./bgm')
const Fossil = require('./fossil')
const Villager = require('./villager')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Bug,
  Fish,
  Song,
  BGM,
  Fossil,
  Villager
}
