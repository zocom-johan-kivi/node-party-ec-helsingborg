
// 1. tar fram brödet ur påsen, 3sek
function bread(sek){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Brödet är framme!')
            resolve()
        }, sek)
    })
}

// 2. rostar brödet, 5sek
function toast(sek){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Toasten är lagom bränd.')
            resolve()
        }, sek)
    })
}

// 3. smörar brödet, 1sek
function butter(sek){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Toasten är smörad.')
            resolve()
        }, sek)
    })
}

// 4. lägg på ost, 1sek
function cheese(sek){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Osten är pålagd.')
            resolve()
        }, sek)
    })
}

// 5. avnjut, 3sek
function enjoy(sek){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('mmmmmmmm')
            resolve()
        },sek)
    })
}


// lets go
/*
bread(3000)
.then(() => toast(5000))
.then(() => butter(1000))
.then(() => cheese(1000))
.then(() => enjoy(3000))
.catch(err => console.error(err))
.finally(() => {
    console.log('jag körs alltid')
})

*/

(async () => {

    try {

        await bread(3000);
        await toast(5000);
        await butter(1000);
        await cheese(1000);
        await enjoy(3000);

    } 
    
    catch(err) {
        console.error(err);
    }

    finally {
        console.log('jag körs alltid!')
    }

})()