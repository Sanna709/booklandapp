const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/book', require('./book'))
route.use('/wishlist', require('./wishlist'))
route.use('/msg', require('./msg'))

exports = module.exports = {
    route
}