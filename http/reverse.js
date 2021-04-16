function reverse(string){

        let reversed = string.split('').reverse().join('');
        return reversed;
}


module.exports = { reverse }