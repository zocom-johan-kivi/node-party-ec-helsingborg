const { getRandom, getAll, postJoke } = require('./jokes');

// get random joke
//getRandom().then(joke => console.log(joke));

(async () => {

    try {
        console.log(await getRandom())
    }

    catch(err) {
        console.error(err)
    }
    
})();


// getAll().then(jokes => console.log(jokes));
/*
let joke = 'Sore throats are a pain in the neck!';
postJoke(joke)
.then(resp => console.log(resp))
.catch(err => console.error())
*/