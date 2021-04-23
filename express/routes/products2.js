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

    if(JSON.stringify(req.query) === '{}'){
    
        res.send({ products : products })
    
    } else {
        
        let results = products.find(p => p.id === parseInt(req.query.id))
        res.send({ product: results })
    
    }
})

module.exports = router;