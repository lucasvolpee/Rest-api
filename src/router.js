const express = require('express')
const ProductController = require('./models/controllers/ProductController')
const CarController = require('./models/controllers/CarController')
const routes = express.Router()


// product
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

//car
routes.get('/cars', CarController.index)
routes.get('/cars/:id', CarController.show)
routes.post('/cars', CarController.store)


module.exports =  routes