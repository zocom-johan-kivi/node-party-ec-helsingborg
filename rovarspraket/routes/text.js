const { Router } = require('express');
const router = new Router();
const bandit = require('./../bandit');


// handle POST req
router.post('/', async (req, res) => {

   let resp = await bandit(req.body.text)
    res.send({ msg: resp })
})

module.exports = router;