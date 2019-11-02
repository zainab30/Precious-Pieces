const express = require('express');
const router = express.Router();
const Products = require('../Models/products')

//get lists of products from db
router.get('/products', (req, res, next) => {
    Products.find({}).then((products) => {
        res.send(products);
    })
});

//add new product in products list from db
router.post('/products', (req, res, next) => {
    // var product = new Products(req.body);
    // product.save();

    Products.create(req.body).then((products) => {
        res.send(products)
    }).catch(next)
});


//update a product in products lists from db
router.put('/products/:id', (req, res, next) => {
    Products.findByIdAndUpdate({ _id: req.params.id }, req.body).then((products) => {
        Products.findOne({ _id: req.params.id }, req.body).then((products) => {
            res.send(products)
        });
    });
});

//delete a product from products list from db
router.delete('/products/:id', (req, res, next) => {
    Products.findByIdAndRemove({ _id: req.params.id }).then((products) => {
        res.send(products)
    });
});


module.exports = router;