const { Router } = require('express');
const router = new Router();

let products = [
    { id : 1, name: 'popcornmaskin' },
    { id : 2, name: 'kastrull' },
    { id : 3, name: 'fjärrkontroll' },
    { id : 4, name: 'fredagsmyskitet' }
]

// return all products
router.get('/', (req, res) => {
    res.send({ products : products })
})

// return single product
router.get('/:id', (req, res) => {
    let id = req.params.id*1;
    let results = products.find(product => product.id === id);
    res.send({ product: results })
})

module.exports = router;