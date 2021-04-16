const fs = require('fs/promises');

(async () => {

    try {

        // Read text file
        let data = await fs.readFile('./hello.txt', 'utf-8');
        console.log(data.split('\n'))
    
    } catch(err) {
        console.error(err);
    }

})()


/*
(async () => {

    try {

        // Append text to file
        let msg = 'Hello World Again! \n';

        await fs.appendFile('./hello.txt', msg);
        console.log('File updated!')
    
    } catch(err) {
        console.error(err);
    }

})()
*/