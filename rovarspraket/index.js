const Express = require('express');
const app = new Express();

const text = require('./routes/text');

// Middleware
app.use(Express.json())

// Routes
app.use('/', Express.static('public'))
app.use('/text', text)

app.listen(3030, () => {
    console.info('Server is up n running!');
})