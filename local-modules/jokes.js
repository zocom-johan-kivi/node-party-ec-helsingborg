const jokes = [
    'Två gubbar med JÄTTESTORA huvuden var ute och gick, då den ena frågade: vill du gå på bio? - Ja, jättehjärna!',
    'haj val! haj haj!'
];

function get(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let randJoke = Math.floor(Math.random()*jokes.length);
            resolve(jokes[randJoke]);

        }, 1000)

    })
}

function post(joke){
    jokes.push(joke)
}

module.exports = {get, post};