const { post, get } = require('./joke');

post('Två bagare och en smet.')


get().then(joke => console.log(joke));