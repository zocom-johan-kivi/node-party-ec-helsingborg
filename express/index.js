const Express = require('express');
const app = new Express();

const products = require('./routes/products');

app.use('/products', products)

app.listen(process.env.PORT || 3030, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})