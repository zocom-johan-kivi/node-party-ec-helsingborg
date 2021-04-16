const fs = require('fs/promises');


function getRandom(){
    return new Promise((resolve, reject) => {
        
        // read file
        fs.readFile('./jokes.txt')
        .then(data => {

            // convert from buffer to string
            let resp = data.toString();

            // make data > arr
            let arr = resp.split('\n');
            
            // random position in arr
            let rand = Math.floor(Math.random()*arr.length);
            
            // resolve promise
            resolve(arr[rand])
            
        })
        
    })
}

function getAll(){
    return new Promise((resolve, reject) => {

        fs.readFile('./jokes.txt')
        .then(data => {

            let resp = data.toString();

            let arr = resp.split('\n');

            resolve(arr)

        })

    });
}

function postJoke(newJoke){
    return new Promise((resolve, reject) => {

        fs.writeFile('./jokes.txt', `\n${newJoke}`)
        .then(err => {
            if(err) reject(err);
            resolve('Joke added to file.')
        })
    })
}

module.exports = { getRandom, getAll, postJoke }