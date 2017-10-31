const User = require('./user')
const Address = require('./address')
const Order = require('./order')
const Sequelize = require('sequelize');
const Pokemon = require('./pokemon.js');
const db = require('../');

//Order: address, user, pokemon(item)
Order.hasOne(Address);
// Order.hasMany(Pokemon, {as: 'item'});
Order.belongsTo(User);

//User: address
User.hasOne(Address); //possibly many in later edition

//Address:
//no associations needed

//Types:
//no associations needed
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

Order.belongsToMany(Address);
Address.hasMany(Order);
Address.belongsTo(User);
Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
    db: db,
    Order: Order,
    Address: Address,
    User: User,
    Pokemon: Pokemon
};
