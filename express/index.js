const Express = require('express');
const app = new Express();
const products = require('./routes/products2');


app.use((req, res, next) => {
    // req recieved
    let key =  req.headers['authorization'].split(' ')[1];
    
    if(key === process.env.SECRET){
        next()
    } else {
        res.sendStatus(403).send({ msg: 'The key you sent was WRONG!'});
    }
})


app.use('/products', products)

app.listen(process.env.PORT || 3030, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})