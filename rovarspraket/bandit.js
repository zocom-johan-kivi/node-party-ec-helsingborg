module.exports = (text) => {
    return new Promise((resolve, reject) => {
        if(text.length) {
            
            let consonants = 'bcdfghjklmnpqrstvwxz';

            let translated = '';

            // translate
            for (let letter of text){
                
                if(consonants.includes(letter.toLowerCase())){

                    translated += `${letter}o${letter.toLowerCase()}`;

                } else {
                    translated += letter;
                }
            }

            resolve(translated)

        } else {
            reject({ msg: 'Text has no length'})
        }
    })
}